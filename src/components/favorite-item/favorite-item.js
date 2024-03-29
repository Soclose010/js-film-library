import "./favorite-item.css";
export class FavoriteItem {
  constructor(appState, film) {
    this.appState = appState;
    this.film = film;
  }

  render() {
    const el = document.createElement("div");
    el.classList.add("cart");
    el.innerHTML = `<div class="cart__img">
              <img
                src="${this.film.poster_film_small}"
                alt="film-image"
              />
            </div>
            <div class="cart__wrapper">
              <div class="cart__info">
                <div class="cart__genres">${this.film.genre.join(", ")}</div>
                <div class="cart__name-en">${this.film.title_en}</div>
                <div class="cart__name-ru">${this.film.title_ru}</div>
                <div class="cart__age">${this.film.year}</div>
                <div class="cart__score">${
                  this.film.rating.kinopoisk.value
                }</div>
                <div class="cart__length">${this.film.duration}</div>
              </div>
              <div class="cart__footer">
                <button class="cart__button cart__favorites">
                  <img src="./static/favorites.svg" alt="favorites-img" />
                </button>
              </div>
            </div>`;

    el.querySelector("button").addEventListener("click", () => {
      this.appState.favorites = this.appState.favorites.filter(
        (filmId) => filmId != this.film.filmId
      );
    });
    return el;
  }
}
