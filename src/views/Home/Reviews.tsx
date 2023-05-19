import React from "react";
import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";
import ReactStars from "react-stars";
import Slider from "react-slick";

function Reviews() {
  // ===> for slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Wrapper styles="py-10">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-6">
          <p className="text-[34px] uppercase text-black-main font-semibold font-poppins">
            reviews
          </p>
          <div className="flex justify-center items-center gap-6">
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
            {[0, 1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <div className="w-full sldierCard">
                  <div
                    key={index}
                    className="w-full max-w-[280px] shadow-xl flex flex-col gap-4 p-8 rounded-[10px]"
                  >
                    {/* ===> reviewer name */}
                    <p className="text-[24px] font-semibold text-black-main capitalize">
                      haroon abid
                    </p>
                    {/* ===> stars */}
                    <ReactStars
                      count={5}
                      value={4.5}
                      size={32}
                      edit={false}
                      color2={"#ffd700"}
                      className="stars"
                    />
                    {/* ==> review description */}
                    <p className="text-[16px] font-inter leading-6 font-medium">
                      This is a really great and helpful tool to help you get a
                      clear understanding on what to expect on the permit test
                      its straight forward I personally would invite people to
                      use Drivers Ed!!!!
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </Wrapper>
  );
}

export default Reviews;
