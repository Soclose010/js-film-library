import "./header.css";

export class Header {
  constructor(appState) {
    this.appState = appState;
  }

  render() {
    const el = document.createElement("header");
    el.classList.add("header");
    el.innerHTML = `<div class="header__logo">
          <img src="./static/logo.png" alt="logo-img" />
        </div>
        <div class="header__info">
          <a href="#" class="header__search">
            <img src="./static/search.svg" alt="search-img" />
            Film search</a
          >
          <a href="#favorites" class="header__favorites">
            <img src="./static/favorites.svg" alt="favorites-img" />
            Favorites
            <div class="header__favorites-count">${this.appState.favorites.length}</div>
          </a>
        </div>`;
    return el;
  }
}
