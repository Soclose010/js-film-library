import { nn } from "../../common/helpers";
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
    el.innerHTML = `<a href="/?id=${
      this.film.filmId
    }#film" class="filmLink"><div class="cart__img">
              <img
                src="${this.film.posterUrlPreview}"
                alt="film-image"
              />
            </div>
            <div class="cart__wrapper">
              <div class="cart__info">
                <div class="cart__genres">${nn(
                  this.film.genres.map((genre) => genre.genre).join(", ")
                )}</div>
                <div class="cart__name-en"><span class="movie-info">Name EN: </span>${nn(
                  this.film.nameEn
                )}</div>
                <div class="cart__name-ru"><span class="movie-info">Name RU: </span>${nn(
                  this.film.nameRu
                )}</div>
                <div class="cart__age"><span class="movie-info">Age: </span>${nn(
                  this.film.year
                )}</div>
                <div class="cart__score"><span class="movie-info">Score: </span>${nn(
                  this.film.rating
                )}</div>
                <div class="cart__length"><span class="movie-info">Length: </span>${nn(
                  this.film.filmLength
                )}</div>
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
            </div></a>`;

    if (inFavorites) {
      el.querySelector("button").addEventListener("click", (e) => {
        e.preventDefault();
        this.appState.favorites = this.appState.favorites.filter(
          (filmId) => filmId != this.film.filmId
        );
      });
    } else {
      el.querySelector("button").addEventListener("click", (e) => {
        e.preventDefault();
        this.appState.favorites.push(this.film.filmId);
      });
    }

    return el;
  }
}
