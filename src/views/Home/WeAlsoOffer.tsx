import React from "react";
import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { Data } from "../../../Data/JSON";
import WeAlsoOfferCard from "@/components/WeAlsoOfferCard/WeAlsoOfferCard";

function WeAlsoOffer() {
  return (
    <Wrapper styles="bg-white-cool py-10">
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-[28px] md:text-[34px] uppercase font-semibold font-poppins">
          we also offer
        </p>
        <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-6 sm:py-10">
          {Data.CoursesWeOffer.map((item, index) => {
            return (
              <div key={index} className="w-full flex justify-center items-center">
                <WeAlsoOfferCard image={item.img} name={item.name} />
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default WeAlsoOffer;
