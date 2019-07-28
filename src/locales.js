import { declension } from "./utils";

export default {
  en: {
    applicationName: "Delivery App",
    restaurants: "Restaurants",
    addReviewFor: "Add a review for",
    notFoundPage: "Not Found Page",
    pleaseSelectARestaurant: "Please select a restaurant",
    cartTotals: (amount, price) =>
      `Total ${amount} ${declension(amount, [
        "item",
        "items",
        "items"
      ])} from $${price}`
  },
  ru: {
    applicationName: 'Приложение "Доставка"',
    restaurants: "Рестораны",
    addReviewFor: "Добавить ревью для",
    notFoundPage: "Страница не найдена",
    pleaseSelectARestaurant: "Подалуйста, выберите ресторан",
    cartTotals: (amount, price) =>
      `Итого ${amount} ${declension(amount, [
        "блюдо",
        "блюда",
        "блюд"
      ])} за $${price}`
  }
};
