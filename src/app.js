import { load } from "./common/localstorage";
import { FavoritesView } from "./views/favorites/favorites";
import { MainView } from "./views/main/main";

class App {
  state = {
    favorites: [],
  };
  routes = [
    {
      path: "",
      view: MainView,
    },
    {
      path: "#favorites",
      view: FavoritesView,
    },
  ];

  constructor() {
    this.state.favorites = load();
    window.addEventListener("hashchange", this.route.bind(this));
    this.route();
  }

  route() {
    if (this.currentView) {
      this.currentView.destroy();
    }
    const view = this.routes.find((r) => {
      return r.path == location.hash;
    }).view;
    this.currentView = new view(this.state);
    this.currentView.render();
  }
}

new App();
