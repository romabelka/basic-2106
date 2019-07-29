import React, {useContext} from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import OrderForm from "./components/order-form";
import Cart from "./components/cart";
import Filter from "./components/filter";
import RestaurantsPage from "./components/routes/restaurants";
import CheckoutPage from "./components/routes/checkout";
import { Provider } from "./contexts/username";
import { Consumer, Provider as LocalizeProvider, localizeСontext } from './contexts/languauge';
import { useInputValue } from "./custom-hooks/use-input-value";
import { useLanguage } from './custom-hooks/use-language'
import { Input, Button } from "antd";
import Menu, { MenuItem } from "./components/menu";

export default function App() {

  const [ username, setUserName ] = useInputValue("Roma");
  const [ lang, setLang ] = useLanguage();
  const localizeData = localizeСontext._currentValue;
  const currentLocalize = localizeData[lang];  

  return (
    <div>
      <Button onClick={ ()=>setLang() } >{ lang }</Button>
      <br/>
      <LocalizeProvider value={currentLocalize} >
        <Menu>
          <Menu.Item to="/checkout">
            <Cart />
          </Menu.Item>
          <MenuItem to="/restaurants">
            <Consumer>{ currentLocalize => currentLocalize.restaurants }</Consumer>
          </MenuItem>
          <MenuItem to="/filter" children={"Filter"} />
        </Menu>
        <div>
          <Consumer>{ currentLocalize => currentLocalize.username }</Consumer> : <Input value={username} onChange={setUserName} />
        </div>
        <Provider value={username}>
          <Switch>
            <Redirect from="/" exact to="/restaurants" />
            <Redirect from="/restaurants/" exact strict to="/restaurants" />
            <Route path="/filter" exact component={Filter} />
            <Route path="/checkout" exact component={CheckoutPage} />
            <Route
              path="/restaurants/:id/review"
              render={({ id }) => <h1> <Consumer>{ currentLocalize => currentLocalize.addReview }</Consumer> {id}</h1>}
            />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="*" render={() => <h1> <Consumer>{ currentLocalize => currentLocalize.notFoundPage }</Consumer> </h1>} />
          </Switch>
        </Provider>
      </LocalizeProvider>
    </div>
  );
}
