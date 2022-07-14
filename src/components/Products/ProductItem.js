import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

function ProductItem(props) {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/${props.forDetail ? props.product.to : props.image.to}`);
  };

  return (
    <div className="group flex relative overflow-hidden pb-[10px]">
      <div className="group-hover:translate-x-[-100%] transition-all duration-700 ease-in-out cursor-pointer">
        <img
          onClick={navigateHandler}
          src={
            props.forDetail ? props.product.images.mainImg : props.image.url[0]
          }
          alt=""
        />
      </div>
      <div className="w-full absolute right-[-300%] group-hover:right-0 transition-all duration-700 ease-in-out cursor-pointer">
        <img
          onClick={navigateHandler}
          alt=""
          src={
            props.forDetail ? props.product.images.subImg : props.image.url[1]
          }
        />
      </div>
      {!props.forDetail && (
        <div className="absolute inline-block top-[95%] sm:top-[97.3%] text-[11px] font-normal ml-1">
          {props.image.oldPrice && props.image.discountPrice ? (
            <Fragment>
              <span className="line-through">{props.image.oldPrice}</span>
              <span className="ml-1 text-[#ff0000]">
                {props.image.discountPrice}
              </span>
            </Fragment>
          ) : (
            <span>{props.image.price}</span>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductItem;
