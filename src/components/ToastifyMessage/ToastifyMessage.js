function ToastifyMessage(props) {
  return (
    <div>
      <h1 className="font-bold">{props.title}</h1>
      <p>{props.message}</p>
    </div>
  );
}

export default ToastifyMessage;
