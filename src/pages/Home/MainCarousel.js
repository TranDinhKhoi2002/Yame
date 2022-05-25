import Image from "../../UI/Image";
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
      autoPlay={true}
      interval={5000}
      infiniteLoop={true}
      showArrows={false}
      showStatus={false}
    >
      {Object.keys(images).map((image, index) => (
        <div
          key={index}
          className="grid grid-cols-2 mx-[4px] gap-1 animate-image mt-8 xl:px-[3%]"
        >
          <div>
            <h4 className="inline-block md:float-left font-normal lg:text-2xl pb-3 text-[#444444] hover:text-[#0056b3] transition duration-300">
              <Link to={images[image].item1.to}>
                {images[image].item1.title}
              </Link>
            </h4>
            <Image src={images[image].item1.url} to={images[image].item1.to} />
            <div className="grid grid-cols-4 gap-1">
              {Object.keys(images[image].item1.subItems).map((item, index) => (
                <Image
                  key={index}
                  src={images[image].item1.subItems[item].url}
                  to={images[image].item1.subItems[item].to}
                />
              ))}
            </div>
          </div>
          <div>
            <h4 className="inline-block md:float-left font-normal lg:text-2xl pb-3 text-[#444444] hover:text-[#0056b3] transition duration-300">
              <Link to={images[image].item2.to}>
                {images[image].item2.title}
              </Link>
            </h4>
            <Image src={images[image].item2.url} to={images[image].item2.to} />
            <div className="grid grid-cols-4 gap-1">
              {Object.keys(images[image].item2.subItems).map((item, index) => (
                <Image
                  key={index}
                  src={images[image].item2.subItems[item].url}
                  to={images[image].item2.subItems[item].to}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default MainCarousel;
