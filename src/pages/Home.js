import { Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MainCarousel from "../UI/Carousel";
import Image from "../UI/Image";
import { homeCarouselImages } from "../data/images";

function Home() {
  return (
    <Fragment>
      <div className="xl:px-[3%] animate-image flex justify-center">
        <Image
          to="hang-mo-ban"
          alt="MỞ BÁN"
          width="300"
          height="300"
          src="https://cmsv2.yame.vn/uploads/7e35cd1e-8f31-4e8e-a4a7-0f1a23f0a39a/bannerbomber-1280x800.jpg?quality=80&w=0&h=0"
        />
      </div>
      <MainCarousel images={homeCarouselImages} />
    </Fragment>
  );
}

export default Home;
