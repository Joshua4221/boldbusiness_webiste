import React from "react";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import LightText from "../../widgets/text_elements/LightText";
import { IMAGES } from "../../../constant/Images";
import { useState } from "react";

const miniNavBar = [
  {
    Role: "All",
    Icon: IMAGES.AllIcon1,
  },

  {
    Role: "UI Designer",
    Icon: IMAGES.UIDesignerIcon,
  },
  {
    Role: "Project Manager",
    Icon: IMAGES.ProjectManagerIcon,
  },
  {
    Role: "Designer",
    Icon: IMAGES.DesignerIcon,
  },
  {
    Role: "Accountant",
    Icon: IMAGES.AccountantIcon,
  },
  {
    Role: "Human Resources",
    Icon: IMAGES.HumanResourcesIcon,
  },
  {
    Role: "Marketing",
    Icon: IMAGES.MarketingIcon,
  },
];

const Jobs = [
  {
    id: 1,
    imgsrc: IMAGES.boldMiniLogoIcon,
    title: "Frontend Developer",
    type: "Fulltime",
    date: "3 days ago",
    skills: ["Gimp", "Wordpress"],
  },
  {
    id: 1,
    imgsrc: IMAGES.boldMiniLogoIcon,
    title: "Frontend Developer",
    type: "Fulltime",
    date: "3 days ago",
    skills: ["Elementor", "Wix", "Illustrator"],
  },
  {
    id: 1,
    imgsrc: IMAGES.boldMiniLogoIcon,
    title: "Frontend Developer",
    type: "Fulltime",
    date: "3 days ago",
    skills: ["Figma", "Elementor", "Wordpress"],
  },
  {
    id: 1,
    imgsrc: IMAGES.boldMiniLogoIcon,
    title: "Frontend Developer",
    type: "Fulltime",
    date: "3 days ago",
    skills: ["Wordpress", "Wix", "Illustrator"],
  },
  {
    id: 1,
    imgsrc: IMAGES.boldMiniLogoIcon,
    title: "Frontend Developer",
    type: "Fulltime",
    date: "3 days ago",
    skills: ["Gimp", "Wordpress"],
  },
  {
    id: 1,
    imgsrc: IMAGES.boldMiniLogoIcon,
    title: "Frontend Developer",
    type: "Fulltime",
    date: "3 days ago",
    skills: ["Gimp", "Wordpress"],
  },
  {
    id: 1,
    imgsrc: IMAGES.boldMiniLogoIcon,
    title: "Frontend Developer",
    type: "Fulltime",
    date: "3 days ago",
    skills: ["Gimp", "Wordpress"],
  },
  {
    id: 1,
    imgsrc: IMAGES.boldMiniLogoIcon,
    title: "Frontend Developer",
    type: "Fulltime",
    date: "3 days ago",
    skills: ["Gimp", "Wordpress"],
  },
];

const DiscorverEmergingMasterSectio = () => {
  const [minNavBar, setMiniNavBar] = useState();

  return (
    <div>
      <div className=" container">
        {/* headlines */}
        <div className="flex flex-col justify-center items-center">
          <TextTitleDescription
            title="Discover the Emerging Masters"
            titleClass={
              "2lg:text-[35px] 2lg:w-[65%] text-[22px] w-[70%] text-center  mx-auto"
            }
            description=""
          />
          <LightText
            text="Find the best master for your company and boosts your business 10x!"
            classStyle={"mx-auto text-center w-[75%]"}
          />
        </div>
        {
          <div className="flex justify-center flex-wrap  py-3 mb-5">
            {miniNavBar.map((roles, index) => (
              <div
                key={index}
                className="flex px-6 border-b-[1px] border-[#C6CAD1] pb-2"
              >
                <img src={roles.Icon} />
                <LightText text={roles.Role} classStyle={"text-[#6C7787]"} />
              </div>
            ))}
          </div>
        }

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {Jobs.map((eachJob, index) => (
            <div
              key={eachJob.id}
              className={`p-6 rounded-lg shadow-lg border transition`}
            >
              <img
                src={eachJob.imgsrc}
                alt="Company Logo"
                className="mx-auto mb-2 w-12 h-12"
              />

              <p className="text-sm text-gray-500 text-center">
                {eachJob.type}
              </p>

              <h2 className="text-lg font-semibold text-center">
                {eachJob.title}
              </h2>

              <p className="text-sm text-gray-400 text-center">
                {eachJob.date}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {eachJob.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs bg-gray-200 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscorverEmergingMasterSectio;
