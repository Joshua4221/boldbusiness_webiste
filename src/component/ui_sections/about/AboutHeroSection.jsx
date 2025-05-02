import React, { useState } from "react";
import { IMAGES } from "../../../constant/Images";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Data Scientist", image: IMAGES.DataScientetistIMG },
  { name: "Full-Stack Developer", image: IMAGES.FullStackDevIMG },
  { name: "UX/UI Designer", image: IMAGES.UXDesignerIMG },
  { name: "Project Manager", image: IMAGES.ProjectManagerIMG },
  { name: "ML Engineer", image: IMAGES.MLEngineerIMG },
  { name: "iOS Developer", image: IMAGES.IOSDeveloperIMG },
];

const AboutHeroSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center py-10  bg-white ">
      <div className="relative h-60 w-full max-w-6xl mx-auto hidden md:block">
        <div className="absolute inset-0 flex justify-center items-end gap-2 md:gap-4">
          {teamMembers.map((member, index) => {
            const angle = (index - (teamMembers.length - 1) / 2) * 15;
            const translateY = Math.abs(angle) * 2.5;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative w-28 h-40 md:w-32 md:h-48 rounded-xl overflow-hidden shadow-md cursor-pointer"
                initial={{ scale: 1, y: 0, zIndex: 0 }}
                animate={{
                  scale: isHovered ? 1.3 : 1,
                  y: isHovered ? -30 : translateY,
                  zIndex: isHovered ? 50 : index,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <div
                  className="absolute inset-0"
                  style={{ transform: `rotate(${-angle}deg)` }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 w-full text-center text-white font-semibold bg-black/40 backdrop-blur-sm">
                    {member.name}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
