import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  styles?: string;
}

function H1Heading({ children, styles = "text-black-main" }: Props) {
  return (
    <div
      className={`text-[50px] font-semibold font-poppins ${styles}`}
    >
      {children}
    </div>
  );
}

export default H1Heading;
