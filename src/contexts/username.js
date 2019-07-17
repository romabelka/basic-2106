import { createContext } from "react";

export const userContext = createContext("Anonymous user");
const { Provider, Consumer } = userContext;

export { Provider, Consumer };
