import React from "react";
import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";
import Image from "next/image";
import { Data } from "../../../Data/JSON";

function Attributes() {
  return (
    <Wrapper styles=" bg-white-cool py-10">
      <div className="w-full grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {Data.Attributes.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="w-[55px] h-[55px] relative">
                <Image src={item.img} fill className="object-cover" alt="" />
              </div>
              <p className="text-[16px] md:text-[20px] text-black-main font-inter capitalize text-center">
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Attributes;
