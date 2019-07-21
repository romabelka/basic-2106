import { createContext } from "react";

export const userContext = createContext("unknown user");
const { Provider, Consumer } = userContext;

export { Provider, Consumer };
