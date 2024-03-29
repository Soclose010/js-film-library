import "./search.css";

export class Search {
  constructor(state) {
    this.state = state;
  }

  changeInput() {
    this.state.q = this.input.value;
  }

  render() {
    const el = document.createElement("div");
    el.classList.add("search");
    el.innerHTML = `<div class="search__wrapper">
          <img
            class="search__icon"
            src="./static/search-input.svg"
            alt="search-input-img"
          />
          <input
            type="text"
            class="search__input"
            placeholder="Find your films"
          />
        </div>
        <button class="search__btn">
          <img src="./static/search-white.svg" alt="search-input-img" />
        </button>
      </div>`;

    this.input = el.querySelector("input");
    el.querySelector("button").addEventListener(
      "click",
      this.changeInput.bind(this)
    );
    this.input.addEventListener("keydown", (e) => {
      if (e.code == "Enter") {
        this.changeInput();
      }
    });
    return el;
  }
}
