import React from "react";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import Header from "../src/Sections/ProductSinglePage2/Header";
import Products from "../src/Sections/ProductSinglePage2/Products";
import RelatedProduct from "../src/Sections/ProductSinglePage2/RelatedProduct";
import Testimonials from "../src/Sections/ProductSinglePage2/Testimonials";

const ProductSinglePage2 = () => {
  return (
    <div className="bg-[#E5E5E5]">
      <div className='lg:bg-[url("/productSingle2HeaderBg.svg")] bg-blueTwo'>
        <Navbar.SingleProductNavbar />
        <Header data={undefined} />
      </div>
      <Products info={undefined} colors={undefined}>
        <div>Demo</div>
      </Products>
      {/* <RelatedProduct /> */}
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

export default ProductSinglePage2;
