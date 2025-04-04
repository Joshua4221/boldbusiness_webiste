import React from "react";
import NewNavbar from "../nav/NewNavbar";
import Footer from "../footer/Footer";

const PageWrapper = ({ children, navType }) => {
  return (
    <>
      <NewNavbar navType={navType} />
      <>{children}</>
      <Footer />
    </>
  );
};

export default PageWrapper;
