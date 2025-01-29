import React from "react";
import { IMAGES } from "../constant/Images";
import { GetBoldButton } from "./widgets/buttons/GetBoldButton";

export const UroSectionOne = () => {
  return (
    <div>
      <main
        className=" py-12 px-6 md:px-16 lg:px-32"
        style={{
          background:
            "linear-gradient(0deg, rgba(213, 230, 253, 0.105) 0.76%, rgba(0, 111, 255, 0.03) 100%)",
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#12141D] font-inter">
              Accept In-Store Payment Across Africa
            </h1>
            <p className="mt-4 mb-4 text-lg text-[#12141D] font-inter">
              With Bold Business App, you’ll be able to make Digital Payments
              From Your Shop through Mobile Money, Bank Transfer & Card
              Payments.
            </p>
            {/* <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
              Get Bold
            </button> */}
            <GetBoldButton
              children={"Get Bold"}
              className="bg-[black] tx-[14px] px-[32px] rounded-[8px] pt-[16px] pb-[16px] text-[white]"
            />
            <p className="mt-2 text-sm text-gray-500">
              No Card Required • Pay Anytime
            </p>
          </div>

          {/* Right Content */}
          <div className="relative">
            <img
              src={IMAGES.UroSecOnePIC}
              alt="Woman smiling"
              className="w-full rounded-lg "
            />

            {/* qrCode Left SIde */}

            <div className="absolute bottom-[160px] right-2 bg-white shadow-lg rounded-lg p-2 px-6 flex flex-col justify-center items-center">
              <p className="text-[12px] text-[#344054] font-inter">
                Scan with Bold App to pay
              </p>
              <img src={IMAGES.QrCode} alt="QR Code" />
              <p className="text-[9px] text-[#101828] mt-2">
                JERP DESIGNS LTD.{" "}
                <span className="text-[9px] text-[#344054] ">1234567890</span>
              </p>
            </div>

            <div className="p-4 bg-white shadow-lg rounded-lg w-[300px] absolute bottom-[5px] right-[300px]">
              <p className="font-medium text-[#101828] text-[12px]">
                Payment Request
              </p>
              <span className="text-[#344054] font-normal text-[12px]">
                JERPDESIGN LTD. has requested ₦5,000,000. Tap this link to pay.
                <span className="text-[#2969FF]">
                  https://boldapp.ng/ChB1j0p
                </span>
              </span>
            </div>

            <div className="p-4 bg-white shadow-lg rounded-lg flex w-[270px] absolute left-[260px] top-[520px]">
              <img src={IMAGES.BoldIcon} className="mr-[10px]" />
              <div className="text-[12px]">
                <p className="text-[#101828] font-medium">Money Transfer </p>
                <span>
                  Your transfer of ₦300,000 to Kent Mathew was successful.
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className=" bg-white py-32 px-5 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Section: Cards */}
          <div className="flex justify-center items-center">
            {/* Business Owner Card */}
            <div className=" z-10 absolute right-[1040px] top-[840px] px-[27px] py-[18px] bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex justify-center items-center">
                <img src={IMAGES.ProfileIcon} />
              </div>
              <p className="text-sm font-medium mt-2">Jerry Achika</p>
              <p className="text-xs text-gray-500">Business Owner</p>
            </div>

            {/* Add Business Accounts */}
            <div className=" bg-black text-white rounded-lg shadow-lg p-5 flex justify-center items-center px-[70px] py-[60px] relative">
              <img src={IMAGES.PlusIcon} className="mr-[5px]" />
              <p className="text-lg font-semibold">Add Business Accounts</p>
            </div>

            {/* Money Transfer Notification */}

            <div className="p-4 bg-white shadow-lg rounded-lg flex w-[270px] absolute right-[655px] top-[860px]">
              <img src={IMAGES.BoldIcon} className="mr-[10px]" />
              <div className="text-[12px]">
                <p className="text-[#101828] font-medium">Money Transfer </p>
                <span>
                  Your transfer of ₦300,000 to Kent Mathew was successful.
                </span>
              </div>
            </div>

            {/* Transaction Card */}
            <div className="absolute top-[1045px] w-64 bg-white shadow-lg rounded-[20px] p-5">
              <div className="flex justify-between">
                <div className="flex">
                  <div className="absolute z-10">
                    <img src={IMAGES.BlueCheck} />
                  </div>
                  <div className="relative left-[30px]">
                    <img src={IMAGES.IbdcIcon} />
                  </div>
                </div>
                <div>
                  <p className="text-lg font-semibold mt-2 text-[#080B30]">
                    -₦500.00
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#344054] font-medium">
                Transaction Successful
              </p>

              <p className="text-[9.5px] text-[#344054] mt-1">
                Process to purchase electricity units has been successfully
                submitted
              </p>
              <div className="flex justify-between mt-4">
                <button className="text-[#344054] border  px-8 py-2 rounded-[12px] bg-[#E6EDFD] text-[10px] font-medium">
                  Receipt
                </button>
                <button className="text-[#FFFFFF] bg-[#101828] px-10 py-2 rounded-[12px] font-medium text-[10px]">
                  Done
                </button>
              </div>
            </div>
          </div>

          {/* Right Section: Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Futuristic Payment Process Across Africa
            </h2>
            <p className="text-gray-600 mb-5">
              Sales Performance is the effectiveness of the sales team, both
              individually and in selling activities; the ability to achieve
              sales goals.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <img src={IMAGES.ApprovedIcon} />
                <p className="text-gray-600">Request Payment</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={IMAGES.ApprovedIcon} />
                <p className="text-gray-600">Scan Device</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={IMAGES.ApprovedIcon} />
                <p className="text-gray-600">Enjoy Fast Payment Process</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-6 md:px-16 lg:px-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Text Section */}
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Easy and Effective Business Management
            </h2>
            <p className="text-gray-600 mb-6">
              It encompasses planning, organizing, leading, and controlling all
              aspects of a business, including its people, resources, and
              processes, to achieve the organization's goals.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <img src={IMAGES.ApprovedIcon} />
                <span className="text-gray-700">Financial Management</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={IMAGES.ApprovedIcon} />
                <span className="text-gray-700">Risk Management</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={IMAGES.ApprovedIcon} />
                <span className="text-gray-700">
                  Enjoy Bulk Payment Process
                </span>
              </li>
            </ul>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <img src={IMAGES.HumanSidePage} />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-6 md:px-16 lg:px-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side: User Information */}
          <div className="max-w-lg">
            <div className="absolute top-[1740px]">
              <img src={IMAGES.LoanProfile} />
            </div>

            <div className="bg-[#FFFFFF] p-6 rounded-md shadow-md ml-10">
              <div className="flex justify-between">
                <p className="text-sm text-gray-500 mb-3">My Credit Score</p>
                <div>
                  <img src={IMAGES.Ratings} />

                  <div className=" w-38 h-2 bg-gray-300 rounded-full">
                    <div className="w-2/5 h-full bg-[#D57CFF] rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 justify-between">
                <div className="flex items-center justify-center">
                  <img src={IMAGES.ChartIcon} />
                </div>

                <div className="text-sm ml-5">
                  <p className="font-semibold text-gray-700">
                    Credit Score Factors
                  </p>
                  <div className="flex justify-between">
                    <div className="mt-2 bg-[#F8F8FA] p-2 mr-2 rounded-[8px]">
                      <div className="text-gray-500">Bill Payment</div>
                      <div className="font-semibold text-gray-700">60%</div>
                    </div>
                    <div className="mt-2 bg-[#F8F8FA] p-2 rounded-[8px] pr-8">
                      <div className="text-gray-500">Savings</div>
                      <div className="font-semibold text-gray-700">40%</div>
                    </div>
                  </div>
                </div>
              </div>
              <span className=" overline text-[blue]"></span>
              <div className="flex justify-between">
                <p className="text-[#344054] text-[12px]">
                  How Do I Increase My Credit Score?
                </p>
                <img src={IMAGES.ArrowDown} />
              </div>
            </div>
          </div>

          {/* Right Side: Text Section */}
          <div className="max-w-lg mt-8 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Easy Loan Application and Fast Payment
            </h2>
            <p className="mb-6 text-[#12141D] text-[16px] font-normal">
              This approach ensures convenience for users, offering them a quick
              solution to their financial needs while maintaining transparency
              and security.
            </p>
            <p className="text-[#12141D] text-[14px] font-normal">
              Get it right, and you’ll end up working smarter to get more done
              in less time. Drawing up a to-do list might not seem like a
              groundbreaking technique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0F172A] text-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
            Scan And Pay With Ease
          </h2>
          <div className="flex justify-evenly">
            <div>
              <div className="bg-[#12141D] text-center font-semibold text-[16px] py-2">
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
              <div className="text-center mt-3">
                <p className="font-bold text-[24px]">Request Payment</p>
                <p className="font-normal text-[16px] font-Aeonik">
                  Set payment amount and the <br />
                  customers scan to pay
                </p>
              </div>
            </div>

            <div className="">
              <div className="bg-[#12141D] text-center font-semibold text-[16px] py-2">
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

              <div className="text-center">
                <p className="font-bold text-[24px]">
                  Scan with Bold App to Pay
                </p>
                <p className="font-normal text-[16px] font-Aeonik">
                  A bar code is generated for you to
                  <br /> pay for your expenses
                </p>
              </div>
            </div>

            <div>
              <div className="bg-[#12141D] text-center font-inter font-semibold text-[16px] py-2">
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
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-16 bg-white">
        {/* Left Side: Security Flow */}
        <div className="flex flex-col items-center w-full md:w-1/2 space-y-6">
          {/* Passcode */}
          <div className="flex items-center justify-between w-full max-w-md bg-white shadow-md p-4 rounded-lg">
            <div className="flex items-center">
              <div className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full">
                <i className="fas fa-key"></i>
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-black">Passcode</h4>
                <p className="text-sm text-gray-500">
                  Login with your 6 digit code
                </p>
              </div>
            </div>
            <div className="bg-blue-500 w-4 h-4 rounded-full"></div>
          </div>

          {/* Switch through Preferred Security */}
          <div className="bg-blue-500 text-white text-center py-4 px-6 rounded-lg shadow-md w-full max-w-md">
            <h4 className="font-semibold">Switch through preferred Security</h4>
          </div>

          {/* Enable Biometrics */}
          <div className="flex items-center justify-between w-full max-w-md bg-white shadow-md p-4 rounded-lg">
            <div className="flex items-center">
              <div className="bg-gray-100 text-gray-800 w-10 h-10 flex items-center justify-center rounded-full">
                <i className="fas fa-fingerprint"></i>
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-black">Enable Biometrics</h4>
                <p className="text-sm text-gray-500">
                  Login with fingerprint or face ID
                </p>
              </div>
            </div>
            <label className="flex items-center">
              <input type="checkbox" className="toggle-checkbox hidden" />
              <div className="toggle-path bg-gray-200 rounded-full w-10 h-6"></div>
              <div className="toggle-circle absolute bg-white w-4 h-4 rounded-full shadow inset-y-0 left-0"></div>
            </label>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="mt-10 md:mt-0 w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Safe & Secure</h2>
          <p className="text-gray-600 mb-6">
            Nigeria's top mobile payments app. Instant bill payment, online
            shopping, money transfers, and more for a seamless digital
            experience.
          </p>
          <button className="border border-black text-black py-2 px-4 rounded-lg font-medium hover:bg-gray-100">
            Get Bold
          </button>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between bg-black text-white px-6 md:px-16 py-12">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Automate <br />
            the boring stuff
          </h1>
          <p className="text-3xl md:text-4xl font-semibold">
            Save 10 hours <br /> every week.
          </p>

          <button className="flex items-center justify-center gap-2 bg-white text-black py-3 px-6 rounded-full font-medium hover:bg-gray-200 transition duration-200">
            Download Bold App
            <span className="bg-black text-white p-2 rounded-full">
              <i className="fas fa-arrow-right"></i>
            </span>
          </button>

          <p className="text-sm text-gray-400">
            Make more money & save your team time by automating 80% of your
            repetitive sales, support, and admin tasks.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={IMAGES.TxQRCode}
            alt="Automate Task"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between bg-[#F8FAFC] text-white px-6 md:px-16 py-12">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#000000]">
            Trusted by more than 50k companies
          </h1>

          <p className="text-sm text-gray-400">
            Nigeria's top mobile payments app. Instant bill payment, online
            shopping, money transfers, and more for a seamless digital finance
            experience.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={IMAGES.TrustedComapnyLogos}
            alt="Automate Task"
            className="rounded-lg "
          />
        </div>
      </section>
    </div>
  );
};
