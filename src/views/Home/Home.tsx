import React from "react";
import Hero from "./Hero";
import Attributes from "./Attributes";
import WhyGoToTrafficSchool from "./WhyGoToTrafficSchool";
import BenefitsOfOnlineTrafficSchool from "./BenefitsOfOnlineTrafficSchool";
import Faqs from "./Faqs";


function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Attributes/>
      <WhyGoToTrafficSchool/>
      {/* <WeAlsoOffer/> */}
      <BenefitsOfOnlineTrafficSchool/>
      <Faqs/>
      {/* <Reviews/> */}
      
    </React.Fragment>
  );
}

export default Home;
