import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Error404Page from "../pages/errors/error-404-page";
import { AuthProvider } from "../shared/auth/Auth-context";
import HomePage from "../pages/website/home-page";
import LgPage from "../pages/admin/login-page";
import DashboardPage from "../pages/admin/dashboard-page ";
import ManagerCategoriesPage from "../pages/admin/manager-categories-page";
import ManagerProductPage from "../pages/admin/manager-product-page";
import OrderPage from "../pages/admin/order-page";
import ManageClientPage from "../pages/admin/manage-client-page";
import RegisterPage from "../pages/admin/register-page";
import { ShoppingCartProvider } from "../shared/auth/shoppingCart-context";
import ShopePage from "../pages/website/shope";
import CartPage from "../pages/website/cart";
export default function RouterApp() {
  return (
    
    <Router>
<AuthProvider>
<ShoppingCartProvider>
        <Switch>
        <Route exact path="/" component={HomePage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/admin" component={LgPage}/>
            <Route path="/dash" component={DashboardPage}/>
            <Route path="/categories" component={ManagerCategoriesPage} />
            <Route path="/productes" component={ManagerProductPage} />
            <Route path="/orders" component={OrderPage} />
            <Route path="/customers" component={ManageClientPage} />
            <Route  path="/shope" component={ShopePage} />
          <Route  path="/cart" component={CartPage} />
            <Route path="*" component={Error404Page} />
        </Switch>
        </ShoppingCartProvider>
        </AuthProvider>
    </Router>
    
  );
}
