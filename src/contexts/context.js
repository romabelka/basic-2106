import { createContext } from "react";

export const context = createContext({
  username: "unknown user",
  localization: "english"
});
const { Provider, Consumer } = context;

export { Provider, Consumer };
