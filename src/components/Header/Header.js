import { useState } from "react";
import { Link } from "react-router-dom";

import SearchInput from "./SearchInput";
import React from "react";

import MainNavigation from "./MainNavigation";
import Actions from "./Actions";
import config from "../../config";

const Header = (props) => {
  const [search, setSearch] = useState(false);

  function openSearchHandler() {
    setSearch(true);
  }

  function closeSearchHandler() {
    setSearch(false);
  }

  const headerClasses =
    "fixed left-0 right-0 top-0 z-[100] flex justify-between items-center bg-[#000] py-0 px-[12%] lg:px-[10%] h-16 lg:h-20";

  if (search) {
    return (
      <SearchInput className={headerClasses} closeSearch={closeSearchHandler} />
    );
  }

  return (
    <header className={headerClasses}>
      <div>
        <Link to={config.routes.home}>
          <img
            className="w-16 h-11 align-middle"
            src="https://res.yame.vn/Content/images/yame-f-logo-white.png"
            alt=""
          />
        </Link>
      </div>
      <MainNavigation />
      <Actions openSearch={openSearchHandler} showSideBar={props.showSideBar} />
    </header>
  );
};

export default Header;
