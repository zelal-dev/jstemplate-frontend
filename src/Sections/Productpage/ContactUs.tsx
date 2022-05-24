import React from "react";
import contactusBg from "./../../../public/contactusBg.svg";
const ContactUs = () => {
  return (
    <div className="px-5 sm:px-0 2xl:py-28 xl:py-24 lg:py-20 md:py-16 py-14 ">
      <div
        style={{ backgroundImage: `url(${contactusBg})` }}
        className="prod-contact-part container mx-auto xl:p-24 lg:p-20 md:p-16 sm:p-10 p-8  flex flex-col items-center justify-center rounded-lg "
      >
        <h1 className="text-gray-100 font-bold 2xl:text-4xxl xl:text-4xl lg:text-3xl md:text-2xl text-xl xl:leading-12 lg:leading-10 md:leading-8 sm:leading-7 leading-6 pt-1 text-center">
          Simple Call To Action Heading Text
        </h1>
        <article className="md:mt-6 mt-5 xl:text-xl lg:text-lg md:text-base text-sm text-gray-100 2xl:w-2/4 md:w-3/5 sm:w-2/3 w-full text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text
        </article>
        <button
          type="button"
          className="py-4 px-8 font-semibold text-blueTwo bg-gray-100 rounded-md text-base lg:mt-10 sm:mt-9 mt-8"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactUs;

// style={{backgroundImage:`url${contactusBg}`}}
