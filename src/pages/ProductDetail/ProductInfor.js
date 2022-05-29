import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../../components/UI/Image";

function ProductInfor(props) {
  const { product } = props;

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="md:grid grid-cols-3 gap-6 mt-3">
      <Image src={product.images.mainImg} />
      <div className="col-span-2">
        <div className="md:grid grid-cols-3 gap-2">
          <div className="col-span-2">
            <h4 className="text-2xl text-black">{product.name}</h4>
            <p className="text-black my-2">Mã số: {product.id}</p>
            <h5 className="text-primary text-lg font-normal">
              {product.price} đ
            </h5>
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
            <div className="mt-6">
              <b>Hướng dẫn chọn size</b>
              <form className="grid grid-cols-3 gap-1 mt-3">
                <div className="flex  ">
                  <input
                    placeholder="Cân nặng"
                    className="py-1 px-2 text-sm border-[1px] rounded-l-[4px] border-r-0 border-[#ced4da] outline-none"
                  />
                  <div className="text-[#495057] bg-[#e9ecef] py-1 px-2 border-[1px] border-[#ced4da]">
                    <span>Kg</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfor;
