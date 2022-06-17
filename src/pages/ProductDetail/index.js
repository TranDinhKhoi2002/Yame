import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import ProductInfor from "./ProductInfor";
import * as request from "../../utils/request";
import NavigationLayout from "../../components/NavigationLayout/NavigationLayout";

function ProductDetail(props) {
  const [product, setProduct] = useState({});
  const [loading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    async function fetchProductInfo() {
      setIsLoading(true);
      const product = await request.getProduct(location.pathname);
      setProduct(product);
      setIsLoading(false);
    }

    fetchProductInfo();
  }, [location.pathname]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <NavigationLayout title={product.name}>
      {!loading ? <ProductInfor product={product} /> : <p>Loading...</p>}
    </NavigationLayout>
  );
}

export default ProductDetail;