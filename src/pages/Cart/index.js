import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavigationLayout from "../../components/NavigationLayout/NavigationLayout";

import images from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import classes from "./Cart.module.css";
import { cartActions } from "../../store/cart";

function Cart(props) {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [homeShipChecked, setHomeShipChecked] = useState(true);

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
    <NavigationLayout title="Thông tin giỏ hàng của bạn">
      {products.length === 0 ? (
        <div className="text-center my-6">
          <h3 className="text-2xl font-medium">Bạn chưa chọn sản phẩm.</h3>
          <div>
            <img className="mx-auto" src={images.noProduct} alt="" />
          </div>
          <p>Hãy nhanh tay chọn ngay sản phẩm yêu thích.</p>
        </div>
      ) : (
        <div className={`${classes.cart} md:grid grid-cols-2 gap-5`}>
          <div>
            <h4>Chi tiết đơn hàng</h4>
            <table className="w-full text-[#111] mt-2">
              <tbody>
                {products.map((cartProduct, index) => {
                  const formatedPrice = cartProduct.product.price.replace(
                    ",",
                    ""
                  );

                  totalPrice += +formatedPrice * cartProduct.amount;

                  return (
                    <Fragment key={index}>
                      <tr>
                        <td rowSpan={2} className="w-[100px]">
                          <img
                            src={cartProduct.product.images.mainImg}
                            alt=""
                          />
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
                                defaultValue={childRefs[index].value}
                                className="py-[0.5rem] px-3 text-base font-normal text-[#495057] border-[1px] border-solid border-[#ced4da] flex-1 rounded outline-none focus:border-[#ee4266] transition duration-150"
                              />
                              <button className="py-1 px-2 ml-2 text-[13px] leading-6 rounded-[0.2rem] text-[#343a40] border-[1px] border-solid border-[#343a40] hover:text-white hover:bg-[#343a40] hover:border-[#343a40]">
                                UPDATE
                              </button>
                            </form>{" "}
                            = <span>đ </span>
                            <b>
                              {formatPrice(
                                (
                                  +cartProduct.amount * +formatedPrice
                                ).toString()
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
          <div className={classes.delivery}>
            <h4>Người mua/nhận hàng</h4>
            <form className="mt-3 mb-10">
              <div>
                <label htmlFor="customerName">Họ tên</label>
                <input
                  type="text"
                  id="customerName"
                  placeholder="Tên người nhận"
                />
              </div>
              <div>
                <label htmlFor="customerPhone">Điện thoại liên lạc</label>
                <input
                  type="text"
                  id="customerPhone"
                  placeholder="Số điện thoại"
                />
              </div>
              <div>
                <div className="flex items-center">
                  <input
                    onChange={() => setHomeShipChecked(true)}
                    checked={homeShipChecked}
                    name="choosePickupAddress"
                    type="radio"
                    id="shipToHome"
                    className="!w-[16px] !h-8"
                  />
                  <label htmlFor="shipToHome" className="!mb-0 ml-2">
                    Nhận hàng tại nhà/công ty/bưu điện
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    onChange={() => setHomeShipChecked(false)}
                    checked={!homeShipChecked}
                    name="choosePickupAddress"
                    type="radio"
                    id="pickFromShop"
                    className="!w-[16px] !h-8"
                  />
                  <label htmlFor="pickFromShop" className="!mb-0 ml-2">
                    Nhận hàng tại cửa hàng YaMe gần nhất
                  </label>
                </div>
              </div>
              <div>
                {homeShipChecked && (
                  <input type="text" placeholder="Địa chỉ nhận hàng" />
                )}
                {!homeShipChecked && (
                  <select>
                    <option value="">Chọn cửa hàng nhận hàng</option>
                    <optgroup label="Tp. Hồ Chí Minh">
                      <option value="YaMe Q.10: 770F, Sư Vạn Hạnh (nd), P.12">
                        YaMe Q.10: 770F, Sư Vạn Hạnh (nd), P.12
                      </option>
                      <option value="YaMe Q.5: 190, Nguyễn Trãi, P.3">
                        YaMe Q.5: 190, Nguyễn Trãi, P.3
                      </option>
                      <option value="YaMe Q.7: 323 Huỳnh Tấn Phát">
                        YaMe Q.7: 323 Huỳnh Tấn Phát
                      </option>
                      <option value="YaMe Q.6: 102 Hậu Giang">
                        YaMe Q.6: 102 Hậu Giang
                      </option>
                      <option value="YaMe Q.9 (1): 114 Đỗ Xuân Hợp">
                        YaMe Q.9 (1): 114 Đỗ Xuân Hợp
                      </option>
                      <option value="YaMe Q.9 (2): 200 Lê Văn Việt P.Tăng Nhơn Phú B">
                        YaMe Q.9 (2): 200 Lê Văn Việt P.Tăng Nhơn Phú B
                      </option>
                      <option value="YaMe Q.BT: 138 Đinh Tiên Hoàng, P.1">
                        YaMe Q.BT: 138 Lê Văn Duyệt, P.1
                      </option>
                      <option value="YaMe Tân Phú (2): 189, Hòa Bình">
                        YaMe Tân Phú (2): 189, Hòa Bình
                      </option>
                      <option value="YaMe Gò Vấp (1): 407, Quang Trung, P.10">
                        YaMe Gò Vấp (1): 407, Quang Trung, P.10
                      </option>
                      <option value="YaMe Gò Vấp (2): 1096 Quang Trung, Gò Vấp">
                        YaMe Gò Vấp (2): 1096 Quang Trung, Gò Vấp
                      </option>
                      <option value="YaMe Q.Bình Tân: 232 Lê Văn Qưới">
                        YaMe Q.Bình Tân: 232 Lê Văn Qưới
                      </option>
                      <option value="YaMe Hóc Môn: 39 Quang Trung, Thới Tam Thôn">
                        YaMe Hóc Môn: 39 Quang Trung, Thới Tam Thôn
                      </option>
                      <option value="YaMe Thủ Đức: 336, Võ Văn Ngân, Q. Thủ Đức">
                        YaMe Thủ Đức: 336, Võ Văn Ngân, Q. Thủ Đức
                      </option>
                    </optgroup>
                    <optgroup label="Đông Nam Bộ">
                      <option value="YaMe Biên Hòa: 30, Dương Tử Giang, Tp. Biên Hòa">
                        YaMe Biên Hòa: 30, Dương Tử Giang, Tp. Biên Hòa
                      </option>
                      <option value="YaMe TX. Dĩ An: 82A Nguyễn An Ninh">
                        YaMe TX. Dĩ An: 82A Nguyễn An Ninh
                      </option>
                      <option value="YaMe Tx. Thuận An, Bình Dương: 132 Ngô Quyền">
                        YaMe Tx. Thuận An, Bình Dương: 132 Ngô Quyền
                      </option>
                      <option value="YaMe Bình Dương: 187, Yersin, Tp.Thủ Dầu Một">
                        YaMe Bình Dương: 187, Yersin, Tp.Thủ Dầu Một
                      </option>
                      <option value="YaMe Vũng Tàu: 528 Trương Công Định">
                        YaMe Vũng Tàu: 528 Trương Công Định
                      </option>
                      <option value="YaMe Tây Ninh: 586 Cách Mạng Tháng 8 P.3">
                        YaMe Tây Ninh: 586 Cách Mạng Tháng 8 P.3
                      </option>
                    </optgroup>
                    <optgroup label="Tây Nam Bộ">
                      <option value="YaMe Cần Thơ: 57 Nguyễn Trãi, Q. Ninh kiều">
                        YaMe Cần Thơ: 57 Nguyễn Trãi, Q. Ninh kiều
                      </option>
                      <option value="YaMe Cần Thơ 2: 45 đ.3 Tháng 2, Q.Ninh Kiều">
                        YaMe Cần Thơ 2: 45 đ.3 Tháng 2, Q.Ninh Kiều
                      </option>
                      <option value="YaMe Tân An: 492 Hùng Vương">
                        YaMe Tân An: 492 Hùng Vương
                      </option>
                      <option value="YaMe Mỹ Tho: 193N đường Ấp Bắc, P.5">
                        YaMe Mỹ Tho: 193N đường Ấp Bắc, P.5
                      </option>
                      <option value="YaMe Vĩnh Long: 27A Phạm Thái Bường">
                        YaMe Vĩnh Long: 27A Phạm Thái Bường
                      </option>
                      <option value="YaMe Bến Tre:209 Đồng Khởi Tp.Bến Tre">
                        YaMe Bến Tre:209 Đồng Khởi Tp.Bến Tre
                      </option>
                      <option value="YaMe Cao Lãnh: 66A Tôn Đức Thắng">
                        YaMe Cao Lãnh: 66A Tôn Đức Thắng
                      </option>
                      <option value="YaMe Sa Đéc: 289 Nguyễn Sinh Sắc">
                        YaMe Sa Đéc: 289 Nguyễn Sinh Sắc
                      </option>
                      <option value="YaMe Trà Vinh: 09 Nguyễn Đáng">
                        YaMe Trà Vinh: 09 Nguyễn Đáng
                      </option>
                      <option value="YaMe Long Xuyên: 47 Tôn Đức Thắng, P. Mỹ Bình">
                        YaMe Long Xuyên: 47 Tôn Đức Thắng, P. Mỹ Bình
                      </option>
                      <option value="YaMe Rạch Giá: 290 Nguyễn Trung Trực, Tp. Rạch Giá">
                        YaMe Rạch Giá: 290 Nguyễn Trung Trực, Tp. Rạch Giá
                      </option>
                      <option value="YaMe Sóc Trăng: 126 Tôn Đức Thắng">
                        YaMe Sóc Trăng: 126 Tôn Đức Thắng
                      </option>
                      <option value="YaMe Cà Mau: 11 Trần Hưng Đạo">
                        YaMe Cà Mau: 11 Trần Hưng Đạo
                      </option>
                    </optgroup>
                    <optgroup label="Tây Nguyên">
                      <option value="YaMe Buôn Ma Thuột: 64 Phan Chu Trinh, Tp.BMT">
                        YaMe Buôn Ma Thuột: 64 Phan Chu Trinh, Tp.BMT
                      </option>
                    </optgroup>
                  </select>
                )}
              </div>
              <div>
                <label htmlFor="customerNote">Điện thoại liên lạc</label>
                <textarea
                  className="!py-[0.375rem]"
                  type="text"
                  id="customerNote"
                />
              </div>
              <button className="w-full cursor-pointer h-[43px] text-[13px] text-white bg-[#17a2b8] border-[#17a2b8] rounded hover:bg-[#138496] hover:border-[#117a8b]">
                ĐẶT HÀNG
              </button>
              <hr className="my-4" />
              <button className="w-full cursor-pointer h-[43px] text-[13px] text-[#212529] bg-[#ffc107] border-[#ffc107] rounded hover:bg-[#e0a800] hover:border-[#d39e00]">
                CẦN SẢN PHẨM KHÁC? TIẾP TỤC MUA HÀNG
              </button>
            </form>
          </div>
        </div>
      )}
    </NavigationLayout>
  );
}

export default Cart;
