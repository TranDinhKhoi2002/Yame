import config from "../config";
import FlashSale from "../pages/FlashSale";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import OpenSale from "../pages/OpenSale";
import Quality from "../pages/Quality";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProductsType from "../pages/ProductsType";

export const routes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.detail, component: ProductDetail },
  { path: config.routes.flashSale, component: FlashSale },
  { path: config.routes.openSale, component: OpenSale },
  { path: config.routes.quality, component: Quality },
  { path: config.routes.login, component: Login },
  { path: config.routes.signup, component: Signup },
  { path: config.routes.productsType, component: ProductsType },
];
