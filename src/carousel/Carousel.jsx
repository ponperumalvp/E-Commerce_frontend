import React from "react";
import Slider from "react-slick";
import decorImg1 from "../assets/images/decor/decor1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider
      {...settings}
      className="md:w-[96%] sm:w-[90%] px-6 rounded-lg mx-auto "
    >
      <div>
        <img
          src={decorImg1}
          alt=""
          className="object-cover h-[70vh] rounded-lg"
        />
      </div>
      <div>
        <img
          src={decorImg1}
          alt=""
          className="object-cover h-[70vh] rounded-lg"
        />
      </div>{" "}
      <div>
        <img
          src={decorImg1}
          alt=""
          className="object-cover h-[70vh] rounded-lg"
        />
      </div>
    </Slider>
  );
};

export default Carousel;
