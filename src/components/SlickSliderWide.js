import React from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";

// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "../styles/_slick-user.scss";

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
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

      <StaticImage
        src="../images/slider/slider001_pc.webp"
        alt="秋割campaign"
      />
      <StaticImage
        src="../images/slider/slider002_pc.webp"
        alt="秋割campaign"
      />
      <StaticImage
        src="../images/slider/slider003_pc.webp"
        alt="秋割campaign"
      />

    </Slider>
  );
}