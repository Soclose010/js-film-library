import { AbstractView } from "../../common/view";
import onChange from "on-change";
import { Header } from "../../components/header/header";
import { save } from "../../common/localstorage";
import { ENV } from "../../../env";
import { Film as view } from "../../components/film/film";

export class Film extends AbstractView {
  state = {
    loading: false,
    filmId: undefined,
  };

  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.state = onChange(this.state, this.stateHook.bind(this));
    this.setTitle("Loading");
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

  async loadFilm(id, key) {
    const res = await fetch(`https://apiget.ru?kinopoisk_id=${id}&key=${key}`);
    const data = await res.json();
    data.filmId = id;
    return data;
  }

  loadPromise(id, key) {
    return new Promise((resolve) => {
      const res = this.loadFilm(id, key);
      resolve(res);
    });
  }

  render() {
    const searchParams = new URLSearchParams(window.location.search);
    this.state.filmId = searchParams.get("id");
    const film = this.loadPromise(this.state.filmId, ENV.API_KEY_KP_APIGET);
    film.then((film) => {
      this.setTitle(film.filmId);
      const main = document.createElement("div");
      this.app.innerHTML = "";
      main.append(new view(this.appState, film).render());
      main.prepend(new Header(this.appState).render());
      this.app.append(main);
    });
  }
  destroy() {
    onChange.unsubscribe(this.appState);
    onChange.unsubscribe(this.state);
  }
}
