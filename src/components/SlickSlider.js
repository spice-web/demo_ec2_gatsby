import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/_slick-user.scss";

import { StaticImage } from "gatsby-plugin-image"

export default function SlickSlider() {
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
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: "120px",
          slidesToShow: 1,
          dots: true,
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
      <div className="slide-images --item01"></div>
      <div className="slide-images --item02"></div>
      <div className="slide-images --item03"></div>
      <div className="slide-images --item04"></div>
      <div className="slide-images --item05"></div>
      <div className="slide-images --item06"></div>
    </Slider>
  );
}