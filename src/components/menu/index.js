import React from "react";
import { useTranslation } from "react-i18next";
import MenuItem from "./menu-item";

function Menu({ children }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = lang => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("ru")}>ru</button>
      <button onClick={() => changeLanguage("en")}>en</button>
      <h1>{t("title")}</h1>
      {children}
    </div>
  );
}

Menu.propTypes = {};

export { MenuItem };
export default Menu;
