export class AbstractView {
  constructor() {
    this.app = document.getElementById("root");
  }

  setTitle(title) {
    document.setTitle(title);
  }
  destroy() {
    return null;
  }
  render() {
    return null;
  }
}
