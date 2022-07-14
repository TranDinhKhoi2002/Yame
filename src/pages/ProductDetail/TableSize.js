import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import { Fragment } from "react";
import ToastifyMessage from "../../components/ToastifyMessage/ToastifyMessage";

function TableSize(props) {
  const { onAddToCart } = props;

  const chooseSizeHandler = (size) => {
    onAddToCart(size);
    toast.success(
      <ToastifyMessage
        title="Cập nhật giỏ hàng"
        message="Đã thêm sản phẩm vào giỏ hàng."
      />
    );
  };

  const addSizeS = () => {
    chooseSizeHandler("S");
  };

  const addSizeM = () => {
    chooseSizeHandler("M");
  };

  const addSizeL = () => {
    chooseSizeHandler("L");
  };

  const addSizeXL = () => {
    chooseSizeHandler("XL");
  };

  return (
    <Fragment>
      <table className="w-full mb-4 text-[#212529] mt-6">
        <tbody>
          <tr className="border-y-[1px] border-[#dad1d1] h-[35px]">
            <td>Đen, S</td>
            <td className="text-right ">
              Còn <strong>35</strong> sản phẩm
            </td>
            <td className="text-right">
              <button className="text-[#ff0000] font-light" onClick={addSizeS}>
                <FontAwesomeIcon icon={faPlusCircle} className="mr-1" />
                Chọn mua
              </button>
            </td>
          </tr>
          <tr className="border-y-[1px] border-[#dad1d1] h-[35px]">
            <td>Đen, M</td>
            <td className="text-right ">
              Còn <strong>35</strong> sản phẩm
            </td>
            <td className="text-right">
              <button className="text-[#ff0000] font-light" onClick={addSizeM}>
                <FontAwesomeIcon icon={faPlusCircle} className="mr-1" />
                Chọn mua
              </button>
            </td>
          </tr>
          <tr className="border-y-[1px] border-[#dad1d1] h-[35px]">
            <td>Đen, L</td>
            <td className="text-right ">
              Còn <strong>35</strong> sản phẩm
            </td>
            <td className="text-right">
              <button className="text-[#ff0000] font-light" onClick={addSizeL}>
                <FontAwesomeIcon icon={faPlusCircle} className="mr-1" />
                Chọn mua
              </button>
            </td>
          </tr>
          <tr className="border-y-[1px] border-[#dad1d1] h-[35px]">
            <td>Đen, XL</td>
            <td className="text-right ">
              Còn <strong>35</strong> sản phẩm
            </td>
            <td className="text-right">
              <button className="text-[#ff0000] font-light" onClick={addSizeXL}>
                <FontAwesomeIcon icon={faPlusCircle} className="mr-1" />
                Chọn mua
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <ToastContainer autoClose={3000} limit={5} pauseOnFocusLoss={false} />
    </Fragment>
  );
}

export default TableSize;
