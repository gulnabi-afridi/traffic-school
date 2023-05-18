import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  styles?: string;
}

function SmallText({ children, styles }: Props) {
  return (
    <div className={`text-[16px] text-black-main font-inter ${styles}`}>
      {children}
    </div>
  );
}

export default SmallText;
