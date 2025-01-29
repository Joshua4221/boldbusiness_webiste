import React from "react";
import { IMAGES } from "../constant/Images";

const LogoComponent = ({ logo_indicator }) => {
  return (
    <>
      {logo_indicator === "white" ? (
        <img src={IMAGES.BoldLogo} />
      ) : (
        <img src={IMAGES.WhiteBoldLogo} />
      )}
    </>
  );
};

export default LogoComponent;
