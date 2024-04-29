import { currencyView, nn } from "../../common/helpers";
import "./film.css";

export class Film {
  constructor(appState, film) {
    this.appState = appState;
    this.film = film;
  }

  render() {
    const el = document.createElement("main");
    el.classList.add("film");
    const inFavorites = this.appState.favorites.find(
      (filmId) => filmId == this.film.filmId
    );
    el.innerHTML = `<div class="film-title">
          <h2>${nn(this.film.title_en)}</h2>
        </div>
        <div class="features">
          <div class="features__img">
            <img
              src="${this.film.poster_film_small}"
              alt="Film img"
            />
          </div>
          <div class="container">
            <div class="features__items">
              <div class="feature__item">
                <span class="feature__item-name movie-info">Name RU: </span>${nn(
                  this.film.title_ru
                )}
              </div>
              <div class="feature__item">
                <span class="feature__item-name movie-info">Director: </span>${nn(
                  [...this.film.director].join(", ")
                )}
              </div>
              <div class="feature__item">
                <span class="feature__item-name movie-info">Producer: </span>${nn(
                  [...this.film.producer].join(", ")
                )}
              </div>
              <div class="feature__item">
                <span class="feature__item-name movie-info">Scenario: </span>${nn(
                  [...this.film.scenario].join(", ")
                )}
              </div>
              <div class="feature__item">
                <span class="feature__item-name movie-info">Budget: </span>${nn(
                  currencyView(
                    this.film.budget.budget.currency,
                    this.film.budget.budget.amount
                  )
                )}
              </div>
              <div class="feature__item">
                <span class="feature__item-name movie-info">Revenue RUS: </span>${nn(
                  currencyView(
                    this.film.budget.rusBox.currency,
                    this.film.budget.rusBox.amount
                  )
                )}
              </div>
              <div class="feature__item">
                <span class="feature__item-name movie-info"
                  >Revenue World:
                </span>${nn(
                  currencyView(
                    this.film.budget.worldBox.currency,
                    this.film.budget.worldBox.amount
                  )
                )}
              </div>
              <div class="feature__item">
                <span class="feature__item-name movie-info">Duration: </span>${nn(
                  this.film.duration
                )} minutes
              </div>
              <div class="feature__item">
                <span class="feature__item-name movie-info">Rating IMDB: </span>${nn(
                  this.film.rating.imdb?.value
                )}
              </div>
              <div class="feature__item">
                <span class="feature__item-name movie-info">Rating KP: </span>${nn(
                  this.film.rating.kinopoisk?.value
                )}
              </div>
            </div>
          </div>
        </div>
        <div class="description">
          <div class="description__title">Description</div>
          <div class="description__text">${nn(this.film?.description)}
          </div>
        </div>
        <div class="tags">
          <div class="tags__title">Tags</div>
          <div class="tags__items">
          </div>
        </div>`;
    const tagContainer = el.querySelector(".tags__items");
    for (const tagValue of [...this.film.genre]) {
      const tag = document.createElement("div");
      tag.classList.add("tags__item");
      tag.innerText = tagValue;
      tagContainer.append(tag);
    }
    const container = el.querySelector(".container");
    const btn = document.createElement("button");
    btn.classList.add("button");

    if (inFavorites) {
      btn.innerText = "Remove from Favorites";
      btn.classList.add("button-invert");
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.appState.favorites = this.appState.favorites.filter(
          (filmId) => filmId != this.film.filmId
        );
      });
    } else {
      btn.innerText = "Add to Favorites";
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.appState.favorites.push(this.film.filmId);
      });
    }
    container.append(btn);
    return el;
  }
}
