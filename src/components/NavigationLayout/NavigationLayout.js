import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function NavigationLayout(props) {
  const navigate = useNavigate();

  const backHandler = () => {
    navigate(-1);
  };

  return (
    <div className="mt-20 xl:px-[5%]">
      <div className="flex items-center py-1 px-4 mb-2 bg-[#e9ecef]">
        <button onClick={backHandler}>
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="text-xl text-[#444444] hover:text-blue transition duration-300 cursor-pointer"
          />
        </button>
        <span className="mx-2">/</span>
        <strong className="overflow-hidden text-ellipsis whitespace-nowrap">
          {props.title}
        </strong>
      </div>
      {props.children}
    </div>
  );
}

export default NavigationLayout;
