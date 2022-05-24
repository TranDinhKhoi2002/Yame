import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Actions(props) {
  return (
    <div className="flex items-center">
      <button
        className="w-4 h-4 leading-4 bg-transparent text-[#868995] cursor-pointer mx-3 transition duration-300 ease-linear hover:text-[#3d3f45]"
        onClick={props.openSearch}
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
  );
}

export default Actions;
