import React from "react";
import H1Heading from "@/components/Shared/Typography/H1Heading";
import LargeText from "@/components/Shared/Typography/LargeText";
import Text from "@/components/Shared/Typography/Text";
import SmallText from "@/components/Shared/Typography/SmallText";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

function Hero() {
  return (
    <div className="w-full h-[calc(100vh-136px)] relative bg-[url('/assets/heroBg.jpeg')] bg-no-repeat bg-cover">
      {/* ====> overly on image */}
      <div className="w-full h-full absolute left-0 top-0 bg-black-main/60"></div>
      {/* ====> */}
      <div className="w-full h-full absolute flex flex-col gap-8 justify-center items-center">
        <H1Heading styles="uppercase text-white-main">online traffic school</H1Heading>
        {/* ====> some attributes */}
        <div className="flex flex-col gap-3">
          {Attributes.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-start items-center gap-4"
              >
                <FaCheck className="text-brand-primary text-[38px]" />
                <LargeText styles="capitalize text-white-main font-normal">
                  {item.name}
                </LargeText>
              </div>
            );
          })}
        </div>
        {/* ====> select location + get started button */}
        <div className="flex justify-center items-center gap-4">
          {/* ===> select location */}
          <input
            className="w-[260px] h-[55px] border-[3px] placeholder:text-[16px] placeholder:font-medium text-[20px] font-inter font-semibold px-2 rounded-[10px] focus:outline-none border-brand-primary"
            type="text"
            id="select-state"
            placeholder="Select State"
          />
          {/* ===> get started button */}
          <button className="w-[260px] h-[55px] rounded-[10px] hover:opacity-70 bg-brand-primary">
            <LargeText styles="capitalize">get started</LargeText>
          </button>
        </div>
        {/* ===> */}
        <div className="flex flex-col">
          <Text styles="uppercase font-semibold text-white-main">
            <span className="text-brand-primary">
              {" "}
              TRY OUR COURSE FOR FREE!{" "}
            </span>
            IF YOU'RE NOT TOTALLY SATISFIED BEFORE TAKING THE FINAL EXAM, DON'T
            PAY!*
          </Text>
          {/* ====> here will come link */}
          <Link href="#" className="">
            <Text styles="text-brand-primary font-semibold underline">
              link for the free course
            </Text>
          </Link>
          <SmallText styles="font-semibold">
            *Except for Arizona, and courts that have set prices.
          </SmallText>
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
