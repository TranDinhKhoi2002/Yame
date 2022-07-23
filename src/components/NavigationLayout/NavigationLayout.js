import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { authActions } from "../../store/auth";

function NavigationLayout(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const backHandler = () => {
    navigate(-1);
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/login", { replace: true });
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
        {location.pathname === "/account" && (
          <div
            onClick={logoutHandler}
            className="hover:text-primary transition duration-150 cursor-pointer"
          >
            <FontAwesomeIcon icon={faSignOut} className="ml-1 mr-3" />
            <span className="font-normal">Đăng xuất</span>
          </div>
        )}
      </div>
      {props.children}
    </div>
  );
}

export default NavigationLayout;
