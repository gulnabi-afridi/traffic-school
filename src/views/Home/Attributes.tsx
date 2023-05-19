import React from "react";
import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";
import Image from "next/image";
import Text from "@/components/Shared/Typography/Text";
import { Data } from "../../../Data/JSON";

function Attributes() {
  return (
    <Wrapper styles=" bg-white-off py-10">
      <div className="w-full grid gap-10 grid-cols-6">
        {Data.Attributes.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="w-[70px] h-[70px] relative">
                <Image src={item.img} fill className="object-cover" alt="" />
              </div>
              <Text styles="capitalize text-center">{item.name}</Text>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Attributes;
