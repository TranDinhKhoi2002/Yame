import { Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import MainCarousel from "./MainCarousel";
import Intro from "./Intro";
import HotProducts from "./HotProducts";
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
          src="https://cmsv2.yame.vn/uploads/861e4405-bc92-4ebf-8aa2-8ddf1bb90c52/Banner_sale_off_30_(03).jpg?quality=80&w=0&h=0"
        />
      </div>
      <MainCarousel />
      <Intro />
      <div className="text-center">
        <p className="text-2xl pt-5 pb-2">Top sản phẩm HOT</p>
        <p>Những sản phẩm thời trang mới nhất/Hot nhất</p>
      </div>
      <HotProducts images={homeHotProductsImages} />
      <div className="flex justify-center">
        <Image src="https://cmsv2.yame.vn/uploads/f88bec81-48d1-4518-bf7a-2990c8572f45/bannerbomber-1280x800_fix_ch%e1%bb%af.jpg?quality=80&w=0&h=0" />
      </div>
      <HotProducts images={homeTrousersImages} />
      <div className="flex justify-center">
        <Image src="https://cmsv2.yame.vn/uploads/fb6b0fb1-8c60-4908-ac7c-a8c653ae7f30/Banner_GU_new_.jpg?quality=80&w=0&h=0" />
      </div>
      <div className="text-center">
        <p className="text-2xl pt-5 pb-2">Các sản phẩm giảm giá</p>
        <p>Đừng bỏ lỡ - Hãy mua ngay</p>
      </div>
      <HotProducts images={saleOffImages} />
      <Social images={socialImages} />
    </Fragment>
  );
}

export default Home;
