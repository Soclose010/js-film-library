import { CartItem } from "../cart-item/cart-item";
import "./cart.css";

export class Cart {
  constructor(appState, state) {
    this.appState = appState;
    this.state = state;
  }

  render() {
    const el = document.createElement("div");
    const text = document.createElement("div");
    const cart = document.createElement("div");
    text.classList.add("text");
    text.innerHTML = `Founded Films - ${this.state.searchFilmsCountResult}`;
    el.append(text);
    if (this.state.loading) {
      const loading = document.createElement("div");
      loading.classList.add("loading");
      loading.innerHTML = `<div class="loading__text">Loading...</div>`;
      el.append(loading);
    } else {
      cart.classList.add("cart__items");
      this.state.films.forEach((film) => {
        cart.append(new CartItem(this.appState, film).render());
      });
      el.append(cart);
    }
    return el;
  }
}
