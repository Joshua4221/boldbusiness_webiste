import { IMAGES } from "../Images";

export const NavData = [
  {
    navLayer: [
      { logo: true, logoType: "white", link: "#" },
      {
        logo: false,
        textType: "normal_text",
        text: "Personal",
        link: "#",
        onMobile: false,
      },
      { logo: false, textType: "bg_text", text: "Business", onMobile: false },
    ],
    button: false,
  },
  {
    navLayer: [
      {
        logo: false,
        textType: "drop_down_text",
        text: "Products",
        dropdown: [
          {
            titleType: true,
            title: "Virtual Banking",
            content: [
              {
                icon: IMAGES.VirtualBankIcon,
                text: "Virtual Bank Accounts",
                link: "/virtual-banks-accounts",
              },
              {
                icon: IMAGES.VitualCardIcon,
                text: "Virtual Cards",
                link: "/virtual-cards",
              },
            ],
          },
          {
            titleType: true,
            title: "Your Business",
            content: [
              { icon: IMAGES.LoanIcon, text: "Loan", link: "/loan" },
              {
                icon: IMAGES.BusinessManagementIcon,
                text: "Business Management",
                link: "/Business-Management",
              },
            ],
          },
          {
            titleType: true,
            title: "Managements and Reports",
            content: [
              { icon: IMAGES.TerminalIcon, text: "POS Terminal" },
              {
                icon: IMAGES.ScanPayIcon,
                text: "Scan and Pay",
              },
            ],
          },
        ],
        onMobile: true,
      },
      {
        logo: false,
        textType: "drop_down_text",
        text: "Company",
        dropdown: [
          {
            titleType: false,
            content: [
              { icon: IMAGES.AboutUsIcon, text: "About Us" },
              {
                icon: IMAGES.CareerIcon,
                text: "Career",
              },
              {
                icon: IMAGES.PressIcon,
                text: "Press",
              },
            ],
          },
        ],
        onMobile: true,
      },
      { logo: false, textType: "normal_text", text: "Contact", onMobile: true },
      { logo: false, textType: "normal_text", text: "Blog", onMobile: true },
    ],
    button: false,
  },
  { button: true, onMobile: true },
];
