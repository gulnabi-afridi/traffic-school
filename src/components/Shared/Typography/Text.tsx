import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  styles?: string;
}

function Text({ children, styles }: Props) {
  return (
    <div className={`text-[16px] md:text-[20px] text-white-main font-inter ${styles}`}>
      {children}
    </div>
  );
}

export default Text;
