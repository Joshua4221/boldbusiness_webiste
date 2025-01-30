import React, { Fragment, useEffect, useState } from "react";
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

  const [scrolltopdata, setscrolltopdata] = useState("");

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

  useEffect(() => {
    const handleScroll = () => {
      if (window?.scrollY < 25) {
        setscrolltopdata("");
      } else {
        setscrolltopdata("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(scrolltopdata, "scrolltopdata");

  return (
    <div
      className={`z-50 w-full fixed  lg:pt-6 py-2 ${
        scrolltopdata === "scrolled" ? "bg-white" : "bg-transparent"
      }`}
    >
      {/* mobile nav placeholder with logo and menu bar */}
      <div
        className={
          showMObileNav
            ? "container px-[6rem] hidden items-center justify-between 2lg:hidden"
            : "container flex lg:px-[6rem] lg:w-full w-[80%] py-[1rem] bg-custom-gradient  items-center justify-between 2lg:hidden"
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
            ? "container 2lg:px-[6rem]"
            : "container hidden 2lg:block 2lg:px-[6rem]"
        }
      >
        <div className="flex justify-end px-[2rem] pt-[1rem] 2lg:px-0 2lg:hidden">
          <button onClick={handleShowMobileNav}>
            <FaTimes />
          </button>
        </div>

        <div className="w-full  flex 2lg:flex-row flex-col 2lg:items-center 2lg:justify-between">
          {NavData?.map((item, key) => (
            <div key={key}>
              {!item?.button ? (
                <div className="flex px-[2rem] lg:px-0  2lg:flex-row flex-col 2lg:gap-6 gap-6 2lg:items-center">
                  {item?.navLayer?.map((data, int) => (
                    <div key={int}>
                      {data?.logo ? (
                        <div className="hidden 2lg:block">
                          {<LogoComponent logo_indicator={data?.logoType} />}
                        </div>
                      ) : (
                        <div className="relative ">
                          <div
                            className={
                              data.onMobile === true
                                ? "flex items-center justify-between 2lg:justify-start cursor-pointer"
                                : "hidden 2lg:flex  items-center  cursor-pointer"
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
                <div className="px-[2rem] border-t-[1.5px] border-[#F9FAFB] lg:px-0 mt-[2rem] py-[2rem] 2lg:py-0 2lg:mt-0 ">
                  <GetBoldButton
                    className="bg-black w-[100%] 2lg:w-[] text-white px-4 py-2 rounded-md"
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
