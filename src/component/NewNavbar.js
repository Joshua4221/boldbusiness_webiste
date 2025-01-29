import React, { Fragment, useState } from "react";
import { NavData } from "../constant/data/NavData";
import { GetBoldButton } from "./widgets/buttons/GetBoldButton";
import LogoComponent from "./LogoComponent";
import { IoChevronDown, IoMenuSharp } from "react-icons/io5";
import NavDropDown from "./NavDropDown";
import OnClickedOutSide from "../hooks/OnClickedOutSide";
import { FaTimes } from "react-icons/fa";

const NewNavbar = () => {
  const [navIndicator, setNavIndicator] = useState("");
  const [showMObileNav, setShowMobileNav] = useState(false);

  const handleNavIndicator = (data) => {
    console.log("clicked");
    if (navIndicator === "") {
      setNavIndicator(data);
    } else {
      setNavIndicator("");
    }
  };

  const handleCloseNavIndicator = () => {
    setNavIndicator("");
  };

  const handleShowMobileNav = () => {
    setShowMobileNav(!showMObileNav);
  };

  return (
    <div className="w-full  lg:pt-6 py-2 bg-white  lg:bg-red-300 lg:bg-transparent">
      {/* mobile nav placeholder with logo and menu bar */}
      <div
        className={
          showMObileNav
            ? "container px-[6rem] hidden items-center justify-between lg:hidden"
            : "container flex px-[2rem] py-[1rem] bg-custom-gradient  items-center justify-between lg:hidden"
        }
      >
        <div>
          <LogoComponent logo_indicator={"white"} />
        </div>
        <div>
          <button onClick={handleShowMobileNav}>
            <IoMenuSharp fontSize={36} />
          </button>
        </div>
      </div>
      <div
        className={
          showMObileNav
            ? "container lg:px-[6rem]"
            : "container hidden lg:block lg:px-[6rem]"
        }
      >
        <div className="flex justify-end px-[2rem] pt-[1rem] lg:px-0 lg:hidden">
          <button onClick={handleShowMobileNav}>
            <FaTimes />
          </button>
        </div>

        <div className="w-full  flex lg:flex-row flex-col lg:items-center lg:justify-between">
          {NavData?.map((item, key) => (
            <div key={key}>
              {!item?.button ? (
                <div className="flex px-[2rem] lg:px-0  lg:flex-row flex-col lg:gap-6 gap-6 lg:items-center">
                  {item?.navLayer?.map((data, int) => (
                    <div key={int}>
                      {data?.logo ? (
                        <div className="hidden lg:block">
                          {<LogoComponent logo_indicator={data?.logoType} />}
                        </div>
                      ) : (
                        <div className="relative ">
                          <div
                            className={
                              data.onMobile === true
                                ? "flex items-center justify-between lg:justify-start cursor-pointer"
                                : "hidden lg:flex  items-center  cursor-pointer"
                            }
                            onClick={() => {
                              console.log("clicked item");
                              handleNavIndicator(data?.text);
                            }}
                          >
                            <p
                              className={
                                data.text === "Business"
                                  ? "font-semibold text-base bg-[#DCFFC7] px-[8px] rounded-[5px] text-[#101828]"
                                  : "font-semibold text-base text-[#101828]"
                              }
                            >
                              {data?.text}
                            </p>

                            {data?.textType === "drop_down_text" && (
                              <div className="ml-1 flex items-center justify-center mt-1">
                                <IoChevronDown className="font-semibold text-base text-[#101828]" />
                              </div>
                            )}
                          </div>

                          {data?.textType === "drop_down_text" && (
                            <>
                              {navIndicator?.toLowerCase() ===
                                data?.text?.toLowerCase() && (
                                <OnClickedOutSide
                                  onOutsideClick={handleCloseNavIndicator}
                                >
                                  <NavDropDown
                                    dropdown_content={data?.dropdown}
                                  />
                                </OnClickedOutSide>
                              )}
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="px-[2rem] border-t-[1.5px] border-[#F9FAFB] lg:px-0 mt-[2rem] py-[2rem] lg:py-0 lg:mt-0 ">
                  <GetBoldButton
                    className="bg-black w-[100%] lg:w-[] text-white px-4 py-2 rounded-md"
                    children={"Get started — It's free"}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewNavbar;
