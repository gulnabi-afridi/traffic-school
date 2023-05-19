import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  styles?: string;
}

function LargeText({ children, styles = "text-black-main" }: Props) {
  return (
    <div className={`text-[26px] font-inter ${styles}`}>
      {children}
    </div>
  );
}

export default LargeText;
