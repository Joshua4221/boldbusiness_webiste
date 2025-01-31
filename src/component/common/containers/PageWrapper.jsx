import React from "react";
import NewNavbar from "../nav/NewNavbar";
import Footer from "../footer/Footer";

const PageWrapper = ({ children }) => {
  return (
    <>
      <NewNavbar />
      <>{children}</>
      <Footer />
    </>
  );
};

export default PageWrapper;
