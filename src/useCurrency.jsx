const intl = new Intl.NumberFormat("en-gb", {
  style: "currency",
  currency: "GBP",
});

export const priceFormater = (price) => intl.format(price);

export default function useCurrency(price) {
  return priceFormater(price);
}
