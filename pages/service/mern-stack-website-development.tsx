import React from "react";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import Testimonials from "../../src/Sections/Homepage/Testimonials";
import ChooseUs from "../../src/Sections/Servicepage/ChooseUs";
import Get from "../../src/Sections/Servicepage/Get";
import Header from "../../src/Sections/Servicepage/Header";
import Heading from "../../src/Sections/Servicepage/Heading";
import Hire from "../../src/Sections/Servicepage/Hire";
import Products from "../../src/Sections/Servicepage/Products";
import Promise from "../../src/Sections/Servicepage/Promise";
import Question from "../../src/Sections/Servicepage/Question";
import Works from "../../src/Sections/Servicepage/Works";

// page primary colors
const colors = {
  textPrimary: "text-[#250dae]",
  bgPrimary: "bg-[#250dae]",
  borderPrimary: "border-[#d2cbfc]",
  hoverBorderPrimary: "hover:border-[#250dae]",
  buttonPrimary: "bg-gradient-to-br from-[#250dae] to-[#472ce0]",
};

// page components data
const data = {
  whyChooseUs: {},
  productFeature: {},
  howItWork: {},
  whatYouGet: {},
  startProject: {},
};

const ServicePage = () => {
  return (
    <div className="">
      <div
        className={`sm:bg-[url('/serviceHeadBg.svg')] bg-no-repeat bg-cover ${colors.bgPrimary}`}
      >
        <Navbar.ServiceNavbar />
        <Header colors={colors} />
      </div>
      <ChooseUs colors={colors} />
      <Heading colors={colors} />
      <Works colors={colors} />
      <Promise colors={colors} />
      <Get colors={colors} />
      {/* <Products /> */}
      {/* <Question /> */}
      <Hire colors={colors} />
      <Testimonials />
      <Footer
        boxToColor="greenDark"
        boxFromColor="greenLight"
        shadowBox="green"
        buttonToColor="greenDark"
        buttonFromColor="greenLight"
        shadowButton="green"
      />
    </div>
  );
};

export default ServicePage;
