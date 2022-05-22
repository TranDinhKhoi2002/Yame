import Image from "./Image";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

function MainCarousel(props) {
  return (
    <Carousel
      showThumbs={false}
      swipeable={true}
      emulateTouch={true}
      autoPlay={true}
      interval={5000}
      infiniteLoop={true}
      showArrows={false}
      showStatus={false}
      centerMode={document.body.scrollWidth < 600 ? true : false}
      centerSlidePercentage={85}
    >
      {props.images.map((image, index) => (
        <div
          key={index}
          className="grid grid-cols-2 mx-[4px] gap-1 animate-image mt-8 xl:px-[3%]"
        >
          <div>
            <h4 className="inline-block md:float-left font-normal lg:text-2xl pb-3 text-[#444444] hover:text-[#0056b3] transition duration-300">
              <Link to={image[0].to}>{image[0].title}</Link>
            </h4>
            <Image src={image[0].url} to={image[0].to} />
            <div className="grid grid-cols-4 gap-1">
              {image[0].subItems.map((item) => (
                <Image src={item.url} to={item.to} />
              ))}
            </div>
          </div>
          <div>
            <h4 className="inline-block md:float-left font-normal lg:text-2xl pb-3 text-[#444444] hover:text-[#0056b3] transition duration-300">
              <Link to={image[1].to}>{image[1].title}</Link>
            </h4>
            <Image src={image[1].url} to={image[1].to} />
            <div className="grid grid-cols-4 gap-1">
              {image[1].subItems.map((item) => (
                <Image src={item.url} to={item.to} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default MainCarousel;
