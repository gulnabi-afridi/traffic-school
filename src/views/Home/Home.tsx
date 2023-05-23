import React from "react";
import Hero from "./Hero";
import Attributes from "./Attributes";
import WhyGoToTrafficSchool from "./WhyGoToTrafficSchool";
import WeAlsoOffer from "./WeAlsoOffer";
import Reviews from "./Reviews";
import CallToAction from "@/components/Shared/CallToAction/CallToAction";
import BenefitsOfOnlineTrafficSchool from "./BenefitsOfOnlineTrafficSchool";

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Attributes/>
      <WhyGoToTrafficSchool/>
      {/* <WeAlsoOffer/> */}
      <BenefitsOfOnlineTrafficSchool/>
      <Reviews/>
      
    </React.Fragment>
  );
}

export default Home;
