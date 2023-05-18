import React from "react";
import SmallText from "../Typography/SmallText";
function PromoBar() {
  return (
    <div className="bg-brand-primary w-full h-[36px] flex justify-center items-center">
      <SmallText styles="capitalize font-semibold">
        lower prices for a limited time
      </SmallText>
    </div>
  );
}

export default PromoBar;
