import React from "react";
import LightText from "../../widgets/text_elements/LightText";
import LogoComponent from "../../LogoComponent";
import { Link, NavLink } from "react-router";
import FooterLinkList from "./FooterLinkList";
import { FooterLinks } from "../../../constant/data/FooterLinks";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

import { RiTiktokLine, RiYoutubeLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-darkBackground py-[80px] ">
      {/* inner comp */}
      <div className="container lg:px-[6rem] px-[3rem] flex  flex-col gap-[100px] ">
        {/* first layer */}
        <div className="flex flex-wrap lg:gap-0 gap-[50px] justify-between">
          {/* logo text container */}
          <div className="lg:w-[22%] flex flex-col gap-[20px] ">
            <div>
              <LogoComponent />
            </div>

            <LightText
              text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
              classStyle={"text-white"}
            />
          </div>
          {/* footer items */}
          <div className="lg:w-[70%] w-full flex flex-wrap justify-end gap-[40px] text-[#fff]">
            {FooterLinks.map((linkLists, index) => (
              <div className="xmd:w-[21%] w-[40%] " key={index}>
                <FooterLinkList
                  title={linkLists.title}
                  linkList={linkLists.linkList}
                />
              </div>
            ))}
          </div>
        </div>

        {/* second layer */}
        <div className="text-[#DFDFDF] flex flex-col gap-[30px] ">
          {/* line across */}
          <div className=" h-[2px] w-[100%] bg-[#fff] "></div>
          {/* social links and texts */}
          <div className="flex lg:justify-between justify-center gap-[10px] lg:gap-0 flex-wrap-reverse ">
            {/* copy right text */}
            <div>
              <LightText text="© Copyright 2021, All Rights Reserved" />
            </div>
            {/* social links */}
            <div className="flex gap-[20px]">
              <div className="p-[5px] border-[1px] border-[#fff] rounded-[100%] ">
                <FaXTwitter color="#fff" />
              </div>
              <div className="bg-[blue] rounded-full p-[6px] flex justify-center items-center">
                <FaFacebookF color="#fff" />
              </div>
              <div className="p-[5px] border-[1px] border-[#fff] rounded-[100%]">
                <FaInstagram color="#fff" />
              </div>
              <div className="p-[5px] border-[1px] border-[#fff] rounded-[100%]">
                <RiTiktokLine color="#fff" />
              </div>
              <div className="p-[5px] border-[1px] border-[#fff] rounded-[100%]">
                <RiYoutubeLine color="#fff" />
              </div>
            </div>
          </div>

          {/* bottom texts */}
          <div>
            <LightText text="At Currencys, we are committed to your financial freedom. Our platform is designed to provide you with seamless, secure, and efficient cross-border transactions. We are constantly innovating to enhance your experience and ensure your money moves as smoothly as you do. Thank you for choosing Currencys – Unlocking Seamless Cross Border Transactions." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
