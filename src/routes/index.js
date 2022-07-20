import config from "../config";
import FlashSale from "../pages/FlashSale";
import Home from "../pages/Home/index";
import ProductDetail from "../pages/ProductDetail/index";
import OpenSale from "../pages/OpenSale";
import Quality from "../pages/Quality";
import ProductsType from "../pages/ProductsType";
import Cart from "../pages/Cart/index";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Account from "../pages/Auth/Account";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import Search from "../pages/Home/Search";

export const routes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.detail, component: ProductDetail },
  { path: config.routes.flashSale, component: FlashSale },
  { path: config.routes.openSale, component: OpenSale },
  { path: config.routes.quality, component: Quality },
  { path: config.routes.login, component: Login },
  { path: config.routes.signup, component: Signup },
  { path: config.routes.forgetPassword, component: ForgetPassword },
  { path: config.routes.account, component: Account },
  { path: config.routes.productsType, component: ProductsType },
  { path: config.routes.cart, component: Cart },
  { path: config.routes.search, component: Search },
];
