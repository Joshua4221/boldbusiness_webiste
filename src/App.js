import TextCenteredBanner from "./component/common/bottom_banners/TextCenteredBanner";
import Footer from "./component/common/footer/Footer";
import FlexedTextImageHeroComp from "./component/common/hero_sections/FlexedTextImageHeroComp";
import { Header } from "./component/Header";
import FirstSection from "./component/ui_sections/home/FirstSection";
import SecondSection from "./component/ui_sections/home/SecondSection";
import ThirdSection from "./component/ui_sections/home/ThirdSection";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <FlexedTextImageHeroComp />
              <FirstSection />
              <SecondSection />
              <ThirdSection />
              <TextCenteredBanner />
              <Footer />
            </>
          }
        />
      </Routes>

      {/* <UroSectionOne /> */}
    </div>
  );
}

export default App;
