import routesConfig from "../config/routes";
import FlashSale from "../pages/FlashSale";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import OpenSale from "../pages/OpenSale";
import Quality from "../pages/Quality";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProductsType from "../pages/ProductsType";

export const routes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.detail, component: ProductDetail },
  { path: routesConfig.flashSale, component: FlashSale },
  { path: routesConfig.openSale, component: OpenSale },
  { path: routesConfig.quality, component: Quality },
  { path: routesConfig.login, component: Login },
  { path: routesConfig.signup, component: Signup },
  { path: routesConfig.productsType, component: ProductsType },
];
