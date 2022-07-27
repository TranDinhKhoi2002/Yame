import React from "react";
import { useSelector } from "react-redux";
import NavigationLayout from "../../components/NavigationLayout/NavigationLayout";
import { Helmet } from "react-helmet";

import images from "../../assets/images";

import classes from "./Cart.module.css";
import Order from "./Order";
import DetailCart from "./DetailCart";

function Cart(props) {
  const products = useSelector((state) => state.cart.products);

  return (
    <NavigationLayout title="Thông tin giỏ hàng của bạn">
      <Helmet>
        <title>Giỏ Hàng</title>
      </Helmet>
      {products.length === 0 ? (
        <div className="text-center my-6">
          <h3 className="text-2xl font-medium">Bạn chưa chọn sản phẩm.</h3>
          <div>
            <img className="mx-auto" src={images.noProduct} alt="" />
          </div>
          <p>Hãy nhanh tay chọn ngay sản phẩm yêu thích.</p>
        </div>
      ) : (
        <div
          className={`${classes.cart} md:grid grid-cols-2 gap-5 px-[5%] xl:px-0`}
        >
          <DetailCart />
          <Order />
        </div>
      )}
    </NavigationLayout>
  );
}

export default Cart;
