/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Slider, { CustomArrowProps } from "react-slick";
import style from "./slider.module.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const CustomPrevArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <div className={style.prevsArrow} onClick={onClick}>
      <IoIosArrowDropleftCircle className="text-blue-500 text-3xl" />
    </div>
  );
};

const CustomNextArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <div className={style.nextsArrow} onClick={onClick}>
      <IoIosArrowDroprightCircle className="text-blue-500 text-3xl" />
    </div>
  );
};

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <div className={`${style.container}`}>
      <Slider {...settings}>
        <div className={style.images}>
          <img src="https://dailytimes.com.pk/assets/uploads/2019/07/01/0_jYTPhSdLKCzrRSxb-1280x720.jpg" />
        </div>
        <div className={style.images}>
          <img src="https://ik.imagekit.io/dlyqigh4b/christin-hume-k2Kcwkandwg-unsplash__1__IPhTrbp87.jpg?updatedAt=1689321978872" />
        </div>
        <div className={style.images}>
          <img src="https://ik.imagekit.io/dlyqigh4b/mael-balland-Wnti9H4PX6Y-unsplash_dDJJPk3G5.jpg?updatedAt=1689321980245" />
        </div>
      </Slider>
    </div>
  );
};

export default Sliders;
