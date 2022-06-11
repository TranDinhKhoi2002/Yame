import Image from "../../components/UI/Image";
import GeneralInfor from "./Generalnfor";
import GuidanceSize from "./GuidanceSize";
import TableSize from "./TableSize";

function ProductInfor(props) {
  const { product } = props;

  return (
    <div className="md:grid grid-cols-3 gap-6 mt-3">
      <Image src={product.images.mainImg} />
      <div className="col-span-2">
        <div className="md:grid grid-cols-3 gap-2">
          <div className="col-span-2">
            <GeneralInfor
              name={product.name}
              id={product.id}
              price={product.price}
            />
            <TableSize />
            <GuidanceSize />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfor;
