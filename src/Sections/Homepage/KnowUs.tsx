import Image from "next/image";
import React from "react";
import cart from "./../../../public/cart.svg";
import downloads from "./../../../public/downloads.svg";
import happy from "./../../../public/happy.svg";
import rocket from "./../../../public/rocket.svg";

const KnowUs = () => {
  return (
    <div>
      <div className="container mx-auto relative z-0">
        <div className="bg-white rounded-ld xl:py-20 sm:py-16 py-14 flex flex-col items-center justify-center drop-shadow-xl rounded-xl">
          <h5 className="xl:text-base md:text-sm text-xs text-secondary">
            Statistics
          </h5>
          <h1 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold lg:mt-4 sm:mt-3 mt-2 text-gray-900">
            Get To Know Us
          </h1>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 xl:gap-10 lg:gap-8 md:gap-7 sm:gap-6 gap-5 2xl:mt-14 xl:mt-12 lg:mt-10 md:mt-9 sm:mt-8 mt-7">
            <div
              className="bg-backgroundGrayOne 2xl:py-12 xl:py-10 lg:py-8 md:py-7 sm:py-6 py-5 2xl:px-16 xl:px-14 lg:px-12 md:px-10 sm:px-9 px-8 flex flex-col items-center justify-center rounded-lg hover:scale-105 duration-300 cursor-pointer"
              style={{ boxShadow: "inset 0px 8px 4px -4px #E9F0FB" }}
            >
              <div className=" xl:px-5 md:px-4 px-3 xl:pt-5 xl:pb-2 md:pt-4 md:pb-2  pt-3 pb-1 shadow-lg rounded-lg bg-white">
                <div className="w-6 h-6 md:w-9 md:h-8 xl:w-12 xl:h-11">
                  <Image src={happy} alt="happy-icon" />
                </div>
              </div>
              <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold xl:mt-7 lg:mt-6 md:mt-5 mt-4">
                4321+
              </h1>
              <h4 className="xl:text-base md:text-sm text-xs text-gray-700 sm:mt-1 mt-0.5">
                Happy Customer
              </h4>
            </div>
            <div
              className="2xl:py-12 xl:py-10 lg:py-8 md:py-7 sm:py-6 py-5 2xl:px-16 xl:px-14 lg:px-12 md:px-10 sm:px-9 px-8 flex flex-col items-center justify-center border rounded-lg  hover:scale-105 duration-300 cursor-pointer"
              style={{ boxShadow: "inset 0px 8px 4px -4px #E9F0FB" }}
            >
              <div className=" xl:px-5 md:px-4 px-3 xl:pt-5 xl:pb-2 md:pt-4 md:pb-2  pt-3 pb-1 shadow-lg rounded-lg bg-white">
                <div className="w-6 h-6 md:w-9 md:h-8 xl:w-12 xl:h-11">
                  <Image src={downloads} alt="happy-icon" />
                </div>
              </div>
              <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold xl:mt-7 lg:mt-6 md:mt-5 mt-4">
                12345+
              </h1>
              <h4 className="xl:text-base md:text-sm text-xs text-gray-700 sm:mt-1 mt-0.5">
                Downloads
              </h4>
            </div>
            <div
              className="bg-backgroundGrayOne 2xl:py-12 xl:py-10 lg:py-8 md:py-7 sm:py-6 py-5 2xl:px-16 xl:px-14 lg:px-12 md:px-10 sm:px-9 px-8 flex flex-col items-center justify-center  rounded-lg hover:scale-105 duration-300 cursor-pointer"
              style={{ boxShadow: "inset 0px 8px 4px -4px #E9F0FB" }}
            >
              <div className=" xl:px-5 md:px-4 px-3 xl:pt-5 xl:pb-2 md:pt-4 md:pb-2  pt-3 pb-1 shadow-lg rounded-lg bg-white">
                <div className="w-6 h-6 md:w-9 md:h-8 xl:w-12 xl:h-11">
                  <Image src={rocket} alt="happy-icon" />
                </div>
              </div>
              <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold xl:mt-7 lg:mt-6 md:mt-5 mt-4">
                10+
              </h1>
              <h4 className="xl:text-base md:text-sm text-xs text-gray-700 sm:mt-1 mt-0.5">
                Ready Solution
              </h4>
            </div>
            <div
              className="2xl:py-12 xl:py-10 lg:py-8 md:py-7 sm:py-6 py-5 2xl:px-16 xl:px-14 lg:px-12 md:px-10 sm:px-9 px-8 flex flex-col items-center justify-center border rounded-lg hover:scale-105 duration-300 cursor-pointer"
              style={{ boxShadow: "inset 0px 8px 4px -4px #E9F0FB" }}
            >
              <div className=" xl:px-5 md:px-4 px-3 xl:pt-5 xl:pb-2 md:pt-4 md:pb-2  pt-3 pb-1 shadow-lg rounded-lg bg-white">
                <div className="w-6 h-6 md:w-9 md:h-8 xl:w-12 xl:h-11">
                  <Image src={cart} alt="happy-icon" />
                </div>
              </div>
              <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold xl:mt-7 lg:mt-6 md:mt-5 mt-4">
                1234+
              </h1>
              <h4 className="xl:text-base md:text-sm text-xs text-gray-700 sm:mt-1 mt-0.5">
                Pre-Sale Solution
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowUs;
