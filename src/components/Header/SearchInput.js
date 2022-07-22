import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchInput(props) {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debouncedValue) {
      navigate("/search", { state: { keyword: debouncedValue } });
      props.closeSearch();
    }
  }, [debouncedValue]);

  const inputChangeHandler = (e) => {
    const searchInputValue = e.target.value;

    if (!searchInputValue.startsWith(" ")) {
      setSearchValue(searchInputValue);
    }
  };

  return (
    <header className={`${props.className} bg-white`}>
      <input
        className="w-[95%] border-none outline-none text-xl lg:text-[40px]"
        autoFocus
        value={searchValue}
        onChange={inputChangeHandler}
        placeholder="Nhập sản phẩm cần tìm"
        spellCheck={false}
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
