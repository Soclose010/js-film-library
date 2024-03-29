// import { CartItem } from "../cart-item/cart-item";
import { FavoriteItem } from "../favorite-item/favorite-item";
import { FavoriteText } from "../favorite-text/favorite-text";
import { Loading } from "../loading/loading";

export class FavoritesCart {
  constructor(appState, state) {
    this.appState = appState;
    this.state = state;
  }

  render() {
    const el = document.createElement("div");
    const cart = document.createElement("div");
    if (this.state.loading) {
      el.append(new Loading().render());
    } else {
      el.append(new FavoriteText(this.state).render());
      cart.classList.add("cart__items");
      if (this.state.films) {
        this.state.films.forEach((film) => {
          cart.append(new FavoriteItem(this.appState, film).render());
        });
      }
      el.append(cart);
    }
    return el;
  }
}
