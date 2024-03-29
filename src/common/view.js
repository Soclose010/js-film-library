export class AbstractView {
  constructor() {
    this.app = document.getElementById("root");
  }

  setTitle(title) {
    document.title = title;
  }
  destroy() {
    return null;
  }
  render() {
    return null;
  }
}
