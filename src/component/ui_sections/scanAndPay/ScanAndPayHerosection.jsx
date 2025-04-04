import React from "react";
import LightText from "../../widgets/text_elements/LightText";
import { IMAGES } from "../../../constant/Images";
import { GetBoldButton } from "../../widgets/buttons/GetBoldButton";

export const ScanAndPayHerosection = () => {
  return (
    <div className="">
      <section className="flex flex-col items-center justify-center px-6 py-16 2lg:py-[100px] lg:py-[80px] b-gray-100 bg-[#EDEDED] min-h-screen">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="bg-[#FFFFFF] text-sm px-3 py-1 rounded-[20px] flex lg:w-[152px] mx-[auto]">
            <img src={IMAGES.NigeriaFlagIcon} className=" mr-1" />
            <LightText text="Made In Nigeria" classStyle={" pt-[4px]"} />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mt-4">
            Seamlessly and Quickly <br />
            <span className="text-blue-500">Scan and Make Payment</span>
          </h1>
          <p className="text-gray-500 mt-2 max-w-md mx-auto">
            Lorem Ipsum cans asnnasj makjcjk niiuncyuz nxiznin kzniniznin nuhnc
          </p>
        </div>

        {/* Payment UI Section */}
        <div className="bg-gray-100 shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 max-w-3xl w-full">
          {/* QR Code Section */}
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <img src={IMAGES.ScanAndPayQRCode} />
          </div>

          {/* Transaction Status Section */}

          <div className="bg-gray-100 p-4  ">
            <img src={IMAGES.TransactionModal} />
          </div>

          {/* Instant Transfer Section */}
          <div className="bg-white p-4   flex items-center justify-between rounded-[12px]">
            <img src={IMAGES.InstantTransactioncard} />
          </div>
        </div>

        {/* Call-to-Action Button */}
        {/* <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
          Get Bold
        </button> */}
        <div className="inline-block rounded-md p-[2px] bg-gradient-to-r from-[#0B40EE] via-white to-[#65B5FF] mt-3">
          <GetBoldButton
            children={"Get Bold"}
            className={
              "text-[#0B40EE] font-semibold px-6 py-2 bg-white rounded-md w-full h-full"
            }
          />
        </div>
      </section>
    </div>
  );
};
