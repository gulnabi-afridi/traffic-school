import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  styles?: string;
}

function SmallText({ children, styles }: Props) {
  return (
    <div
      className={`text-[30px] font-semibold text-black-main font-poppins ${styles}`}
    >
      {children}
    </div>
  );
}

export default SmallText;
