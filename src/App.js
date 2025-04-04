import TextCenteredBanner from "./component/common/bottom_banners/TextCenteredBanner";
import Footer from "./component/common/footer/Footer";
import FlexedTextImageHeroComp from "./component/common/hero_sections/FlexedTextImageHeroComp";
import { Header } from "./component/Header";
import FirstSection from "./component/ui_sections/home/FirstSection";
import SecondSection from "./component/ui_sections/home/SecondSection";
import ThirdSection from "./component/ui_sections/home/ThirdSection";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VirtualBankAccounts from "./pages/products/VirtualBankAccounts";
import BusinessManagement from "./pages/products/BusinessManagement";
import Loan from "./pages/products/Loan";
import PointOfSale from "./pages/products/PointOfSale";
import ScanAndPay from "./pages/products/ScanAndPay";
import Press from "./pages/company/Press";
import Career from "./pages/company/Career";
import Contact from "./pages/Contact";
import VirtualCard from "./pages/products/VirtualCard";
import AboutUs from "./pages/company/AboutUs";
import AppDownloadPage from "./pages/AppDownloadPage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/virtual-banks-accounts"
          element={<VirtualBankAccounts />}
        />
        <Route path="/Business-Management" element={<BusinessManagement />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/POS-Terminal" element={<PointOfSale />} />
        <Route path="/Scan-and-Pay" element={<ScanAndPay />} />
        <Route path="/Press" element={<Press />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={""} />
        <Route path="/virtual-cards" element={<VirtualCard />} />
        <Route path="/About-Us" element={<AboutUs />} />
        <Route path="/DownloadPage" element={<AppDownloadPage />} />
      </Routes>

      {/* <UroSectionOne /> */}
    </div>
  );
}

export default App;
