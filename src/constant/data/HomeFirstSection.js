import { IMAGES } from "../Images";

export const DoubleChildContainerArray = [
  {
    imgSrc: IMAGES.FuturisticPaymentImg,
    title: "Futuristic Payment process Across the Africa",
    description:
      "Sales Performance is the effectiveness of the sales team, both individually and in selling activities; the ability to achieve sales goals.",
    description2: false,
    list: ["Request Payment", "Scan Device", "Enjoy Fast payment process"],
    hasList: true,
    innerContainerClass:
      "flex-wrap-reverse justify-between gap-[20px] lg:gap-0",
    mainContainerClass: "py-[100px]",
    hasBottomText: false,
    bottomText: "",
    LetterSpaceClass: "tracking-tighter",
    titleWidth: false,
  },
  {
    imgSrc: IMAGES.HumanSidePage,
    title: "Easy and Effective Business Management",
    titleWidth: "lg:w-[500px]",
    description:
      " It encompasses planning, organizing, leading, and controlling all aspects of a business, including its people, resources, and processes, to achieve the organization’s goals.",
    description2: false,
    list: [
      "Financial Management",
      "Risk Management",
      "Enjoy Bulk payment process",
    ],
    hasList: true,
    innerContainerClass:
      " flex-wrap-reverse lg:flex-row-reverse gap-[20px] lg:gap-0",
    mainContainerClass: "bg-[#F8FAFC] py-[100px]",
    hasBottomText: false,
    bottomText: "",
    LetterSpaceClass: false,
  },
  {
    imgSrc: IMAGES.RealCreditScoreImg,
    title: "Easy Loan Application and Fast Payment",
    description:
      "This approach ensures convenience for users, offering them a quick solution to their financial needs while maintaining transparency and security.",
    description2: "",
    hasList: false,
    innerContainerClass: " flex-wrap-reverse gap-[20px] lg:gap-0",
    mainContainerClass: "",
    hasBottomText: true,
    bottomText:
      "Get it right, and you'll end up working smarter to get more done in less time. Drawing up a to-do list might not seem like a groundbreaking technique.",
    bottomTextClass: "text-[#12141D] font-light",
    LetterSpaceClass: false,
    titleWidth: "lg:w-[500px]",
  },
];
