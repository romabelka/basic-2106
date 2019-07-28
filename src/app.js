import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import { Input, Radio } from "antd";
import Cart from "./components/cart";
import Filter from "./components/filter";
import RestaurantsPage from "./components/routes/restaurants";
import CheckoutPage from "./components/routes/checkout";
import { Provider as UsernameProvider } from "./contexts/username";
import { Provider as LocaleProvider } from "./contexts/locale";
import { useInputValue } from "./custom-hooks/use-input-value";
import Menu, { MenuItem } from "./components/menu";
import locales from "./locales";

const App = () => {
  const [username, setUserName] = useInputValue("Roma");
  const [locale, setLocale] = useInputValue("ru");

  const translations = locales[locale];

  return (
    <div>
      <LocaleProvider value={translations}>
        <Radio.Group value={locale} size="small" onChange={setLocale}>
          <Radio.Button value="ru">Русский</Radio.Button>
          <Radio.Button value="en">English</Radio.Button>
        </Radio.Group>
        <Menu>
          <Menu.Item to="/checkout">
            <Cart />
          </Menu.Item>
          <MenuItem to="/restaurants">{translations.restaurants}</MenuItem>
          <MenuItem to="/filter" children={"Filter"} />
        </Menu>
        <div>
          Username: <Input value={username} onChange={setUserName} />
        </div>
        <UsernameProvider value={username}>
          <Switch>
            <Redirect from="/" exact to="/restaurants" />
            <Redirect from="/restaurants/" exact strict to="/restaurants" />
            <Route path="/filter" exact component={Filter} />
            <Route path="/checkout" exact component={CheckoutPage} />
            <Route
              path="/restaurants/:id/review"
              render={({ id }) => (
                <h1>{`${translations.addReviewFor} ${id}`}</h1>
              )}
            />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route
              path="*"
              render={() => <h1>{translations.notFoundPage}</h1>}
            />
          </Switch>
        </UsernameProvider>
      </LocaleProvider>
    </div>
  );
};

export default App;
