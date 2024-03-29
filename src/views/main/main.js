import { AbstractView } from "../../common/view";

export class MainView extends AbstractView {
  state = {
    loading: false,
    q: undefined,
  };

  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    const main = document.createElement("div");
    this.app.innerHTML = "";
    this.app.append(main);
  }
}
