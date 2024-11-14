import React from "react";
import Slider, { Settings } from "react-slick";

export const Sliders = () => {
  const defaultSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...defaultSettings}>
      <div>sdf</div>
    </Slider>
  );
};
