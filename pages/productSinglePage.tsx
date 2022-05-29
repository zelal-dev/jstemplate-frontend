import React from "react";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import Testimonials from "../src/Sections/Homepage/Testimonials";
import Header from "../src/Sections/ProductSinglePage/Header";
import Heading from "../src/Sections/ProductSinglePage/Heading";
import SimpleTitleFirst from "../src/Sections/ProductSinglePage/SimpleTitleFirst";
import SimpleTitleSecond from "../src/Sections/ProductSinglePage/SimpleTitleSecond";
import SimpleTitleThird from "../src/Sections/ProductSinglePage/SimpleTitleThird";
import Hire from "../src/Sections/PreSalePage/Hire";
import MangeWebsite from "../src/Sections/PreSalePage/ManageWebsite";
import Question from "../src/Sections/Servicepage/Question";

const PreSalePage = () => {
  return (
    <div>
      <div className="sm:bg-[url('/productSingleHeaderBg.svg')] bg-no-repeat bg-secondaryTemplateColorDark">
        <Navbar.SingleProductNavbar />
        <Header data={undefined} icons={undefined} />
      </div>
      {/* <MangeWebsite /> */}
      {/* <SimpleTitleFirst />
        <SimpleTitleSecond /> */}
      {/* <SimpleTitleThird /> */}
      {/* <Heading /> */}
      {/* <Hire /> */}
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

export default PreSalePage;
