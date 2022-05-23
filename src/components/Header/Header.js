import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBagShopping,
  faBars,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import Menu from "../Popper/Menu/Menu";
import { NAV_ITEMS, DETAILS_ITEMS } from "../../data/header";

function Header(props) {
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  function openSearchHandler() {
    setSearch(true);
  }

  function closeSearchHandler() {
    setSearch(false);
  }

  const headerClasses =
    "fixed left-0 right-0 z-[100] flex justify-between items-center bg-[#000] py-0 px-[12%] lg:px-[8%] h-16 lg:h-20";

  if (search) {
    return (
      <header className={`${headerClasses} bg-white`}>
        <input
          className="w-[95%] border-none outline-none text-xl lg:text-[40px]"
          autoFocus
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Nhập sản phẩm cần tìm"
        />
        <FontAwesomeIcon
          className="text-[30px] text-[#868995] hover:text-[#3d3f45] ml-2 transition duration-300 ease cursor-pointer"
          icon={faXmark}
          onClick={closeSearchHandler}
        />
      </header>
    );
  }

  return (
    <header className={headerClasses}>
      <div>
        <Link to="/">
          <img
            className="w-16 h-11 align-middle"
            src="https://res.yame.vn/Content/images/yame-f-logo-white.png"
            alt=""
          />
        </Link>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex">
          {NAV_ITEMS.map((item, index) => (
            <li key={index} className="py-0 px-5">
              {item.hasChildren ? (
                <Menu items={item.items}>
                  <Link
                    className="transition duration-300 text-[#f3f3f4] hover:text-primary"
                    to={item.to}
                  >
                    {item.title}
                    {item.hasChildren && (
                      <FontAwesomeIcon
                        className="ml-[6px] text-[12px]"
                        icon={faAngleDown}
                      />
                    )}
                  </Link>
                </Menu>
              ) : (
                <Link
                  className="transition duration-300 text-[#f3f3f4] hover:text-primary"
                  to={item.to}
                >
                  {item.title}
                  {item.hasChildren && (
                    <FontAwesomeIcon
                      className="ml-[6px] text-[12px]"
                      icon={faAngleDown}
                    />
                  )}
                </Link>
              )}
            </li>
          ))}

          <li>
            <Menu detail={true} items={DETAILS_ITEMS}>
              <div className="transition duration-300 text-[#f3f3f4] cursor-pointer hover:text-primary">
                <FontAwesomeIcon
                  className="ml-[6px] text-[12px]"
                  icon={faBars}
                />
                <FontAwesomeIcon
                  className="ml-[6px] text-[12px]"
                  icon={faAngleDown}
                />
              </div>
            </Menu>
          </li>
        </ul>
      </nav>
      <div className="flex items-center">
        <button
          className="w-4 h-4 leading-4 bg-transparent text-[#868995] cursor-pointer mx-3 transition duration-300 ease-linear hover:text-[#3d3f45]"
          onClick={openSearchHandler}
        >
          <FontAwesomeIcon className="ml-[6px] text-[16px]" icon={faSearch} />
        </button>
        <button className="w-4 h-4 leading-4 bg-transparent text-[#868995] cursor-pointer mx-3 transition duration-300 ease-linear hover:text-[#3d3f45]">
          <FontAwesomeIcon className="ml-[6px] text-[16px]" icon={faUser} />
        </button>
        <button className="relative w-4 h-4 leading-4 bg-transparent text-[#868995] cursor-pointer mx-3 transition duration-300 ease-linear hover:text-[#3d3f45]">
          <FontAwesomeIcon
            className="ml-[6px] text-[16px]"
            icon={faBagShopping}
          />
          <span className="absolute top-[-11px] left-4 w-5 h-5 leading-5 rounded-full bg-[#ee4266] text-white text-[12px]">
            2
          </span>
        </button>
        <button
          onClick={() => {
            props.showSideBar();
          }}
          className="w-[25px] h-[25px] text-[#868995] hover:text-[#3d3f45] transition duration-300 ease-linear ml-5 inline-block lg:hidden"
        >
          <FontAwesomeIcon className="text-2xl" icon={faBars} />
        </button>
      </div>
    </header>
  );
}

export default Header;
