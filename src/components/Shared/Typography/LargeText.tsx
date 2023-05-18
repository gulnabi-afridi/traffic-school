import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  styles?: string;
}

function LargeText({ children, styles }: Props) {
  return (
    <div className={`text-[22px] text-black-main font-inter ${styles}`}>
      {children}
    </div>
  );
}

export default LargeText;
