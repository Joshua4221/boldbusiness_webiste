import React from "react";
import { Link } from "react-router-dom";

export const GetBoldButton = ({ onClick, children, className }) => {
  return (
    <Link to="/DownloadPage">
      <button className={`  ${className}`} onClick={onClick}>
        {children}
      </button>
    </Link>
  );
};
