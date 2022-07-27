import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavigationLayout from "../../components/NavigationLayout/NavigationLayout";
import { Helmet } from "react-helmet";
import Products from "../../components/Products/Products";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import * as request from "../../utils/request";
import useDebounce from "../../hooks/useDebounce";

function Search() {
  const [productsValue, setProductsValue] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const debouncedValue = useDebounce(searchValue, 500);

  const search = useCallback(async () => {
    setIsLoading(true);
    let keyword = location.state.keyword;
    if (debouncedValue) {
      keyword = debouncedValue;
    }
    const products = await request.searchProducts(keyword.trim());
    setIsLoading(false);
    setProductsValue(products);
  }, [location.state.keyword, debouncedValue]);

  useEffect(() => {
    search();
  }, [location.state.keyword, debouncedValue, search]);

  const searchHandler = (e) => {
    e.preventDefault();
    search();
  };

  const inputChangeHandler = (e) => {
    const searchInputValue = e.target.value;
    if (!searchInputValue.startsWith(" ")) {
      setSearchValue(searchInputValue);
    }
  };

  return (
    <NavigationLayout title="Tìm kiếm sản phẩm">
      <Helmet>
        <title>Tìm kiếm sản phẩm</title>
      </Helmet>
      <div className="mt-3 px-8 xl:px-0">
        <form className="grid grid-cols-6 gap-2 xsm:gap-7">
          <input
            value={searchValue}
            onChange={inputChangeHandler}
            className="col-span-5 h-[43px] w-full py-[0.375rem] px-3 text-base font-normal text-[#495057] outline-none border-[1px] border-solid border-[#ced4da] focus:border-[#ee4266] rounded-[0.25rem] transition duration-150 "
            placeholder="Từ khóa"
            autoFocus
            spellCheck={false}
          />
          <button
            onClick={searchHandler}
            className="col-span-1 text-[13px] text-white bg-[#17a2b8] border-[1px] border-solid border-[#17a2b8] rounded-[0.25rem]"
          >
            TÌM
          </button>
        </form>
        {isLoading && <LoadingSpinner />}
        {!isLoading &&
          productsValue &&
          productsValue.length > 0 &&
          !isLoading && <Products forDetail={true} images={productsValue} />}
        {!isLoading && productsValue.length === 0 && (
          <p className="text-center my-6">Không tìm thấy sản phẩm nào</p>
        )}
      </div>
    </NavigationLayout>
  );
}

export default Search;
