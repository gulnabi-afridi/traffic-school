import React from "react";
import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";
import Image from "next/image";
import Link from "next/link";

function WeAlsoOffer() {
  return (
    <Wrapper styles="bg-white-cool py-10">
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-[28px] md:text-[34px] uppercase font-semibold font-poppins">
          we also offer
        </p>
        <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-6 sm:py-10">
          {CoursesWeOffer.map((item, index) => {
            return (
              <div className="w-full flex justify-center items-center">

              <Link
                href="#"
                key={index}
                className="w-full max-w-[300px] h-[260px] flex px-8 justify-center items-center flex-col gap-4 shadow-2xl bg-white-main hover:scale-105 duration-300"
              >
                <div className="w-full grid grid-cols-3 gap-3 justify-center items-center">
                  {/* ===> left line */}
                  <div className="w-full h-[2px] bg-brand-primary"></div>
                  {/* ===> image */}
                  <div className="w-full flex justify-center items-center">
                    <div className="w-[60px] h-[60px] relative">
                      <Image
                        src={item.img}
                        fill
                        alt=""
                        className="object-cover"
                      />
                    </div>
                  </div>
                  {/* ====> right line */}
                  <div className=" w-full h-[2px] bg-brand-primary"></div>
                </div>
                <p className="text-black-main text-center text-[20px] font-inter font-medium capitalize">
                  {item.name}
                </p>
              </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

const CoursesWeOffer = [
  {
    img: "/assets/course2.png",
    name: "insurance reduction",
  },
  {
    img: "/assets/course1.png",
    name: "mature driver courses",
  },
  {
    img: "/assets/course3.png",
    name: "fleet driver training courses",
  },
  {
    img: "/assets/course4.png",
    name: "driver's ed courses",
  },
];

export default WeAlsoOffer;
