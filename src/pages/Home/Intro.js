import Image from "../../UI/Image";

function Intro(props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mt-6 xl:px-[3%] gap-0">
      {props.images.map((image, index) => (
        <Image key={index} to={image.to} src={image.url} />
      ))}
    </div>
  );
}

export default Intro;
