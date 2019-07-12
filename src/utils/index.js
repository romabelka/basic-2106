import { OrderedMap } from "immutable";

export const arrToMap = (arr, Model) =>
  arr.reduce(
    (acc, item) => acc.set(item.id, new Model(item)),
    new OrderedMap({})
  );
