function GeneralInfor(props) {
  return (
    <div className="my-3">
      <h4 className="text-2xl text-black">{props.name}</h4>
      <p className="text-black my-2">Mã số: {props.id}</p>
      <h5 className="text-primary text-lg font-normal">{props.price} đ</h5>
    </div>
  );
}

export default GeneralInfor;
