import React from "react";

const LightText = ({ text = "Add Text", classStyle }) => {
  return (
    <div>
      <p className={`font-[400] text-[12px] ${classStyle}`}>{text}</p>
    </div>
  );
};

export default LightText;
