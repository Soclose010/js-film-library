import "./favorite-text.css";

export class FavoriteText {
  constructor(state) {
    this.state = state;
  }
  render() {
    const text = document.createElement("div");
    text.classList.add("text");
    text.innerHTML = `Favorite films - ${
      this.state.films != undefined ? this.state.films.length : 0
    }`;
    return text;
  }
}
