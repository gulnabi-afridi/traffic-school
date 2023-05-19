import React from "react";
import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";
import { GoCheck } from "react-icons/go";

function WhyGoToTrafficSchool() {
  return (
    <Wrapper styles="py-10">
      <div className="w-full flex flex-col gap-6 justify-center items-center">
        <p className="text-[34px] uppercase font-semibold font-poppins">
          why go to traffic school?
        </p>
        <p className="text-[16px] md:text-[23px] font-inter font-medium text-center">
          Traffic School & Defensive Driving Courses: Keep your insurance rates
          low the right way, <br /> with one of our quick and easy traffic
          school courses!
        </p>
        <p className="text-[16px] md:text-[20px] font-normal font-inter">
          GoToTrafficSchool has been an expert in online traffic school since
          1999. We offer online traffic school, defensive driving, driver
          improvement, insurance reduction and mature driver safety courses in
          over 25 states across the country, as well as through thousands of
          individual courts in states where online traffic school courses may
          not be approved. If you're unsure whether or not your court approves
          online traffic school, ask one of our [online agents] or call us at
          888.329.7069. Our DMV licensed courses provide an easy and effective
          way to:
        </p>
        {/* ====> attributes */}
        <div className="w-full flex items-start flex-col gap-4">
          {Attribuetes.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center gap-3"
              >
                <GoCheck className="text-brand-primary text-[32px]" />
                <p className="font-inter text-[20px] text-black-main">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
        <p className="text-[16px] md:text-[20px] font-normal font-inter">
          Our mobile-friendly courses are a combination of animated videos,
          audio clips, 3D driving simulations and text lessons, all of which can
          be completed 100% online from any computer, laptop, tablet or smart
          phone. No matter how hectic your schedule, you can always count on Go
          To Traffic School for an easy, inexpensive and convenient online
          traffic school experience!
        </p>
        {/* ====> enroll now button */}
        <button className="w-[170px] h-[50px] mt-8 font-medium text-[20px] text-white-main bg-brand-primary rounded-[10px] capitalize hover:opacity-80">
          explore now
        </button>
      </div>
    </Wrapper>
  );
}

const Attribuetes = [
  {
    name: "Mask a moving violation",
  },
  {
    name: "Satisfy a court order to attend traffic school",
  },
  {
    name: "Lower your insurance premiums",
  },
  {
    name: "Qualify for a safe driver discount",
  },
  {
    name: "Meet an employer requirement for fleet driver training",
  },
  {
    name: "Prevent or remove driver record points",
  },
];

export default WhyGoToTrafficSchool;
