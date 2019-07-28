import { OrderedMap } from "immutable";

export const arrToMap = (arr, Model) =>
  arr.reduce(
    (acc, item) => acc.set(item.id, new Model(item)),
    new OrderedMap({})
  );

// EXAMPLE
// const a = ['день','дня','дней'];
// console.log(declension(1, a)); // день
// console.log(declension(2, a)); // дня
// console.log(declension(5, a)); // дней
// noinspection CommaExpressionJS
export const declension = (n, t) =>
  t[
    ((n %= 100), 20 > n && n > 4)
      ? 2
      : [2, 0, 1, 1, 1, 2][((n %= 10), n < 5) ? n : 5]
  ];
