import { MiniThreeChildContainersArray } from "../../../constant/data/MiniThreeChildContainerArray";
import MiniThreeChildContainers from "../../common/containers/MiniThreeChildContainers";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";

export const TripleMiniSection = ({
  mainMiniTripleChildContainer,
  innerMiniTripleContainer,
  TripleChildContainer,
  titleClassStyle = "text-[white]",
  textDescriptionClassStyle = "text-[white]",
}) => {
  return (
    <div className={`bg-[#0F172A] p-8 ${mainMiniTripleChildContainer}`}>
      <div
        className={`container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12 ${innerMiniTripleContainer}`}
      >
        {MiniThreeChildContainersArray.map((stats, index) => (
          <div
            key={index}
            className={`text-center text-white ${TripleChildContainer}`}
          >
            <TextTitleDescription
              title={stats.title}
              description={stats.descrriptionText}
              titleClass={titleClassStyle}
              textDescriptionClass={textDescriptionClassStyle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
