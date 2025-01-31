import React from "react";
import { NavLink } from "react-router-dom";

const NavDropDown = ({ dropdown_content }) => {
  return (
    <div className="lg:absolute bg-white w-[17rem] z-50 py-4 rounded-lg flex flex-col gap-2">
      {dropdown_content?.map((item, key) => (
        <div key={key}>
          {item?.titleType && (
            <div className="px-[1.375rem] py-[0.625rem] cursor-pointer">
              <p className="text-[#667085] text-base font-normal">
                {item?.title}
              </p>
            </div>
          )}

          <div className="flex flex-col">
            {item?.content?.map((data, int) => (
              <NavLink
                to={data.link}
                key={int}
                className="flex items-center gap-3 px-[1.375rem] py-[0.625rem] cursor-pointer"
              >
                <img
                  src={data?.icon}
                  className="w-[1.5rem] h-[1.5rem] rounded-full"
                />

                <p className="text-base font-medium text-[#101828]">
                  {data?.text}
                </p>
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavDropDown;
