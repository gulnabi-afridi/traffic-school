import React from "react";
import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";
import ReactStars from "react-stars";
import Slider from "react-slick";
import ReviewsCard from "@/components/ReviewsCard/ReviewsCard";
import { Data } from "../../../Data/JSON";

function Reviews() {
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
    <Wrapper styles="py-10">
      <div
        id="reviews"
        className="w-full flex flex-col justify-center items-center"
      >
        <div className="flex md:flex-row flex-col justify-center items-center gap-3 sm:gap-6">
          <p className="text-[34px] uppercase text-black-main font-semibold font-poppins">
            reviews
          </p>
          <div className="flex sm:flex-row flex-col justify-center items-center gap-3 sm:gap-6">
            {/* ==> average star */}
            <ReactStars
              count={5}
              value={4.5}
              size={32}
              edit={false}
              color2={"#ffd700"}
              className="stars"
            />
            <div className="flex gap-3 justify-center items-center">
              <p className="text-[20px] text-black-main font-inter">4.5/5</p>
              <p className="text-black-main font-medium h-[20px] w-[1px] border-[1px] border-black-main"></p>
              <p className="text-[20px] text-black-main font-inter">
                Over 6,000 reviews
              </p>
            </div>
          </div>
        </div>
        {/*============== Swiper ============= */}
        <div className="w-full mt-10">
          <Slider {...settings}>
            {Data.ReviewsData.map((item, index) => {
              return (
                <ReviewsCard
                  key={index}
                  name={item.name}
                  star={item.star}
                  description={item.description}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </Wrapper>
  );
}

export default Reviews;
