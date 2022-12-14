import React from "react";
import Slider from "react-slick";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/_slick-user.scss";

const reserve = "https://www.sunparking.co.jp/form/rsv1.php";

export default function SlickSlider() {
  const settings = {
    autoplay: true,
    speed: 1000,
    infinite: true,
    dots: true,
    // centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // initialSlide: 1,
    centerMode: false,
    initialSlide: 0,
  };

  return (
    <Slider {...settings}>
      {/* <div className="slide-images --item01"></div>
      <div className="slide-images --item02"></div>
      <div className="slide-images --item03"></div> */}
      <a href={reserve} target="_blank" rel="noreferrer noopener">
        <StaticImage
          src="../images/slider/slider001_sp.webp"
          alt="キャンペーン実施中！予約する"
          quality="40"
          width={480}
        />
      </a>
      <Link to="/advantage">
        <StaticImage
          src="../images/slider/slider002_sp.webp"
          alt="様々なオプション"
          quality="40"
          width={480}
        />
      </Link>


      <Link to="/price">
        <StaticImage
          src="../images/slider/slider003_sp.webp"
          alt="選ばれる理由"
          quality="40"
          width={480}
        />
      </Link>
    </Slider>

  );
}