import ProductItem from "./ProductItem";

function Products(props) {
  return (
    <div className="mt-6 xl:px-[3%]">
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
          {props.images.map((image, index) => (
            <ProductItem key={index} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
