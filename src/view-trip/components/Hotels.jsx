import React from "react";
import HotelCardItem from "./HotelCardItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight } from "react-icons/fa6";
const Hotels = ({ trip }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-12 mx-auto md:mx-16 lg:mx-32 p-6 rounded-lg shadow-lg">
      <div className="text-4xl font-bold text-center mb-8">
        Hotel Recommendations
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {trip?.tripData?.hotel?.map((h, i) => (
            <div key={i} className="p-2">
              <HotelCardItem h={h} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hotels;
