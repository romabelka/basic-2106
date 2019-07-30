import React, { createContext, useContext } from "react";
import dictionaries from "./dictionaries";

const context = createContext(dictionaries.en);

export const LocaleProvider = ({ language, children }) => (
  <context.Provider value={dictionaries[language]}>{children}</context.Provider>
);

export const Translate = ({ children }) => {
  const dictionary = useContext(context);

  return dictionary[children] || children;
};

export default context;
