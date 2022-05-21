import React from "react";

import "./Backdrop.css";

const Backdrop = React.memo((props) => {
  const cssClasses = [
    "Backdrop",
    props.show ? "BackdropOpen" : "BackdropClosed",
  ];

  return (
    <div
      onClick={() => props.hideSideBar()}
      className={cssClasses.join(" ")}
    ></div>
  );
});

export default Backdrop;
