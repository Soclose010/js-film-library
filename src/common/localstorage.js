import { ENV } from "../../env";

export const load = () => {
  return JSON.parse(localStorage.getItem(ENV.LOCALSTORAGE_KEY)) ?? [];
};

export const save = (data) => {
  localStorage.setItem(ENV.LOCALSTORAGE_KEY, JSON.stringify(data));
};
