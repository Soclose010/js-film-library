import onChange from "on-change";
import { AbstractView } from "../../common/view";
import { Header } from "../../components/header/header";
import { Search } from "../../components/search/search";
import { ENV } from "../../../env";

export class MainView extends AbstractView {
  state = {
    films: [],
    loading: false,
    q: undefined,
  };

  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.state = onChange(this.state, this.stateHook.bind(this));
  }

  appStateHook(path) {
    if (path == "favorites") {
      this.render();
    }
  }

  async stateHook(path) {
    if (path == "q") {
      this.loading = true;
      const data = await this.loadFilms();
      this.loading = false;
      this.films = data.films;
    }

    if (path == "loading") {
      this.render();
    }
  }

  async loadFilms() {
    const res = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${this.state.q}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "X-API-KEY": ENV.API_KEY_KP_UNOFF,
        },
      }
    );
    return res.json();
  }

  render() {
    const main = document.createElement("div");
    this.app.innerHTML = "";
    main.append(new Search(this.state).render());
    main.prepend(new Header(this.appState).render());
    this.app.append(main);
  }
}
