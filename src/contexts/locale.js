import { createContext } from "react";

export const localeContext = createContext("ru");
const { Provider, Consumer } = localeContext;

export { Provider, Consumer };
