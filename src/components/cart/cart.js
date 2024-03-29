import { CartItem } from "../cart-item/cart-item";
import { FoundedText } from "../founded-text/founded-text";
import { Loading } from "../loading/loading";
import "./cart.css";

export class Cart {
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
      el.append(new FoundedText(this.state).render());
      cart.classList.add("cart__items");
      this.state.films.forEach((film) => {
        cart.append(new CartItem(this.appState, film).render());
      });
      el.append(cart);
    }
    return el;
  }
}
