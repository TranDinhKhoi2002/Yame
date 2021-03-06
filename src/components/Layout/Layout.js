import { Fragment, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Layout(props) {
  const [sideBarActive, setSideBarActive] = useState(false);

  const openSideBarHandler = () => {
    setSideBarActive(true);
  };

  const closeSideBarHandler = () => {
    setSideBarActive(false);
  };

  return (
    <Fragment>
      <Header showSideBar={openSideBarHandler} />
      <Modal show={sideBarActive} hideSideBar={closeSideBarHandler} />
      <Backdrop show={sideBarActive} hide={closeSideBarHandler} />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
