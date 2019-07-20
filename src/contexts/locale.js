import { createContext } from "react";
import { defaultLocale } from "../utils/localization";

export const localeContext = createContext(defaultLocale);
const { Provider, Consumer } = localeContext;

export { Provider, Consumer };
