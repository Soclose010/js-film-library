import onChange from "on-change";
import { AbstractView } from "../../common/view";
import { Header } from "../../components/header/header";
import { FavoritesCart } from "../../components/favorites-cart/favorites-cart";
import { ENV } from "../../../env";
import { save } from "../../common/localstorage";

export class FavoritesView extends AbstractView {
  state = {
    loading: false,
    films: undefined,
  };
  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.state = onChange(this.state, this.stateHook.bind(this));
    this.setTitle("Favorites");
  }

  appStateHook(path) {
    if (path == "favorites") {
      save(this.appState.favorites);
      this.render();
    }
  }

  async stateHook(path) {
    if (path == "loading") {
      this.render();
    }
  }

  async loadFilms() {
    const filmIds = this.appState.favorites.slice();
    const res = await Promise.all(
      filmIds.map((id) => this.loadFilm(id, ENV.API_KEY_KP_APIGET))
    );
    return res;
  }

  async loadFilm(id, key) {
    const res = await fetch(`https://apiget.ru?kinopoisk_id=${id}&key=${key}`);
    const data = await res.json();
    data.filmId = id;
    return data;
  }

  loadPromise() {
    return new Promise((resolve) => {
      const res = this.loadFilms();
      resolve(res);
    });
  }
  render() {
    const films = this.loadPromise();
    films.then((films) => {
      this.state.films = films;
      const main = document.createElement("div");
      this.app.innerHTML = "";
      main.append(new FavoritesCart(this.appState, this.state).render());
      main.prepend(new Header(this.appState).render());
      this.app.append(main);
    });
  }
  destroy() {
    onChange.unsubscribe(this.appState);
    onChange.unsubscribe(this.state);
  }
}
