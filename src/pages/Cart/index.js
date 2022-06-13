import { useSelector } from "react-redux";
import NavigationLayout from "../../components/NavigationLayout/NavigationLayout";

import images from "../../assets/images";

function Cart(props) {
  const products = useSelector((state) => state.cart.products);

  return (
    <NavigationLayout title="Thông tin giỏ hàng của bạn">
      {products.length === 0 ? (
        <div className="text-center mt-6">
          <h3 className="text-2xl font-medium">Bạn chưa chọn sản phẩm.</h3>
          <div>
            <img className="mx-auto" src={images.noProduct} alt="" />
          </div>
        </div>
      ) : (
        <div className="md:grid grid-cols-2"></div>
      )}
    </NavigationLayout>
  );
}

export default Cart;
