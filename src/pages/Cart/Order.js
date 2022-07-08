import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ToastifyMessage from "../../components/ToastifyMessage/ToastifyMessage";
import { ToastContainer, toast } from "react-toastify";

import * as request from "../../utils/request";

import classes from "./Cart.module.css";
import Backdrop from "../../components/Layout/Backdrop";
import NotificationCart from "./NotificationCart";
import { cartActions } from "../../store/cart";

function Order() {
  const [homeShipChecked, setHomeShipChecked] = useState(true);
  const [nameValue, setNameValue] = useState();
  const [phoneNumberValue, setPhoneNumberValue] = useState();
  const [addressValue, setAddressValue] = useState();
  const [noteValue, setNoteValue] = useState();
  const [showNotification, setShowNotification] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const backToHomeHandler = () => {
    navigate("/");
  };

  const confirmOrderHandler = async (e) => {
    e.preventDefault();

    if (!nameValue || !phoneNumberValue || !addressValue || !noteValue) {
      toast.error(
        <ToastifyMessage
          title="Lỗi đặt hàng"
          message="Vui lòng nhập đầy đủ thông tin"
        />
      );
      return;
    }

    const order = {
      name: nameValue.trim(),
      phoneNumber: phoneNumberValue.trim(),
      address: addressValue.trim(),
      note: noteValue.trim(),
    };
    await request.postOrder("orders", order);
    setShowNotification(true);
  };

  const closeNotification = () => {
    setShowNotification(false);
    dispatch(cartActions.clearCart());
  };

  return (
    <div className={classes.delivery}>
      <h4>Người mua/nhận hàng</h4>
      <form className="mt-3 mb-10">
        <div>
          <label htmlFor="customerName">Họ tên</label>
          <input
            onBlur={(e) => setNameValue(e.target.value)}
            type="text"
            id="customerName"
            placeholder="Tên người nhận"
            required
          />
          {(nameValue === "" ||
            (nameValue && nameValue.trim().length === 0)) && (
            <label className="text-primary">
              Vui lòng nhập đầy đủ thông tin
            </label>
          )}
        </div>
        <div>
          <label htmlFor="customerPhone">Điện thoại liên lạc</label>
          <input
            onBlur={(e) => setPhoneNumberValue(e.target.value)}
            type="number"
            id="customerPhone"
            placeholder="Số điện thoại"
          />
          {(phoneNumberValue === "" ||
            (phoneNumberValue && phoneNumberValue.trim().length === 0)) && (
            <label className="text-primary">
              Vui lòng nhập đầy đủ thông tin
            </label>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <input
              onChange={() => {
                setHomeShipChecked(true);
                setAddressValue("");
              }}
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
              onChange={() => {
                setHomeShipChecked(false);
                setAddressValue("");
              }}
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
            <Fragment>
              <input
                onBlur={(e) => setAddressValue(e.target.value)}
                type="text"
                placeholder="Địa chỉ nhận hàng"
              />
              {(addressValue === "" ||
                (addressValue && addressValue.trim().length === 0)) && (
                <label className="text-primary">
                  Vui lòng nhập đầy đủ thông tin
                </label>
              )}
            </Fragment>
          )}
          {!homeShipChecked && (
            <Fragment>
              <select onBlur={(e) => setAddressValue(e.target.value)}>
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
              {(!addressValue || addressValue.trim().length === 0) && (
                <label className="text-primary">
                  Vui lòng chọn một cửa hàng
                </label>
              )}
            </Fragment>
          )}
        </div>
        <div>
          <label htmlFor="customerNote">Ghi chú</label>
          <textarea
            onBlur={(e) => setNoteValue(e.target.value)}
            className="!py-[0.375rem]"
            type="text"
            id="customerNote"
          />
          {(noteValue === "" ||
            (noteValue && noteValue.trim().length === 0)) && (
            <label className="text-primary">
              Vui lòng nhập đầy đủ thông tin
            </label>
          )}
        </div>
        <button
          onClick={confirmOrderHandler}
          type="submit"
          className="w-full cursor-pointer h-[43px] text-[13px] text-white bg-[#17a2b8] border-[#17a2b8] rounded hover:bg-[#138496] hover:border-[#117a8b]"
        >
          ĐẶT HÀNG
        </button>
        <hr className="my-4" />
        <button
          onClick={backToHomeHandler}
          className="w-full cursor-pointer h-[43px] text-[13px] text-[#212529] bg-[#ffc107] border-[#ffc107] rounded hover:bg-[#e0a800] hover:border-[#d39e00]"
        >
          CẦN SẢN PHẨM KHÁC? TIẾP TỤC MUA HÀNG
        </button>
      </form>
      <ToastContainer autoClose={3000} limit={1} pauseOnFocusLoss={false} />
      <NotificationCart show={showNotification} hide={closeNotification} />
      <Backdrop show={showNotification} hide={closeNotification} />
    </div>
  );
}

export default Order;
