import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useCollapse from "react-collapsed";
import { Link } from "react-router-dom";

function CollapseMenu(props) {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
  });

  return (
    <div className="relative">
      <Link
        to={props.to}
        className="text-xl px-5 py-[5px] hover:text-primary transition duration-300"
      >
        {props.title}
      </Link>
      <span
        className="w-9 h-9 leading-9 rounded-full text-center bg-transparent hover:bg-[#f8f9fa] absolute right-0"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`${isExpanded && "rotate-180"} transition duration-300`}
        />
      </span>
      <ul {...getCollapseProps()} className="ml-10">
        {props.children.map((item) => (
          <li className="my-2">
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CollapseMenu;
