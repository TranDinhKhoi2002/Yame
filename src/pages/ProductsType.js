import NavigationLayout from "../components/NavigationLayout/NavigationLayout";
import Products from "../components/Products/Products";
import { simpleTShirt } from "../data/images";

function ProductsType(props) {
  return (
    <NavigationLayout title={"Áo thun đơn giản"}>
      <Products images={simpleTShirt} />
    </NavigationLayout>
  );
}

export default ProductsType;
