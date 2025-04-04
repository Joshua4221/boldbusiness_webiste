import { IMAGES } from "../Images";

export const DoubleChildScanAndPayArraySection = [
  {
    ImgScr: IMAGES.TopBeneficiaryImg,
    Title: "Keep an eye on top beneficiaries ",
    Description:
      "You can track all beneficiaries same way you do it on your normal bank transactions",
    Description2: "",
    innerContainerClass: "",
    textTitleClass: "",
    mainContainerClass: "bg-[#F8FAFC]",
  },
  {
    ImgScr: IMAGES.PaymentOrderImg,
    Title: "Convenient Payment Anytime, Anywhere",
    hasList: true,
    List: ["Instore Payment", "Online Payment"],
    Description: "",
    Description2: "",
    innerContainerClass: "flex-wrap-reverse lg:flex-row-reverse",
    textTitleClass: "2lg:w-[75%]",
    childOneContainer: "",
  },
  {
    ImgScr: IMAGES.AcceptPaymentImg,
    Title: "Accept Payment your way",
    Description:
      "With Bold Scan and Pay, you can offer more flexible, secure payment options to suit your business needs.",
    Description2:
      "Get it right, and you'll end up working smarter to get more done in less time. Drawing up a to-do list might not seem like a groundbreaking technique.",
    innerContainerClass: "",
    mainContainerClass: "bg-[#FAFAFA]",
  },
];
