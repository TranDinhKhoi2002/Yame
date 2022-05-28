import { Fragment } from "react";
import { Link } from "react-router-dom";
import Image from "../../components/UI/Image";

function HotProducts(props) {
  return (
    <div className="mt-6 xl:px-[3%]">
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
          {props.images.map((image, index) => (
            <div
              key={index}
              className="group flex relative overflow-hidden pb-[10px]"
            >
              <div className="group-hover:translate-x-[-100%] transition-all duration-700 ease-in-out">
                <Image to={image.to} src={image.url[0]} />
              </div>
              <div className="w-full absolute right-[-300%] group-hover:right-0 transition-all duration-700 ease-in-out">
                <Link to={image.to}>
                  <img alt="" src={image.url[1]} />
                </Link>
              </div>
              <div className="absolute inline-block top-[95%] sm:top-[96%] text-[12px] font-normal ml-1">
                {image.oldPrice && image.discountPrice ? (
                  <Fragment>
                    <span className="line-through">{image.oldPrice}</span>
                    <span className="ml-1 text-[#ff0000]">
                      {image.discountPrice}
                    </span>
                  </Fragment>
                ) : (
                  <span>{image.price}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotProducts;
