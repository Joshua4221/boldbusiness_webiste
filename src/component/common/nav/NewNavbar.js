import React, { Fragment, useEffect, useState } from "react";
import { NavData } from "../../../constant/data/NavData";
import { GetBoldButton } from "../../widgets/buttons/GetBoldButton";
import LogoComponent from "../../LogoComponent";
import { IoChevronDown, IoMenuSharp } from "react-icons/io5";
import NavDropDown from "../../NavDropDown";
import OnClickedOutSide from "../../../hooks/OnClickedOutSide";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NewNavbar = ({ navType }) => {
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
      className={`z-50 w-full fixed font-Inter  lg:pt-6 py-2 ${
        scrolltopdata === "scrolled"
          ? "bg-white"
          : showMObileNav === true
          ? "bg-[#fff]"
          : "bg-transparent"
      }`}
    >
      {/* mobile nav placeholder with logo and menu bar */}
      <div
        className={
          showMObileNav
            ? "container px-[6rem] hidden items-center justify-between 2lg:hidden"
            : "container flex lg:px-[6rem] lg:w-full w-[80%] py-[1rem]  items-center justify-between 2lg:hidden"
        }
      >
        <NavLink to={"/"}>
          <LogoComponent
            logo_indicator={
              scrolltopdata === "scrolled"
                ? "white"
                : navType === "darkHero"
                ? ""
                : "white"
            }
          />
        </NavLink>

        <div>
          <button onClick={handleShowMobileNav}>
            <IoMenuSharp
              fontSize={36}
              color={
                scrolltopdata === "scrolled"
                  ? ""
                  : navType === "darkHero"
                  ? "#ffff"
                  : ""
              }
            />
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
                        <NavLink to={"/"} className="hidden 2lg:block">
                          {
                            <>
                              {scrolltopdata === "scrolled" ? (
                                <LogoComponent logo_indicator={"white"} />
                              ) : (
                                <LogoComponent
                                  logo_indicator={
                                    navType === "darkHero" ? "" : "white"
                                  }
                                />
                              )}
                            </>
                          }
                        </NavLink>
                      ) : (
                        <div className="relative ">
                          <NavLink
                            to={data.link}
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
                            {scrolltopdata === "scrolled" ? (
                              <p
                                className={
                                  data.text === "Business"
                                    ? "font-semibold text-base bg-[#DCFFC7] px-[8px] rounded-[5px] text-[#101828]"
                                    : "font-semibold text-base text-[#101828]"
                                }
                              >
                                {data?.text}
                              </p>
                            ) : navType === "darkHero" ? (
                              <p
                                className={
                                  data.text === "Business"
                                    ? "font-semibold text-base bg-[#DCFFC7] px-[8px] rounded-[5px] text-[#101828]"
                                    : showMObileNav === true
                                    ? "font-semibold text-base text-[#101828]"
                                    : "font-semibold text-base text-[#fff]"
                                }
                              >
                                {data?.text}
                              </p>
                            ) : (
                              <p
                                className={
                                  data.text === "Business"
                                    ? "font-semibold text-base bg-[#DCFFC7] px-[8px] rounded-[5px] text-[#101828]"
                                    : "font-semibold text-base text-[#101828]"
                                }
                              >
                                {data?.text}
                              </p>
                            )}

                            {data?.textType === "drop_down_text" && (
                              <div className="ml-1 flex items-center justify-center mt-1">
                                <IoChevronDown
                                  className={
                                    scrolltopdata === "scrolled"
                                      ? "font-semibold text-base text-[#101828]"
                                      : navType === "darkHero"
                                      ? "font-semibold text-base text-[#fff]"
                                      : "font-semibold text-base text-[#101828]"
                                  }
                                />
                              </div>
                            )}
                          </NavLink>

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
                <div className="px-[2rem]  lg:px-0 mt-[2rem] py-[2rem] 2lg:py-0 2lg:mt-0 ">
                  {scrolltopdata === "scrolled" ? (
                    <GetBoldButton
                      className="bg-black w-[100%] 2lg:w-[] text-white px-4 py-2 rounded-md"
                      children={"Get started — It's free"}
                    />
                  ) : navType === "darkHero" ? (
                    <GetBoldButton
                      className="bg-white w-[100%] 2lg:w-[] text-black px-4 py-2 rounded-md"
                      children={"Get started — It's free"}
                    />
                  ) : (
                    <GetBoldButton
                      className="bg-black w-[100%] 2lg:w-[] text-white px-4 py-2 rounded-md"
                      children={"Get started — It's free"}
                    />
                  )}
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
