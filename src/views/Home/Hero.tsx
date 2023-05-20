import React from "react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

function Hero() {
  return (
    <div className="w-full h-screen md:h-[calc(100vh-136px)] relative bg-[url('/assets/heroBg.jpeg')] bg-no-repeat bg-cover">
      {/* ====> overly on image */}
      <div className="w-full h-full absolute left-0 top-0 bg-black-main/60"></div>
      {/* ====> */}
      <div className="w-full h-full absolute flex flex-col gap-8 justify-center items-center md:px-8 px-4">
        <p className="uppercase text-white-main text-[30px] text-center leading-10 sm:text-[36px] md:text-[40px] lg:text-[50px] font-semibold font-poppins">
          online traffic school
        </p>
        {/* ====> some attributes */}
        <div className="flex flex-col gap-2 sm:gap-3">
          {Attributes.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-start items-center gap-3 sm:gap-4"
              >
                <FaCheck className="text-brand-primary text-[30px] sm:text-[32px] lg:text-[38px]" />
                <p className="text-[20px] sm:text-[22px] lg:text-[26px] font-inter capitalize text-white-main font-normal">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
        {/* ====> select location + get started button */}
        <div className="flex md:flex-row flex-col justify-center items-center gap-4">
          {/* ===> select location */}
          <input
            className="w-full max-w-[280px] h-[55px] border-[3px] placeholder:text-[18px] placeholder:font-medium text-[20px] md:text-[24px] font-inter font-medium px-2 rounded-[10px] focus:outline-none border-brand-primary"
            type="text"
            id="select-state"
            placeholder="Select State"
          />
          {/* ===> get started button */}
          <button className="w-full max-w-[280px] h-[55px] rounded-[10px] hover:opacity-70 bg-brand-primary">
            <p className="text-[26px] font-inter capitalize text-white-main">
              get started
            </p>
          </button>
        </div>
        {/* ===> */}
        <div className="flex flex-col">
          <p className="text-[16px] md:text-[20px] font-inter uppercase font-semibold text-white-main">
            <span className="text-brand-primary">
              {" "}
              TRY OUR COURSE FOR FREE!{" "}
            </span>
            IF YOU&apos;RE NOT TOTALLY SATISFIED BEFORE TAKING THE FINAL EXAM, DON &&apos; T
            PAY!*
          </p>
          {/* ====> here will come link */}
          <Link href="#" className="">
            <p className="text-[16px] md:text-[20px] font-inter text-brand-primary font-semibold underline">
              link for the free course
            </p>
          </Link>
          <p className="text-[16px] text-white-main font-inter font-semibold">
            *Except for Arizona, and courts that have set prices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

const Attributes = [
  {
    name: "for traffic tickets",
  },
  {
    name: "auto insurance discounts",
  },
  {
    name: "100% online",
  },
  {
    name: "state licensed courses",
  },
];
