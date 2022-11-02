import React from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby"

// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/_slick-user.scss";

const reserve = "https://www.sunparking.co.jp/form/rsv1.php";

export default function SlickSliderWide() {
  const settings = {
    // autoplay: true,
    speed: 500,
    infinite: true,
    dots: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          centerMode: true,
          centerPadding: "120px",
          slidesToShow: 1,
          dots: true,
        }
      },
      {
        breakpoint: 1224,
        settings: {
          centerMode: true,
          centerPadding: "120px",
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
          centerMode: false,
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {/* <div className="slide-images --item01"></div>
      <div className="slide-images --item02"></div>
      <div className="slide-images --item03"></div> */}

      <Link to={reserve}>
        <StaticImage
          src="../images/slider/slider001_pc.webp"
          alt="キャンペーン実施中！予約する"
          className="slide-images"
        />
      </Link>
      <Link to="/advantage">
        <StaticImage
          src="../images/slider/slider002_pc.webp"
          alt="様々なオプション"
          className="slide-images"
          loading='lazy'
        />
      </Link>
      <Link to="/price">
        <StaticImage
          src="../images/slider/slider003_pc.webp"
          alt="選ばれる理由"
          className="slide-images"
          loading='lazy'
        />
      </Link>


    </Slider>
  );
}