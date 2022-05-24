import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchInput(props) {
  return (
    <header className={`${props.className} bg-white`}>
      <input
        className="w-[95%] border-none outline-none text-xl lg:text-[40px]"
        autoFocus
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        placeholder="Nhập sản phẩm cần tìm"
      />
      <FontAwesomeIcon
        className="text-[30px] text-[#868995] hover:text-[#3d3f45] ml-2 transition duration-300 ease cursor-pointer"
        icon={faXmark}
        onClick={props.closeSearch}
      />
    </header>
  );
}

export default SearchInput;
