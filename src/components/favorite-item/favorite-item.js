import { nn } from "../../common/helpers";
import "./favorite-item.css";
export class FavoriteItem {
  constructor(appState, film) {
    this.appState = appState;
    this.film = film;
  }

  render() {
    const el = document.createElement("div");
    el.classList.add("cart");
    el.innerHTML = `<a href="/?id=${
      this.film.filmId
    }#film" class="filmLink"><div class="cart__img">
              <img
                src="${this.film.poster_film_small}"
                alt="film-image"
              />
            </div>
            <div class="cart__wrapper">
              <div class="cart__info">
                <div class="cart__genres">${nn(
                  [...this.film.genre].join(", ")
                )}</div>
                <div class="cart__name-en"><span class="features">Name EN: </span>${nn(
                  this.film.title_en
                )}</div>
                <div class="cart__name-ru"><span class="features">Name RU: </span>${nn(
                  this.film.title_ru
                )}</div>
                <div class="cart__age"><span class="features">Age: </span>${nn(
                  this.film.year
                )}</div>
                <div class="cart__score"><span class="features">Score: </span>${nn(
                  this.film.rating.kinopoisk.value
                )}</div>
                <div class="cart__length"><span class="features">Length: </span>${nn(
                  this.film.duration
                )}</div>
              </div>
              <div class="cart__footer">
                <button class="cart__button cart__favorites">
                  <img src="./static/favorites.svg" alt="favorites-img" />
                </button>
              </div>
            </div></a>`;

    el.querySelector("button").addEventListener("click", (e) => {
      e.preventDefault();
      this.appState.favorites = this.appState.favorites.filter(
        (filmId) => filmId != this.film.filmId
      );
    });
    return el;
  }
}
