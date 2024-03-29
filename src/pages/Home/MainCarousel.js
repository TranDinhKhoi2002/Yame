import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as request from "../../utils/request";

function MainCarousel() {
  const [images, setImages] = useState({});

  useEffect(() => {
    const fetchImages = async () => {
      const response = await request.get("homeCarouselImages");
      setImages(response);
    };

    fetchImages();
  }, []);

  return (
    <Carousel
      showThumbs={false}
      swipeable={true}
      emulateTouch={true}
      animationHandler="slide"
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
      showArrows={false}
      showStatus={false}
      stopOnHover={false}
    >
      {Object.keys(images).map((key, index) => (
        <div
          key={index}
          className="grid grid-cols-2 mx-[4px] gap-1 animate-image mt-8 xl:px-[3%]"
        >
          <div>
            <h4 className="inline-block md:float-left font-normal lg:text-2xl pb-3 text-[#444444] hover:text-[#0056b3] transition duration-300">
              <Link to="/">{images[key].item1.title}</Link>
            </h4>
            <Link to="/">
              <img alt="" src={images[key].item1.url} />
            </Link>
            <div className="grid grid-cols-4 gap-1">
              {Object.keys(images[key].item1.subItems).map((item, index) => (
                <Link to={images[key].item1.subItems[item].to} key={index}>
                  <img src={images[key].item1.subItems[item].url} alt="" />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="inline-block md:float-left font-normal lg:text-2xl pb-3 text-[#444444] hover:text-[#0056b3] transition duration-300">
              <Link to="/">{images[key].item2.title}</Link>
            </h4>
            <Link to="/">
              <img alt="" src={images[key].item2.url} />
            </Link>
            <div className="grid grid-cols-4 gap-1">
              {Object.keys(images[key].item2.subItems).map((item, index) => (
                <Link to={images[key].item2.subItems[item].to} key={index}>
                  <img src={images[key].item2.subItems[item].url} alt="" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default MainCarousel;
