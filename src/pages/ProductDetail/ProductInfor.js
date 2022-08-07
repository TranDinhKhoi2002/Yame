import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

import ProductItem from "../../components/Products/ProductItem";
import GeneralInfor from "./Generalnfor";
import GuidanceSize from "./GuidanceSize";
import TableSize from "./TableSize";

function ProductInfor(props) {
  const { product } = props;
  const dispatch = useDispatch();

  const addToCartHandler = (size) => {
    dispatch(cartActions.addToCart({ product, size }));
  };

  return (
    <div className="md:grid grid-cols-3 gap-6 mt-3">
      <div className="xsm:min-h-[640px]">
        <ProductItem forDetail image={product} />
      </div>
      <div className="col-span-2 px-4">
        <div className="md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <GeneralInfor
              name={product.name}
              id={product.id}
              price={product.price}
              oldPrice={product.oldPrice}
            />
            <TableSize onAddToCart={addToCartHandler} />
            <GuidanceSize />
          </div>
          <div className="mb-4">
            <h5 className="text-2xl font-light my-3">Mô tả sản phẩm</h5>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfor;
