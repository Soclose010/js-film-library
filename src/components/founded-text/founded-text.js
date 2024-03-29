import "./founded-text.css";

export class FoundedText {
  constructor(state) {
    this.state = state;
  }
  render() {
    const text = document.createElement("div");
    text.classList.add("text");
    text.innerHTML = `Founded films - ${this.state.searchFilmsCountResult}`;
    return text;
  }
}
