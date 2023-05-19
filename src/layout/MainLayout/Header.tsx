import React, { useState } from "react";
import Wrapper from "../../components/Shared/ComponentWrapper/Wrapper";
import Link from "next/link";
import { Data } from "../../../Data/JSON";
import { RxCross2 } from "react-icons/rx";
// ====> import for drawer and humburger
import { Spin as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Text from "@/components/Shared/Typography/Text";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <div className="w-full h-[100px] flex justify-between items-center">
        {/* ====> logo */}
        <p className="text-[35px] md:text-[50px] font-poppins font-semibold text-black-main">
          Logo.
        </p>
        {/* ====> links */}
        <div className="hidden lg:flex justify-center items-center gap-14">
          {Data.Navibar.map((item, index) => {
            return (
              <Link key={index} href={item.path}>
                <Text styles="capitalize text-black-main font-medium relative after:absolute after:w-0 after:h-[3px] after:left-0 after:bottom-0 after:bg-brand-primary hover:after:w-full after:duration-200">
                  {item.name}
                </Text>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center items-center gap-4">
          {/* =====> contact us button */}
          <button className="sm:block hidden w-[120px] md:w-[150px] h-[40px] md:h-[45px] bg-brand-primary text-white-main rounded-[10px] hover:opacity-80">
            <Text styles="font-medium capitalize text-white-main">              
              contact us
            </Text>
          </button>
          {/* ======> login button */}
          <button className="sm:block hidden w-[80px] md:w-[100px] h-[40px] md:h-[45px] bg-transparent border-[2px] border-brand-primary font-inter text-[20px] text-black-main rounded-[10px] hover:bg-brand-primary hover:opacity-80">
            <Text styles="font-medium capitalize text-black-main hover:text-white-main">
              log in
            </Text>
          </button>

          {/* ====> hamburger and drawer for small screen */}
          <div className="lg:hidden flex justify-end items-center">
            <Hamburger
              color="black"
              rounded
              size={34}
              toggled={isOpen}
              toggle={setIsOpen}
            />
            <Drawer
              open={isOpen}
              onClose={() => setIsOpen(false)}
              direction="right"
              className="drawer"
            >
              <div className="flex flex-col p-6 justify-center items-center ">
                {/* =========>top bar */}
                <div className="w-full flex justify-between items-center">
                  {/* ===> logo */}
                  <p className="text-[35px] md:text-[50px] font-poppins font-semibold text-white-main">
                    Logo.
                  </p>
                  <RxCross2
                    onClick={() => setIsOpen(false)}
                    className="text-[45px] text-white-main "
                  />
                </div>
                {/* ========> sections links */}
                <div className="flex flex-col justify-center items-center gap-8 mt-16">
                  {Data.Navibar.map((navi, index) => {
                    return (
                      <Link
                        key={index}
                        onClick={() => setIsOpen(false)}
                        href={navi.path}
                        className=""
                      >
                        <Text styles="text-white-main capitalize">
                          {navi.name}
                        </Text>
                      </Link>
                    );
                  })}
                </div>
                {/* ====> two buttons */}
                <div className="flex justify-center items-center flex-col gap-8 mt-8">
                  {/* =====> contact us button */}
                  <button className="w-[120px] md:w-[150px] h-[40px] md:h-[45px] bg-brand-primary text-white-main rounded-[10px] hover:opacity-80">
                    <Text styles="font-medium capitalize text-white-main">
                      {" "}
                      contact us
                    </Text>
                  </button>
                  {/* ======> login button */}
                  <button className="w-[120px] md:w-[100px] h-[40px] md:h-[45px] bg-transparent border-[2px] border-brand-primary font-inter text-[20px] rounded-[10px] hover:bg-brand-primary hover:opacity-80">
                    <Text styles="font-medium capitalize text-white-main">
                      log in
                    </Text>
                  </button>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Navibar = [
  {
    name: "home",
    path: "#",
  },
  {
    name: "attributes",
    path: "#",
  },
  {
    name: "how it work",
    path: "#",
  },
  {
    name: "faq",
    path: "#",
  },
];

export default Header;
