import { useLocation } from "react-router-dom";
import NavigationLayout from "../../components/NavigationLayout/NavigationLayout";
import { Helmet } from "react-helmet";
import Products from "../../components/Products/Products";

function ProductsType(props) {
  const location = useLocation();
  const { title } = location.state || {};
  const { products } = location.state || [];

  return (
    <NavigationLayout title={title}>
      <Helmet>
        <title>Dòng Sản Phẩm "{title}"</title>
      </Helmet>
      {!products || products.length === 0 ? (
        <p className="my-40 px-5 text-center">
          Chưa có sản phẩm nào thuộc loại này, chúng tôi sẽ cập nhật sớm nhất có
          thể
        </p>
      ) : (
        <Products images={products} />
      )}
    </NavigationLayout>
  );
}

export default ProductsType;
