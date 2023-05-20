import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    image:string;
    name:string;
}

function WeAlsoOfferCard({image,name}:Props) {
  return (

    <Link
      href="#"
      className="w-full max-w-[300px] h-[260px] flex px-8 justify-center items-center flex-col gap-4 shadow-2xl bg-white-main hover:scale-105 duration-300"
    >
      <div className="w-full grid grid-cols-3 gap-3 justify-center items-center">
        {/* ===> left line */}
        <div className="w-full h-[2px] bg-brand-primary"></div>
        {/* ===> image */}
        <div className="w-full flex justify-center items-center">
          <div className="w-[60px] h-[60px] relative">
            <Image
              src={image}
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
        {name}
      </p>
    </Link>
  )
}

export default WeAlsoOfferCard