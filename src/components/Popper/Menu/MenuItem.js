import { Link } from "react-router-dom";

function MenuItem({ title, path, products }) {
  return (
    <div className="w-full justify-start py-[9px] px-[20px] text-[#f3f3f4] hover:bg-[#f4f5f9] hover:text-[#25262a]">
      <Link to={path} state={{ title: title, products: products }}>
        {title}
      </Link>
    </div>
  );
}

export default MenuItem;
