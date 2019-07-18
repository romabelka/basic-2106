import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "antd/dist/antd.css";
import Cart from "./components/cart";
import RestaurantsPage from "./components/routes/restaurants";
import CheckoutPage from "./components/routes/cart-checkout";
import { Provider } from "./contexts/username";
import Menu, { MenuItem } from "./components/menu";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Menu>
        <MenuItem to="/checkout">
          <Cart />
        </MenuItem>
        <MenuItem to="/restaurants">{t("restaurants.mainpage")}</MenuItem>
      </Menu>
      <Switch>
        <Route path="/" exact render={() => null} />
        <Route path="/checkout" exact component={CheckoutPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route
          path="/restaurants/:id/review"
          render={({ id }) => <h1>Add a review for {id}</h1>}
        />
        <Route path="*" render={() => <h1>{t("notfound-page")}</h1>} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
