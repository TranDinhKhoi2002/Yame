import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";

import "tippy.js/dist/tippy.css";
import PopperWrapper from "./PopperWrapper";
import MenuItem from "./MenuItem";

function Menu({ items = [], children, detail = false }) {
  return (
    <Tippy
      delay={[0, 100]}
      interactive
      placement="bottom-start"
      offset={[12, 8]}
      render={(attrs) => (
        <div
          className={`absolute top-3 left-[-18px] w-[228px] inline-flex animate-headerMenuFadeIn ${
            detail && "w-[600px] left-[-400px]"
          }`}
          tabIndex="-1"
          {...attrs}
        >
          <PopperWrapper>
            {detail ? (
              <div className="flex flex-wrap">
                {items.map((item, index) => (
                  <div key={index} className="p-4 text-[#f3f3f4]">
                    <Link
                      className="hover:text-primary transition duration-300"
                      to={item.to}
                      state={{ title: item.title }}
                    >
                      {item.title}
                    </Link>
                    <ul>
                      {item.items.map((child, index) => (
                        <li
                          className="hover:text-primary transition duration-300"
                          key={index}
                        >
                          <Link to={child.path} state={{ title: child.name }}>
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              items.map((item, index) => (
                <MenuItem
                  key={index}
                  title={item.name}
                  path={item.path}
                  products={item.products}
                />
              ))
            )}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
