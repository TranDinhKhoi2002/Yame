import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function TableSize(props) {
  return (
    <table className="w-full mb-4 text-[#212529] mt-6">
      <tbody>
        <tr className="border-y-[1px] h-[35px]">
          <td>Đen, S</td>
          <td className="text-right ">
            Còn <strong>35</strong> sản phẩm
          </td>
          <td className="text-right">
            <button className="text-[#ff0000] font-light">
              <FontAwesomeIcon icon={faPlusCircle} className="mr-1" />
              Chọn mua
            </button>
          </td>
        </tr>
        <tr className="border-y-[1px] h-[35px]">
          <td>Đen, M</td>
          <td className="text-right ">
            Còn <strong>35</strong> sản phẩm
          </td>
          <td className="text-right">
            <button className="text-[#ff0000] font-light">
              <FontAwesomeIcon icon={faPlusCircle} className="mr-1" />
              Chọn mua
            </button>
          </td>
        </tr>
        <tr className="border-y-[1px] h-[35px]">
          <td>Đen, L</td>
          <td className="text-right ">
            Còn <strong>35</strong> sản phẩm
          </td>
          <td className="text-right">
            <button className="text-[#ff0000] font-light">
              <FontAwesomeIcon icon={faPlusCircle} className="mr-1" />
              Chọn mua
            </button>
          </td>
        </tr>
        <tr className="border-y-[1px] h-[35px]">
          <td>Đen, XL</td>
          <td className="text-right ">
            Còn <strong>35</strong> sản phẩm
          </td>
          <td className="text-right">
            <button className="text-[#ff0000] font-light">
              <FontAwesomeIcon icon={faPlusCircle} className="mr-1" />
              Chọn mua
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableSize;
