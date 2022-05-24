import React from "react";
import { WiHumidity } from "react-icons/wi";
import {
  FaHourglassHalf,
  FaCheck,
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCcJcb,
  FaCcDiscover,
} from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdHeadsetMic } from "react-icons/md";
import { ImCross } from "react-icons/im";

const Heading = () => {
  return (
    <div className="container mx-auto md:-mt-80 bg-white w-full shadow-xl xl:p-24 lg:p-16 md:p-10 sm:p-8 p-6 rounded-xl">
      <div className="flex flex-col items-center">
        <h1 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold lg:mt-4 sm:mt-3 mt-2 text-gray-900 text-center">
          Get Pre-Sale Heading
        </h1>
        <article className="mt-5 text-gray-600 md:w-3/5 w-3/4 text-center xl:text-lg md:text-base text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text
        </article>
        <div className="mt-16 grid xl:grid-cols-3 lg:grid-cols-2  gap-10 container">
          <div className="flex items-start bg-secondaryGrayLight border border-cartImageBgOne p-5 rounded-lg">
            <div className="p-3 rounded-lg bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark">
              <WiHumidity className="w-6 h-6 text-white" />
            </div>
            <div className="ml-5">
              <h1 className="text-lg text-gray-900 font-semibold">
                90% Discount All
              </h1>
              <article className="text-gray-500 font-sm mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
              </article>
            </div>
          </div>
          <div className="flex items-start bg-secondaryGrayLight border border-cartImageBgOne p-5 rounded-lg">
            <div className="p-3 rounded-lg bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark">
              <MdHeadsetMic className="w-6 h-6 text-white" />
            </div>
            <div className="ml-5">
              <h1 className="text-lg text-gray-900 font-semibold">
                Life Time Support Access{" "}
              </h1>
              <article className="text-gray-500 font-sm mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
              </article>
            </div>
          </div>
          <div className="flex items-start bg-secondaryGrayLight border border-cartImageBgOne p-5 rounded-lg">
            <div className="p-3 rounded-lg bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark">
              <FaHourglassHalf className="w-6 h-6 text-white" />
            </div>
            <div className="ml-5">
              <h1 className="text-lg text-gray-900 font-semibold">
                Expected Delivery Dates
              </h1>
              <div className=" flex items-center">
                <div className="flex flex-col items-center mr-3">
                  <h3 className="text-xl font-bold text-gray-900">15</h3>
                  <h5 className="text-xxs text-gray-500">Days</h5>
                </div>
                <div className="text-4xl mr-3 pb-2.5">:</div>
                <div className="flex flex-col items-center mr-3">
                  <h3 className="text-xl font-bold text-gray-900">22</h3>
                  <h5 className="text-xxs text-gray-500">Hours</h5>
                </div>
                <div className="text-4xl mr-3 pb-2.5">:</div>
                <div className="flex flex-col items-center mr-3">
                  <h3 className="text-xl font-bold text-gray-900">48</h3>
                  <h5 className="text-xxs text-gray-500">Minutes</h5>
                </div>
                <div className="text-4xl mr-3 pb-2.5">:</div>
                <div className="flex flex-col items-center mr-3">
                  <h3 className="text-xl font-bold text-gray-900">36</h3>
                  <h5 className="text-xxs text-gray-500">Seconds</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-10 container mt-16">
          <HeadingNormalCart />
          <HeadingPlusCart />
          <HeadingExtendedCart />
        </div>
        <div className="grid sm:grid-cols-12 gap-12 mt-16 sm:p-8 border border-cartImageBgOne">
          <div className="xl:col-span-3 sm:col-span-4 ">
            <div className="w-60 h-60" />
          </div>
          <div className="xl:col-span-7 sm:col-span-8  px-4 sm:px-0">
            <h1 className="text-3xl font-bold text-gray-900">
              Our Refund Policy
            </h1>
            <article className="text-gray-500 text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting...
            </article>
            <span className="text-secondaryTemplateColorDark font-bold">
              Read More
            </span>
          </div>
          <div className="xl:col-span-2 sm:col-span-8 ">
            <h3 className="text-sm text-gray-900 px-4 sm:px-0">
              Our Payment Method
            </h3>
            <div className="flex xl:flex-col flex-row mt-5">
              <div className="flex items-center">
                <FaCcPaypal className="w-16 h-10 text-gray-500" />
                <FaCcVisa className="w-16 h-10 text-gray-500 " />
              </div>
              <div className="flex items-center xl:mt-3">
                <FaCcMastercard className="w-16 h-10 text-gray-500" />
                <SiAmericanexpress className="w-16 h-10 text-gray-500 " />
              </div>
              <div className="flex items-center xl:mt-3">
                <FaCcJcb className="w-16 h-10 text-gray-500" />
                <FaCcDiscover className="w-16 h-10 text-gray-500 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;

const HeadingNormalCart = () => {
  return (
    <div
      className="p-7 my-auto bg-secondaryGrayLight rounded-lg border border-cartImageBgOne"
      style={{ boxShadow: "inset 0px 8px 4px -4px #E9F0FB" }}
    >
      <h2 className="text-lg font-bold text-gray-900">Standard License</h2>
      <h5 className="text-gray-500 text-sm">Save $99</h5>
      <div className="flex items-end">
        <h3 className="text-4xl font-black text-secondaryTemplateColorDark mr-2">
          $69
        </h3>
        <h5 className="text-lg text-gray-500 pb-1.5 line-through">$149</h5>
      </div>
      <hr className="w-full text-secondaryGrayLighter mt-6 mb-7" />
      <div>
        <div className="flex items-center">
          <div className="bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark p-1.5 rounded-full">
            <FaCheck className="text-white w-2.5 h-2.5" />
          </div>
          <h3 className="text-base text-gray-700 ml-3">
            Free Installation Support
          </h3>
        </div>
        <div className="flex items-center mt-4">
          <div className="bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark p-1.5 rounded-full">
            <FaCheck className="text-white w-2.5 h-2.5" />
          </div>
          <h3 className="text-base text-gray-700 ml-3">
            Short Specification Here
          </h3>
        </div>
        <div className="flex items-center mt-4">
          <div className="bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark p-1.5 rounded-full">
            <FaCheck className="text-white w-2.5 h-2.5" />
          </div>
          <h3 className="text-base text-gray-700 ml-3">Modify the Code </h3>
        </div>
        <div className="flex items-center mt-4">
          <div className="bg-gradient-to-br bg-gray-400 p-1.5 rounded-full">
            <ImCross className="text-white w-2.5 h-2.5" />
          </div>
          <h3 className="text-base text-gray-700 ml-3">One Domain License</h3>
        </div>
        <div className="flex items-center mt-4">
          <div className="bg-gradient-to-br bg-gray-400 p-1.5 rounded-full">
            <ImCross className="text-white w-2.5 h-2.5" />
          </div>
          <h3 className="text-base text-gray-700 ml-3">Ticked Based Support</h3>
        </div>
        <div className="flex items-center mt-4">
          <div className="bg-gradient-to-br bg-gray-400 p-1.5 rounded-full">
            <ImCross className="text-white w-2.5 h-2.5" />
          </div>
          <h3 className="text-base text-gray-700 ml-3">
            Access to Design Source
          </h3>
        </div>
        <div className="flex items-center mt-4">
          <div className="bg-gradient-to-br bg-gray-400 p-1.5 rounded-full">
            <ImCross className="text-white w-2.5 h-2.5" />
          </div>
          <h3 className="text-base text-gray-700 ml-3">Custom Modification</h3>
        </div>
      </div>
      <button
        type="button"
        className="text-gray-100 text-base font-semibold bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark w-full py-4 rounded-lg mt-8 shadow-secondaryTemplate"
      >
        Buy Now
      </button>
      <div className="flex justify-center mt-7">
        <button
          type="button"
          className="text-gray-700 tex-base mx-auto flex items-center"
        >
          <span>See Details</span>{" "}
          <MdOutlineKeyboardArrowDown className="text-gray-700 ml-3" />
        </button>
      </div>
    </div>
  );
};

const HeadingPlusCart = () => {
  return (
    <div
      className="p-7 my-auto bg-secondaryGrayLight rounded-lg border border-cartImageBgOne"
      style={{ boxShadow: "inset 0px 8px 4px -4px #E9F0FB" }}
    >
      <h2 className="text-lg font-bold text-gray-900">Standard Plus License</h2>
      <h5 className="text-gray-500 text-sm">Save $100</h5>
      <div className="flex items-end">
        <h3 className="text-4xl font-black text-secondaryTemplateColorDark mr-2">
          $149
        </h3>
        <h5 className="text-lg text-gray-500 pb-1.5 line-through">$349</h5>
      </div>
      <hr className="w-full text-secondaryGrayLighter mt-6 mb-7" />
      <div>
        <div className="flex items-center">
          <div className="bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark p-1.5 rounded-full">
            <FaCheck className="text-white w-2.5 h-2.5" />
          </div>
          <h3 className="text-base text-gray-700 ml-3">
            Free Installation Support
          </h3>
        </div>
        <div className="flex items-center mt-4">
          <div className="bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark p-1.5 rounded-full">
            <FaCheck className="text-white w-2.5 h-2.5" />
          </div>
          <h3 className="text-base text-gray-700 ml-3">
            Short Specification Here
          </h3>
        </div>
        <div className="flex items-center mt-4">
          <div className="bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark p-1.5 rounded-full">
            <FaCheck className="text-white w-2.5 h-2.5" />
          </div>
          <h3 className="text-base text-gray-700 ml-3">Modify the Code </h3>
        </div>
        <div className="flex items-center mt-4">
          <div className="bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark p-1.5 rounded-full">
            <FaCheck className="text-white w-2.5 h-2.5" />
          </div>
          <h3 className="text-base text-gray-700 ml-3">One Domain License</h3>
        </div>
        <div className="flex items-center mt-4">
          <div className="bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark p-1.5 rounded-full">
            <FaCheck className="text-white w-2.5 h-2.5" />
          </div>
          <h3 className="text-base text-gray-700 ml-3">Ticked Based Support</h3>
        </div>
        <div className="flex items-center mt-4">
          <div className="bg-gradient-to-br bg-gray-400 p-1.5 rounded-full">
            <ImCross className="text-white w-2.5 h-2.5" />
          </div>
          <h3 className="text-base text-gray-700 ml-3">
            Access to Design Source
          </h3>
        </div>
        <div className="flex items-center mt-4">
          <div className="bg-gradient-to-br bg-gray-400 p-1.5 rounded-full">
            <ImCross className="text-white w-2.5 h-2.5" />
          </div>
          <h3 className="text-base text-gray-700 ml-3">Custom Modification</h3>
        </div>
      </div>
      <button
        type="button"
        className="text-gray-100 text-base font-semibold bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark w-full py-4 rounded-lg mt-8 shadow-secondaryTemplate"
      >
        Buy Now
      </button>
      <div className="flex justify-center mt-7">
        <button
          type="button"
          className="text-gray-700 tex-base mx-auto flex items-center"
        >
          <span>See Details</span>{" "}
          <MdOutlineKeyboardArrowDown className="text-gray-700 ml-3" />
        </button>
      </div>
    </div>
  );
};

const HeadingExtendedCart = () => {
  return (
    <div className="rounded-lg relative overflow-hidden bg-secondaryTemplateColorDark shadow-secondaryTemplate">
      <div
        className="w-80 -top-32 -left-40  z-10 absolute h-[36rem] bg-cart-bg"
        style={{ transform: "matrix(0.84, 0.47, -0.58, 0.86, 0, 0)" }}
      />
      <div
        className="w-80 -bottom-36 -right-44  z-10 absolute h-[36rem] bg-cart-bg-bottom"
        style={{ transform: "matrix(0.84, 0.47, -0.58, 0.86, 0, 0)" }}
      />
      <div className=" z-20 absolute bg-white top-5 right-5 text-secondaryTemplateColorDark text-sm py-2 px-3 shadow-md rounded-lg">
        Recommended
      </div>
      <div className="px-10 py-12 z-20 relative">
        <h2 className="text-lg font-bold text-gray-100 pt-px">
          Extended License
        </h2>
        <h5 className="text-gray-100 text-sm">Save $700</h5>
        <div className="flex items-end">
          <h3 className="text-4xl text-white font-black mr-2">$399</h3>
          <h5 className="text-lg text-gray-100 opacity-70 pb-1.5 line-through">
            $999
          </h5>
        </div>
        <hr className="w-full text-secondaryGrayLighter mt-6 mb-7 opacity-20" />
        <div>
          <div className="flex items-center">
            <div className="bg-gradient-to-br from-[#FFFFFF] to-[#81FFF7] p-1.5 rounded-full">
              <FaCheck className="text-secondaryTemplateColorDark w-2.5 h-2.5" />
            </div>
            <h3 className="text-base text-gray-100 ml-3">
              Free Installation Support
            </h3>
          </div>
          <div className="flex items-center mt-4">
            <div className="bg-gradient-to-br from-[#FFFFFF] to-[#81FFF7] p-1.5 rounded-full">
              <FaCheck className="text-secondaryTemplateColorDark w-2.5 h-2.5" />
            </div>
            <h3 className="text-base text-gray-100 ml-3">
              Short Specification Here
            </h3>
          </div>
          <div className="flex items-center mt-4">
            <div className="bg-gradient-to-br from-[#FFFFFF] to-[#81FFF7] p-1.5 rounded-full">
              <FaCheck className="text-secondaryTemplateColorDark w-2.5 h-2.5" />
            </div>
            <h3 className="text-base text-gray-100 ml-3">Modify the Code </h3>
          </div>
          <div className="flex items-center mt-4">
            <div className="bg-gradient-to-br from-[#FFFFFF] to-[#81FFF7] p-1.5 rounded-full">
              <FaCheck className="text-secondaryTemplateColorDark w-2.5 h-2.5" />
            </div>
            <h3 className="text-base text-gray-100 ml-3">One Domain License</h3>
          </div>
          <div className="flex items-center mt-4">
            <div className="bg-gradient-to-br from-[#FFFFFF] to-[#81FFF7] p-1.5 rounded-full">
              <FaCheck className="text-secondaryTemplateColorDark w-2.5 h-2.5" />
            </div>
            <h3 className="text-base text-gray-100 ml-3">
              Ticked Based Support
            </h3>
          </div>
          <div className="flex items-center mt-4">
            <div className="bg-gradient-to-br from-[#FFFFFF] to-[#81FFF7] p-1.5 rounded-full">
              <FaCheck className="text-secondaryTemplateColorDark w-2.5 h-2.5" />
            </div>
            <h3 className="text-base text-gray-100 ml-3">
              Access to Design Source
            </h3>
          </div>
          <div className="flex items-center mt-4">
            <div className="bg-gradient-to-br from-[#FFFFFF] to-[#81FFF7] p-1.5 rounded-full">
              <FaCheck className="text-secondaryTemplateColorDark w-2.5 h-2.5" />
            </div>
            <h3 className="text-base text-gray-100 ml-3">
              Custom Modification
            </h3>
          </div>
        </div>
        <button
          type="button"
          className="text-secondaryTemplateColorDark text-base font-semibold bg-white w-full py-4 rounded-lg mt-8 shadow-secondaryTemplate"
        >
          Buy Now
        </button>
        <div className="flex justify-center mt-7">
          <button
            type="button"
            className="text-gray-100 tex-base mx-auto flex items-center"
          >
            <span>See Details</span>{" "}
            <MdOutlineKeyboardArrowDown className="text-gray-100 ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
