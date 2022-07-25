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
          alt="Discount"
          width="300"
          height="300"
          src="https://cmsv2.yame.vn/uploads/530df4ed-897b-4c7f-b6db-9f9154a1fbca/banner-1-chu.jpg?quality=80&w=0&h=0"
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
        <Image src="https://cmsv2.yame.vn/uploads/61368ead-b71b-4d0f-9ee1-d388e2aa3d67/Banner_50off.jpg?quality=80&w=0&h=0" />
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
