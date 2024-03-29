import "./cart-item.css";
export class CartItem {
  constructor(appState, film) {
    this.appState = appState;
    this.film = film;
  }

  render() {
    const el = document.createElement("div");
    el.classList.add("cart");

    const inFavorites = this.appState.favorites.find(
      (filmId) => filmId == this.film.filmId
    );
    el.innerHTML = `<div class="cart__img">
              <img
                src="${this.film.posterUrlPreview}"
                alt="film-image"
              />
            </div>
            <div class="cart__wrapper">
              <div class="cart__info">
                <div class="cart__genres">${this.film.genres
                  .map((genre) => genre.genre)
                  .join(", ")}</div>
                <div class="cart__name-en">${this.film.nameEn}</div>
                <div class="cart__name-ru">${this.film.nameRu}</div>
                <div class="cart__age">${this.film.year}</div>
                <div class="cart__score">${this.film.rating}</div>
                <div class="cart__length">${this.film.filmLength}</div>
              </div>
              <div class="cart__footer">
                <button class="cart__button ${
                  inFavorites == undefined ? "" : "cart__favorites"
                }">
                  <img src="./static/favorites${
                    inFavorites == undefined ? "-white" : ""
                  }.svg" alt="favorites-img" />
                </button>
              </div>
            </div>`;

    if (inFavorites) {
      el.querySelector("button").addEventListener("click", () => {
        this.appState.favorites = this.appState.favorites.filter(
          (filmId) => filmId != this.film.filmId
        );
      });
    } else {
      el.querySelector("button").addEventListener("click", () => {
        this.appState.favorites.push(this.film.filmId);
      });
    }

    return el;
  }
}
