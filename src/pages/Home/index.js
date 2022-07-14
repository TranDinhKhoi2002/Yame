import { Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import MainCarousel from "./MainCarousel";
import Intro from "./Intro";
import Products from "../../components/Products/Products";
import Social from "./Social";

import Image from "../../components/UI/Image";
import {
  homeHotProductsImages,
  homeTrousersImages,
  saleOffImages,
  socialImages,
} from "../../data/images";
import config from "../../config";

function Home() {
  return (
    <Fragment>
      <div className="animate-image flex justify-center pt-[70px] lg:pt-[79px]">
        <Image
          to={config.routes.flashSale}
          alt="MỞ BÁN"
          width="300"
          height="300"
          src="https://cmsv2.yame.vn/uploads/3cbab679-c33f-4eb5-a2b8-6954b5d8453b/Banner-web-2.jpg?quality=80&w=0&h=0"
        />
      </div>
      <MainCarousel />
      <Intro />
      <div className="text-center">
        <p className="text-2xl pt-5 pb-2">Top sản phẩm HOT</p>
        <p>Những sản phẩm thời trang mới nhất/Hot nhất</p>
      </div>
      <Products images={homeHotProductsImages} />
      <div className="flex justify-center">
        <Image src="https://cmsv2.yame.vn/uploads/f88bec81-48d1-4518-bf7a-2990c8572f45/bannerbomber-1280x800_fix_ch%e1%bb%af.jpg?quality=80&w=0&h=0" />
      </div>
      <Products images={homeTrousersImages} />
      <div className="flex justify-center mt-3">
        <Image src="https://cmsv2.yame.vn/uploads/14c7e7a2-e21d-4d22-a03b-ee2e374dcf0b/Sale_off_13.06.jpg?quality=80&w=0&h=0" />
      </div>
      <div className="text-center">
        <p className="text-2xl pt-5 pb-2">Các sản phẩm giảm giá</p>
        <p>Đừng bỏ lỡ - Hãy mua ngay</p>
      </div>
      <Products images={saleOffImages} />
      <Social images={socialImages} />
    </Fragment>
  );
}

export default Home;
