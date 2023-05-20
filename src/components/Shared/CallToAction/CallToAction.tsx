import React, { useEffect, useState } from "react";
import Wrapper from "../ComponentWrapper/Wrapper";

function CallToAction() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight / 1;

      setIsSticky(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper
      styles={`bg-brand-primary h-[90px] flex justify-center items-center duration-700 ${
        isSticky ? "sticky opacity-100" : "hideen opacity-0"
      } bottom-0`}
    >
      <div className="w-full h-full flex op justify-between items-center">
        <p className="text-white-main font-inter text-[24px] capitalize font-medium">
          start your online traffic school today
        </p>
        <div className="flex justify-center items-center gap-4">
          <input
            className="w-[180px] h-[45px] px-4 border-2 border-brand-primary focus:outline-none rounded-[10px]"
            type="text"
            placeholder="Select State"
          />
          <button className="w-[180px] h-[45px] bg-white-main rounded-[10px] hover:opacity-90 text-black-main capitalize text-[18px] font-medium">
            get started
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default CallToAction;
