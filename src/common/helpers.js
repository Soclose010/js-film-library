export const nn = (data) => {
  return data == null || data == undefined || data == "null" || data == ""
    ? "Not Found"
    : data;
};
