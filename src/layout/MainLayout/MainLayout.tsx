import React, { ReactNode } from "react";
import PromoBar from "@/components/Shared/PromoBar/PromoBar";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <React.Fragment>
      <PromoBar/>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default MainLayout;
