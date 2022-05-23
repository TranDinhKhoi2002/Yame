import { Fragment } from "react";

function Social(props) {
  return (
    <Fragment>
      <h4 className="font-medium text-2xl text-center mt-6 mb-5">Instagram</h4>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-1 xl:px-[3%] mb-6">
        {props.images.map((image, index) => (
          <a key={index} href={image.to} target="_blank" rel="noreferrer">
            <img src={image.url} alt="" />
          </a>
        ))}
      </div>
    </Fragment>
  );
}

export default Social;
