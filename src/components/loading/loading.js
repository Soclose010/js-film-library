import "./loading.css";

export class Loading {
  constructor() {}
  render() {
    const loading = document.createElement("div");
    loading.classList.add("loading");
    loading.innerHTML = `<div class="loading__text">Loading...</div>`;
    return loading;
  }
}
