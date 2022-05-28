import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as request from "../utils/request";

function ProductDetail(props) {
  const [product, setProduct] = useState({});
  const location = useLocation();

  useEffect(() => {
    async function fetchProductInfo() {
      const product = await request.getProduct(location.pathname);
      setProduct(product);
    }

    fetchProductInfo();
  }, [location.pathname]);

  return (
    <div className="mt-20 xl:px-[5%]">
      <div className="flex items-center py-1 px-4 mb-2 bg-[#e9ecef]">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="text-xl text-[#444444] hover:text-[#007bff] transition duration-300 cursor-pointer"
        />
        <span className="mx-2">/</span>
        <strong className="overflow-hidden text-ellipsis whitespace-nowrap">
          {product.name}
        </strong>
      </div>
    </div>
  );
}

export default ProductDetail;
