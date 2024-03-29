import { MainView } from "./views/main/main";

class App {
  state = {
    favotites: [],
  };
  routes = [
    {
      path: "",
      view: MainView,
    },
  ];

  constructor() {
    addEventListener("hashchange", this.route().bind(this));
    this.route();
  }

  route() {
    if (this.currentView) {
      this.currentView.destroy();
    }
    const route = this.routes.find((r) => {
      return r.path == location.hash;
    });
    this.currentView = new route.view(this.state);
    this.currentView.render();
  }
}

new App();
