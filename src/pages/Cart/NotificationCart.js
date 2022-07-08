import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import images from "../../assets/images";
import { cartActions } from "../../store/cart";

function NotificationCart(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const backToHome = () => {
    dispatch(cartActions.clearCart());
    navigate("/");
  };

  const closeHandler = () => {
    props.hide();
  };

  return (
    props.show && (
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-4 py-7 bg-white rounded-2xl w-[80%] md:w-[600px] h-[auto] z-[999]">
        <img src={images.success} alt="success" className="w-16 h-16 m-auto" />
        <h1 className="text-[#6ac259] text-center text-2xl font-bold mt-3">
          Đặt hàng thành công
        </h1>
        <p className="px-5 mt-3 font-normal">
          Đơn hàng của quý khách đã được đặt thành công. Chúng tôi sẽ sớm liên
          hệ để xác nhận, chúc quý khách có những trải nghiệm mua sắm vui vẻ.
        </p>
        <div className="sm:flex justify-center sm:mt-5 gap-2">
          <button
            onClick={backToHome}
            className="sm:w-[200px] block sm:inline-block m-auto sm:m-0 sm:bg-primary px-4 py-2 text-primary font-medium sm:font-normal sm:text-white rounded"
          >
            Tiếp tục mua sắm
          </button>
          <button
            onClick={closeHandler}
            className="sm:w-[200px] block sm:inline-block m-auto sm:m-0 sm:bg-primary px-4 py-2 text-primary font-medium sm:font-normal sm:text-white rounded"
          >
            Đóng
          </button>
        </div>
      </div>
    )
  );
}

export default NotificationCart;
