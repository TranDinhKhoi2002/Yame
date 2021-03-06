import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { cartActions } from "../../store/cart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function DetailCart() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const childRefs = React.useMemo(
    () => products.map(() => React.createRef()),
    [products]
  );

  useEffect(() => {
    childRefs.forEach((ref, index) => {
      ref.current.value = products[index].amount;
    });
  }, [childRefs, products]);

  let totalPrice = 0;

  const removeFromCartHandler = (id, size) => {
    dispatch(cartActions.removeFromCart({ id, size }));
  };

  const updateAmountHandler = (id, size, refIndex) => {
    dispatch(
      cartActions.updateAmountOfProduct({
        id,
        size,
        amount: childRefs[refIndex].current.value,
      })
    );
  };

  const formatPrice = (price) => {
    const tempPrice = [];
    price
      .split("")
      .reverse()
      .forEach((item, index) => {
        tempPrice.push(item);
        if (index % 3 === 2) {
          tempPrice.push(",");
        }
      });

    let formatedPrice = tempPrice.reverse().join("");

    if (formatedPrice[0] === ",") {
      formatedPrice = formatedPrice.slice(1);
      return formatedPrice;
    }

    return formatedPrice;
  };

  return (
    <div>
      <h4>Chi tiết đơn hàng</h4>
      <table className="w-full text-[#111] mt-2">
        <tbody>
          {products.map((cartProduct, index) => {
            const formatedPrice = cartProduct.product.price.replace(",", "");

            totalPrice += +formatedPrice * cartProduct.amount;

            return (
              <Fragment key={index}>
                <tr>
                  <td rowSpan={2} className="w-[100px]">
                    <img src={cartProduct.product.images.mainImg} alt="" />
                    <button
                      onClick={() =>
                        removeFromCartHandler(
                          cartProduct.product.id,
                          cartProduct.size
                        )
                      }
                      className="flex items-center font-light hover:text-[#0056b3]"
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="mr-2 w-3 h-3"
                      />{" "}
                      <span>Xóa</span>
                    </button>
                  </td>
                  <td className="py-3">
                    <p className="text-sm text-[#444] mb-2 hover:text-[#0056b3] transition duration-300">
                      <Link to={cartProduct.product.to}>
                        {cartProduct.product.name}
                      </Link>
                    </p>
                    <p>
                      {cartProduct.size} / {cartProduct.product.price}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();

                          updateAmountHandler(
                            cartProduct.product.id,
                            cartProduct.size,
                            index
                          );
                        }}
                        className="flex"
                      >
                        <input
                          type="number"
                          required
                          min={0}
                          ref={childRefs[index]}
                          className="py-[0.5rem] px-3 text-base font-normal text-[#495057] border-[1px] border-solid border-[#ced4da] flex-1 rounded outline-none focus:border-[#ee4266] transition duration-150"
                        />
                        <button className="py-1 px-2 ml-2 text-[13px] leading-6 rounded-[0.2rem] text-[#343a40] border-[1px] border-solid border-[#343a40] hover:text-white hover:bg-[#343a40] hover:border-[#343a40]">
                          UPDATE
                        </button>
                      </form>{" "}
                      = <span>đ </span>
                      <b>
                        {formatPrice(
                          (+cartProduct.amount * +formatedPrice).toString()
                        )}
                      </b>
                    </div>
                  </td>
                </tr>
              </Fragment>
            );
          })}
          <tr>
            <td className="text-right">Tổng: </td>
            <td>
              <div>
                <span>đ </span>
                <b>{formatPrice(totalPrice.toString())}</b>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DetailCart;
