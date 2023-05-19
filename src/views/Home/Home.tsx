import React from "react";
import Hero from "./Hero";
import Attributes from "./Attributes";
import WhyGoToTrafficSchool from "./WhyGoToTrafficSchool";
import WeAlsoOffer from "./WeAlsoOffer";

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Attributes/>
      <WhyGoToTrafficSchool/>
      <WeAlsoOffer/>
    </React.Fragment>
  );
}

export default Home;
