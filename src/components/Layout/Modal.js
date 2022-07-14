import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import CSSTransition from "react-transition-group/CSSTransition";
import { NAV_ITEMS } from "../../data/header";
import CollapseMenu from "../Popper/Menu/CollapseMenu";

import "./Modal.css";

const animationTiming = {
  enter: 300,
  exit: 1000,
};

const Modal = (props) => {
  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
      }}
    >
      <div className="Modal">
        <div className="flex justify-between items-center px-3 w-full h-[62px] bg-[#111]">
          <h3 className="text-white text-xl">Danh mục</h3>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => props.hideSideBar()}
            className="text-white hover:text-[#3d3f45] transition duration-300 w-6 h-6 cursor-pointer"
          />
        </div>
        <div className="overflow-y-scroll p-5 h-[calc(100vh-140px)]">
          <ul>
            {NAV_ITEMS.map((item, index) => (
              <li key={index} className="my-3">
                {item.hasChildren ? (
                  <CollapseMenu
                    to={item.to}
                    title={item.title}
                    children={item.items}
                    products={item.generalProducts}
                  />
                ) : (
                  <Link
                    to={item.to}
                    state={{
                      title: item.title,
                      products: item.generalProducts,
                    }}
                    className="text-xl px-5 py-[5px] hover:text-primary transition duration-300"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("modal-root")
  );
};

export default Modal;
