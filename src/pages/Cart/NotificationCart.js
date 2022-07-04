import images from "../../assets/images";

function NotificationCart(props) {
  return (
    props.show && (
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-2xl w-[80%] md:w-[600px] h-[300px] z-[999]">
        <img
          src={images.success}
          alt="success"
          className="w-16 h-16 m-auto mt-4"
        />
        <h1 className="text-[#6ac259] text-center text-2xl font-bold mt-3">
          Đặt hàng thành công
        </h1>
      </div>
    )
  );
}

export default NotificationCart;
