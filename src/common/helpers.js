export const nn = (data) => {
  return data == null || data == undefined || data == "null" || data == ""
    ? "Not Found"
    : data;
};

export const currencyView = (currency, value) => {
  if (currency == null || value == null) {
    return null;
  }

  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    maximumFractionDigits: 0,
    currency: currencyFormat[currency],
  }).format(value);
};
export const currencyFormat = {
  $: "USD",
  "₽": "RUB",
};
