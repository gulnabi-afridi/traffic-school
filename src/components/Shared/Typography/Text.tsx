import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  styles?: string;
}

function Text({ children, styles = "text-black-main" }: Props) {
  return (
    <div className={`text-[16px] md:text-[20px] font-inter ${styles}`}>
      {children}
    </div>
  );
}

export default Text;
