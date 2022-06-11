import { Fragment } from "react";

function GeneralInfor(props) {
  return (
    <Fragment>
      <h4 className="text-2xl text-black">{props.name}</h4>
      <p className="text-black my-2">Mã số: {props.id}</p>
      <h5 className="text-primary text-lg font-normal">{props.price} đ</h5>
    </Fragment>
  );
}

export default GeneralInfor;
