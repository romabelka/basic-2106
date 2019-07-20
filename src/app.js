import React from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import OrderForm from "./components/order-form";
import Cart from "./components/cart";
import Filter from "./components/filter";
import RestaurantsPage from "./components/routes/restaurants";
import CheckoutPage from "./components/routes/checkout";
import { Provider as UserProvider } from "./contexts/username";
import { Consumer, Provider as LocaleProvider } from "./contexts/locale";
import { useInputValue } from "./custom-hooks/use-input-value";
import { Input } from "antd";
import Menu, { MenuItem } from "./components/menu";
import { Radio } from "antd";
import { localization } from "./utils/localization";

export default function App() {
  const [username, setUserName] = useInputValue("Roma");
  const [language, setLanguage] = useInputValue("en");
  const locale = localization[language];

  return (
    <div>
      <LocaleProvider value={locale}>
        <div>
          <Consumer>{locale => locale.language + ":"}</Consumer>
          <Radio.Group
            defaultValue="en"
            buttonStyle="solid"
            onChange={setLanguage}
          >
            <Radio.Button value="en">English</Radio.Button>
            <Radio.Button value="ru">Russian</Radio.Button>
          </Radio.Group>
        </div>

        <Menu>
          <Menu.Item to="/checkout">
            <Cart />
          </Menu.Item>
          <MenuItem to="/restaurants">
            <Consumer>{locale => locale.restaurants}</Consumer>
          </MenuItem>
          <MenuItem
            to="/filter"
            children={<Consumer>{locale => locale.filter}</Consumer>}
          />
        </Menu>
        <div>
          <Consumer>{locale => locale.username + ":"}</Consumer>
          <Input value={username} onChange={setUserName} />
        </div>

        <UserProvider value={username}>
          <Switch>
            <Redirect from="/" exact to="/restaurants" />
            <Redirect from="/restaurants/" exact strict to="/restaurants" />
            <Route path="/filter" exact component={Filter} />
            <Route path="/checkout" exact component={CheckoutPage} />
            <Route
              path="/restaurants/:id/review"
              render={({ id }) => (
                <Consumer>
                  {locale => <h1>{locale.addReviewFor + " " + id}</h1>}
                </Consumer>
              )}
            />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route
              path="*"
              render={() => (
                <Consumer>{locale => <h1>{locale.notFoundPage}</h1>}</Consumer>
              )}
            />
          </Switch>
        </UserProvider>
      </LocaleProvider>
    </div>
  );
}
