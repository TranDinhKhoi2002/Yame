import Menu from "../Popper/Menu/Menu";
import { NAV_ITEMS, DETAILS_ITEMS } from "../../data/header";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";

function MainNavigation() {
  return (
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
              <FontAwesomeIcon className="ml-[6px] text-[12px]" icon={faBars} />
              <FontAwesomeIcon
                className="ml-[6px] text-[12px]"
                icon={faAngleDown}
              />
            </div>
          </Menu>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
