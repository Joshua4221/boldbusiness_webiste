import React from "react";
import { IMAGES } from "../../../constant/Images";
import { TripleChildContainer } from "../../common/containers/TripleChildContainer";

const SecondSection = () => {
  return (
    <div>
      <TripleChildContainer
        tripleChildInnerContainerClass={"max-w-7xl mx-auto"}
        headlineChild={
          <h2 className="text-center text-3xl md:text-4xl font-bold text-[#FFFFFF]">
            Scan and pay with ease
          </h2>
        }
        firstChild={
          <div>
            <div className="bg-[#12141D] text-center font-semibold text-[16px] py-2 text-white">
              Request Payment
            </div>
            <div className="bg-[white] p-5">
              <p className="text-[black] font-semibold text-[16px]">
                Set Request
              </p>
              <p className="text-[#667085] font-normal text-[12px] mb-4">
                Set the amount, and the customer scans to pay
              </p>
              <div className="py-[16px] pl-[16px] bg-[#F4F5F9] rounded-[16px] mb-4">
                <p className="text-[8px] font-inter text-[#7F808C] font-normal">
                  Enter Amount
                </p>
                <p className="text-[#101828] font-inter text-[13px] font-medium">
                  ₦5,000,000.00
                </p>
              </div>
              <div className="py-[16px] pl-[16px] bg-[#F4F5F9] rounded-[16px]">
                <p className="text-[8px] font-inter text-[#7F808C] font-normal">
                  {"Description (Optional)"}
                </p>
                <p className="text-[#101828] font-inter text-[13px] font-medium">
                  Groceries
                </p>
              </div>
            </div>
            <div className="text-center mt-3  text-white">
              <p className="font-bold text-[24px]">Request Payment</p>
              <p className="font-normal text-[16px] font-Aeonik">
                Set payment amount and the <br />
                customers scan to pay
              </p>
            </div>
          </div>
        }
        secondChild={
          <div className="">
            <div className="bg-[#12141D] text-center font-semibold text-[16px] py-2 text-white">
              Scan to pay
            </div>

            <div className="bg-[#ECECEE] text-[black] flex flex-col items-center justify-center py-3 px-2 font-medium">
              <p className="text-[9.5px] text-[#344054] mb-2">
                Scan with Bold app to pay{" "}
              </p>
              <div className="padd">
                <img alt="Scan QrCode" src={IMAGES.BoldQRCODE} />
              </div>
              <p className="text-[9.5px] font-normal">
                order ID:<span className=" font-medium">JerpD2829099021</span>
              </p>
            </div>

            <div className="text-center  text-white">
              <p className="font-bold text-[24px]">Scan with Bold App to Pay</p>
              <p className="font-normal text-[16px] font-Aeonik">
                A bar code is generated for you to
                <br /> pay for your expenses
              </p>
            </div>
          </div>
        }
        thrirdChild={
          <div>
            <div className="bg-[#12141D] text-center font-inter font-semibold text-[16px] py-2 text-white">
              Successful Transaction
            </div>
            <div className="bg-[white] text-[black] flex flex-col justify-center items-center p-6">
              <div
                className="p-4 rounded-[29px] mb-3"
                style={{
                  boxShadow: `0px 5.28px 5.28px -2.64px #10182808, 
                            0px 13.2px 15.84px -2.64px #10182814`,
                }}
              >
                <div className=" ml-20 bg-[#667085] w-14 h-[1.75px] m-4"></div>
                <div className="flex justify-between mb-2">
                  <img src={IMAGES.CheckProfileIcon} />
                  <span className="text-[#080B30] font-semibold text-[15px]">
                    -₦500,000.00
                  </span>
                </div>
                <div className="text-[10.5px] font-normal text-[#344054]">
                  Transfer to JERP DESIGNS LTD. is
                  <br /> successfully confirmed.
                </div>
                <div className=" items-center">
                  <button className="bg-[#E6EDFD] text-[#344054] px-[37px] py-[12px] font-semibold text-[10.5px] mr-[6px] rounded-[13px]">
                    Receipt
                  </button>
                  <button className="bg-[#101828] text-[10.5px] text-[#ffff] font-semibold px-[46px] py-[12px] rounded-[13px]">
                    Done
                  </button>
                </div>
              </div>
            </div>

            <div className="text-[white] text-center">
              <p className="font-bold text-[24px]">
                Swift Transaction in
                <br /> Seconds
              </p>
              <p className="font-normal text-[16px] font-Aeonik">
                The fastest way to make
                <br /> payment with ease
              </p>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default SecondSection;
