import React, { useState } from "react";
import { BsFillEmojiSmileFill, BsShieldFillCheck } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { BiDollar } from "react-icons/bi";
import treatment from "./../../../public/treatment.svg";
import Image from "next/image";

const ChooseUs = () => {
  const sample = [1, 2, 3];
  const [boxShadowOne, setBoxShadowOne] = useState("");
  const [boxShadowTwo, setBoxShadowTwo] = useState("");
  const [boxShadowThree, setBoxShadowThree] = useState("");
  const [boxShadowFour, setBoxShadowFour] = useState("");
  const [boxShadowFive, setBoxShadowFive] = useState("");
  const [boxShadowSix, setBoxShadowSix] = useState("");
  const handleMouseOverOne = () => {
    setBoxShadowOne("");
  };
  const handleMouseOutOne = () => {
    setBoxShadowOne("inset 0px 8px 4px -4px #E9F0FB");
  };
  const handleMouseOverTwo = () => {
    setBoxShadowTwo("");
  };
  const handleMouseOutTwo = () => {
    setBoxShadowTwo("inset 0px 8px 4px -4px #E9F0FB");
  };
  const handleMouseOverThree = () => {
    setBoxShadowThree("");
  };
  const handleMouseOutThree = () => {
    setBoxShadowThree("inset 0px 8px 4px -4px #E9F0FB");
  };
  const handleMouseOverFour = () => {
    setBoxShadowFour("");
  };
  const handleMouseOutFour = () => {
    setBoxShadowFour("inset 0px 8px 4px -4px #E9F0FB");
  };
  const handleMouseOverFive = () => {
    setBoxShadowFive("");
  };
  const handleMouseOutFive = () => {
    setBoxShadowFive("inset 0px 8px 4px -4px #E9F0FB");
  };
  const handleMouseOverSix = () => {
    setBoxShadowSix("");
  };
  const handleMouseOutSix = () => {
    setBoxShadowSix("inset 0px 8px 4px -4px #E9F0FB");
  };
  return (
    <div className="container mx-auto relative z-0">
      <div className="xl:py-24 sm:py-16 py-14 flex flex-col items-center justify-center">
        <h5 className="xl:text-base md:text-sm text-xs text-secondary">
          Features
        </h5>
        <h1 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold lg:mt-4 sm:mt-3 mt-2 text-gray-900">
          Why Choose Us ?
        </h1>
        <article className="mt-5 text-gray-600 max-w-2xl w-11/12 text-center xl:text-lg md:text-base text-sm">
          Our main focuses on providing every customer the best support for
          their respective business. We make sure our customer is always happy.
        </article>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-11 container mx-auto xl:my-16 md:mt-12 mt-8 px-5 lg:px-28 sm:px-16">
          <div
            className="bg-backgroundGrayOne cursor-pointer p-10 rounded-lg flex flex-col items-center justify-center hover:bg-white hover:drop-shadow-xl ease-in duration-200"
            style={{ boxShadow: `${boxShadowOne}` }}
            onMouseOver={handleMouseOverOne}
            onMouseOut={handleMouseOutOne}
          >
            <div className="p-5 rounded-md bg-gradient-to-br from-blueOne to-blueTwo shadow-3xl">
              <FaUsers
                style={{ color: "white", width: "30px", height: "30px" }}
              />
            </div>
            <h5 className="text-xl font-bold mt-7 text-gray-900 text-center">
              Dedicated Teams
            </h5>
            <article className="text-lg text-gray-600 mt-4 text-center">
              Our dedicated team help you all the way you need to build your web
              app
            </article>
          </div>

          <div
            className="bg-backgroundGrayOne cursor-pointer p-10 rounded-lg flex flex-col items-center justify-center  hover:bg-white hover:drop-shadow-xl ease-in duration-200"
            style={{ boxShadow: `${boxShadowTwo}` }}
            onMouseOver={handleMouseOverTwo}
            onMouseOut={handleMouseOutTwo}
          >
            <div className="p-5 rounded-md bg-gradient-to-br from-orangeOne to-orangeTwo shadow-4xl">
              <BsFillEmojiSmileFill
                style={{ color: "white", width: "30px", height: "30px" }}
              />
            </div>
            <h5 className="text-xl font-bold mt-7 text-gray-900 text-center">
              Highly Rated Support
            </h5>
            <article className="text-lg text-gray-600 mt-4 text-center">
              You`ll love our support. We always there to help you
            </article>
          </div>
          <div
            className="bg-backgroundGrayOne cursor-pointer p-10 rounded-lg flex flex-col items-center justify-center  hover:bg-white hover:drop-shadow-xl ease-in duration-200"
            style={{ boxShadow: `${boxShadowThree}` }}
            onMouseOver={handleMouseOverThree}
            onMouseOut={handleMouseOutThree}
          >
            <div className="p-5 rounded-md bg-gradient-to-br from-purpleLight to-purpleDark shadow-purple">
              <BsShieldFillCheck
                style={{ color: "white", width: "30px", height: "30px" }}
              />
            </div>
            <h5 className="text-xl font-bold mt-7 text-gray-900 text-center">
              Secure and Scaleable
            </h5>
            <article className="text-lg text-gray-600 mt-4 text-center">
              Our solution is secured and scaleable as you need
            </article>
          </div>
          <div
            className="bg-backgroundGrayOne cursor-pointer p-10 rounded-lg flex flex-col items-center justify-center  hover:bg-white hover:drop-shadow-xl ease-in duration-200"
            style={{ boxShadow: `${boxShadowFour}` }}
            onMouseOver={handleMouseOverFour}
            onMouseOut={handleMouseOutFour}
          >
            <div className="p-5 rounded-md bg-gradient-to-br from-greenLight to-greenDark shadow-green">
              <DiJavascript1
                style={{ color: "white", width: "30px", height: "30px" }}
              />
            </div>
            <h5 className="text-xl font-bold mt-7 text-gray-900 text-center">
              High-Performance
            </h5>
            <article className="text-lg text-gray-600 mt-4 text-center">
              We make sure your web app will lightning fast on loading.
            </article>
          </div>
          <div
            className="bg-backgroundGrayOne cursor-pointer p-10 rounded-lg flex flex-col items-center justify-center  hover:bg-white hover:drop-shadow-xl ease-in duration-200"
            style={{ boxShadow: `${boxShadowFive}` }}
            onMouseOver={handleMouseOverFive}
            onMouseOut={handleMouseOutFive}
          >
            <div className="p-5 rounded-md bg-gradient-to-br from-yellowLight to-yellowDark shadow-yellow">
              <Image src={treatment} alt="treatment" />
            </div>
            <h5 className="text-xl font-bold mt-7 text-gray-900 text-center">
              Mobile Friendly
            </h5>
            <article className="text-lg text-gray-600 mt-4 text-center">
              Our solutions developed on MERN Stack are responsive and hence can
              be accessed on any device across the globe.
            </article>
          </div>
          <div
            className="bg-backgroundGrayOne cursor-pointer p-10 rounded-lg flex flex-col items-center justify-center  hover:bg-white hover:drop-shadow-xl ease-in duration-200"
            style={{ boxShadow: `${boxShadowSix}` }}
            onMouseOver={handleMouseOverSix}
            onMouseOut={handleMouseOutSix}
          >
            <div className="p-5 rounded-md bg-gradient-to-br from-redLight to-redDark shadow-red">
              <BiDollar
                style={{ color: "white", width: "30px", height: "30px" }}
              />
            </div>
            <h5 className="text-xl font-bold mt-7 text-gray-900 text-center">
              High Quality & Availability
            </h5>
            <article className="text-lg text-gray-600 mt-4 text-center">
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
