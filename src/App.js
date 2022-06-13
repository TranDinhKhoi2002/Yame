import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { cartActions } from "./store/cart";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products"));

    if (products) {
      dispatch(cartActions.assignAllProducts(products));
    }
  });

  return (
    <Routes>
      {routes.map((route, index) => {
        const Page = route.component;
        return <Route key={index} path={route.path} element={<Page />} />;
      })}
    </Routes>
  );
}

export default App;
