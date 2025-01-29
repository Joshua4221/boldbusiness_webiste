import React from "react";
import { IMAGES } from "../constant/Images";
import { useState } from "react";
// import "../ExtraStyles/DropDownStyle.css";
import { GetBoldButton } from "./widgets/buttons/GetBoldButton";
import "remixicon/fonts/remixicon.css";

export default function Navbar() {
  const [productDropDown, setProductDropDown] = useState(false);
  const [companyDropDown, setCompanyDropDown] = useState(false);
  const [isOpenMobileNavs, setIsOpenMobileNavs] = useState(false);

  const toggleNavBar = () => {
    setIsOpenMobileNavs(!isOpenMobileNavs);
  };

  return (
    <nav>
      {/* <div className="container"> */}
      <div className="flex">
        <div className="flex flex-wrap justify-center items-center pr-16 mr-10">
          {/* Products Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setProductDropDown(true)}
            onMouseLeave={() => setProductDropDown(false)}
          >
            <span className="text-[#101828] font-semibold flex mr-4">
              Products
              <img src={IMAGES.DropdownIcon} className="ml-2 cursor-pointer" />
            </span>
            {productDropDown && (
              <div className="absolute bg-[#ffff] px-6 py-4 w-[255px] z-40 rounded-[8px]">
                <p className="text-[#667085] font-normal text-[16px] mb-2">
                  Virtual Banking
                </p>
                <span className="flex text-[#101828] text-[16px] font-medium mb-2 hover:bg-gray-100 px-1 py-1">
                  <img src={IMAGES.VirtualBankIcon} className="mr-2" />
                  Virtual Bank Accounts
                </span>
                <span className="flex text-[#101828] text-[16px] font-medium mb-2 hover:bg-gray-100 px-1 py-1">
                  <img src={IMAGES.VitualCardIcon} className="mr-2" />
                  Virtual Cards
                </span>
                <p className="text-[#667085] font-normal text-[16px] mb-2">
                  Your Businesses
                </p>
                <span className="flex text-[#101828] text-[16px] font-medium mb-2 hover:bg-gray-100 px-1 py-1">
                  <img src={IMAGES.LoanIcon} className="mr-2" />
                  Loan
                </span>
                <span className="flex text-[#101828] text-[16px] font-medium mb-2 hover:bg-gray-100 px-1 py-1">
                  <img src={IMAGES.BusinessManagementIcon} className="mr-2" />
                  Business Management
                </span>
                <p className="text-[#667085] font-normal text-[16px] mb-2">
                  Managements and Reports
                </p>
                <span className="flex text-[#101828] text-[16px] font-medium mb-2 hover:bg-gray-100 px-1 py-1">
                  <img src={IMAGES.TerminalIcon} className="mr-2" />
                  POS Terminal
                </span>
                <span className="flex text-[#101828] text-[16px] font-medium mb-2 hover:bg-gray-100 px-1 py-1">
                  <img src={IMAGES.ScanPayIcon} className="mr-2" />
                  Scan and Pay
                </span>
              </div>
            )}
          </div>

          {/* Company Dropdown */}

          <div
            className="relative group"
            onMouseEnter={() => setCompanyDropDown(true)}
            onMouseLeave={() => setCompanyDropDown(false)}
          >
            <span className="text-[#101828] font-semibold flex mr-4 cursor-pointer">
              Company
              <img src={IMAGES.DropdownIcon} className="ml-2 cursor-pointer" />
            </span>
            {companyDropDown && (
              <div className="absolute py-2 w-40 bg-[#ffff] pl-3 rounded-[8px]">
                <span className="flex text-[#101828] text-[16px] font-medium mb-2">
                  <img src={IMAGES.AboutUsIcon} className=" mr-1" />
                  About Us
                </span>
                <span className="flex text-[#101828] text-[16px] font-medium mb-2">
                  <img src={IMAGES.CareerIcon} className=" mr-1" />
                  Career
                </span>
                <span className="flex text-[#101828] text[16px] font-medium mb-2">
                  <img src={IMAGES.PressIcon} className=" mr-1" />
                  Press
                </span>
              </div>
            )}
          </div>

          <span className="text-[#101828] font-semibold mr-4">Contact</span>
          <span className="text-[#101828] font-semibold">Blog</span>
        </div>

        <GetBoldButton
          className="bg-black text-white px-4 py-2 rounded-md"
          children={"Get started — It's free"}
        />
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-gray-700 text-2xl">
        <button onClick={toggleNavBar}>
          {isOpenMobileNavs ? (
            <i className="ri-close-line"></i>
          ) : (
            <i className="ri-menu-line"></i>
          )}
        </button>
      </div>

      {/* mobile Menu */}

      {isOpenMobileNavs && (
        <div className="md:hidden">
          <div
            onClick={() => {
              setProductDropDown(!productDropDown);
            }}
            className="block  text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <span>Product</span>
            <img src={IMAGES.DropdownIcon} />
          </div>
          {isOpenMobileNavs && (
            <div className="pl-14">
              <p className="text-[#667085] font-normal text-[16px] mb-2 block py-1">
                Virtual Banking
              </p>
              <span className="flex text-[#101828] text-[16px] font-medium mb-2 hover:bg-gray-100 px-1 py-1">
                <img src={IMAGES.VirtualBankIcon} className="mr-2" />
                Virtual Bank Accounts
              </span>
              <span className="flex text-[#101828] text-[16px] font-medium mb-2 hover:bg-gray-100 px-1 py-1">
                <img src={IMAGES.VitualCardIcon} className="mr-2" />
                Virtual Cards
              </span>
              <p className="text-[#667085] font-normal text-[16px] mb-2">
                Your Businesses
              </p>
              <span className="flex text-[#101828] text-[16px] font-medium mb-2 hover:bg-gray-100 px-1 py-1">
                <img src={IMAGES.LoanIcon} className="mr-2" />
                Loan
              </span>
              <span className="flex text-[#101828] text-[16px] font-medium mb-2 hover:bg-gray-100 px-1 py-1">
                <img src={IMAGES.BusinessManagementIcon} className="mr-2" />
                Business Management
              </span>
              <p className="text-[#667085] font-normal text-[16px] mb-2">
                Managements and Reports
              </p>
              <span className="flex text-[#101828] text-[16px] font-medium mb-2 hover:bg-gray-100 px-1 py-1">
                <img src={IMAGES.TerminalIcon} className="mr-2" />
                POS Terminal
              </span>
              <span className="flex text-[#101828] text-[16px] font-medium mb-2 hover:bg-gray-100 px-1 py-1">
                <img src={IMAGES.ScanPayIcon} className="mr-2" />
                Scan and Pay
              </span>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
