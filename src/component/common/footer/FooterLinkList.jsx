import React from "react";
import { NavLink } from "react-router-dom";

const FooterLinkList = ({
  title = "List Title",
  linkList = [
    { label: "Link Label", link: "/" },
    { label: "Link Label", link: "/" },
  ],
}) => {
  return (
    <div className="flex flex-col gap-[15px] ">
      <h1>{title}</h1>

      <div className="flex flex-col  gap-[10px] ">
        {linkList.map((items, key) => (
          <NavLink
            className={"text-[#DFDFDF] text-[14px] font-[300] "}
            key={key}
            to={items.link}
          >
            {items.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default FooterLinkList;
