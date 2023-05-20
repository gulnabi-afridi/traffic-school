import React from "react";
import ReactStars from "react-stars";
import Slider from "react-slick";

interface Props {
    name:string,
    star:number,
    description:string
}

function ReviewsCard({name,star,description}:Props) {
  // ===> for slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full sldierCard">
      <div
        className="w-full max-w-[280px] shadow-xl flex flex-col gap-4 p-8 rounded-[10px]"
      >
        {/* ====> reviwer name */}
        <p className="text-[24px] font-semibold text-black-main capitalize">
           {name}
        </p>
        {/* ===> star */}
        <ReactStars
          count={5}
          value={star}
          size={32}
          edit={false}
          color2={"#ffd700"}
          className="stars"
        />
        {/* ====> reviwe description */}
        <p className="text-[16px] font-inter leading-6 font-medium">
         {description}
        </p>
      </div>
    </div>
  );
}

export default ReviewsCard;
