import React from "react";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import Testimonials from "../src/Sections/Homepage/Testimonials";
import Benefits from "../src/Sections/PreSalePage/Benefits";
import Header from "../src/Sections/PreSalePage/Header";
import Hire from "../src/Sections/PreSalePage/Hire";
import MangeWebsite from "../src/Sections/PreSalePage/ManageWebsite";
import Timeline from "../src/Sections/PreSalePage/Timeline";
import Question from "../src/Sections/Servicepage/Question";

// page primary colors
const colors = {
  textPrimary: "text-[#250dae]",
  bgPrimary: "bg-[#250dae]",
  buttonPrimary: "bg-gradient-to-br from-[#250dae] to-[#472ce0]",
};

const ProductSinglePage = () => {
  return (
    <div>
      <div className="single-product-header-part">
        <Navbar.SingleProductNavbar />
        <Header />
      </div>
      <MangeWebsite colors={colors} data={undefined} />
      <Timeline />
      <Benefits />
      <Hire colors={colors} />
      {/* <Question /> */}
      <Testimonials />
      <Footer
        boxToColor="secondaryTemplateColorDark"
        boxFromColor="secondaryTemplateColorLight"
        shadowBox="secondaryTemplate"
        buttonToColor="secondaryTemplateColorDark"
        buttonFromColor="secondaryTemplateColorLight"
        shadowButton="secondaryTemplate"
      />
    </div>
  );
};

export default ProductSinglePage;
