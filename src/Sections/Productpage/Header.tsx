import React from "react";
import { FaSmile } from "react-icons/fa";

const Header = () => {
  return (
    <div className="md:py-20 py-16 px-14 flex flex-col items-center justify-center">
      <h1 className="2xl:text-4xxl xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold xl:leading-12 lg:leading-10 md:leading-9 sm:leading-8 leading-7 text-gray-900 text-center">
        Our Ready-Made Web Solution
      </h1>
      <article className="xl:text-lg md:text-base text-sm text-gray-600 md:w-2/5 sm:w-2/4 w-full  xl:mt-6 md:mt-4 mt-3 text-center">
        Top of Tailwind CSS, React.js, Next.js, Mongodb, Node.js, Express.js,
        Typescript themes and templates
      </article>
      <div className="p-5 rounded-xl bg-white flex items-center shadow-grayLight xl:mt-12 lg:mt-11 md:mt-10 sm:mt-9 mt-8">
        <div className="md:p-3 p-2 rounded-md bg-gradient-to-br from-blueOne to-blueTwo xl:mr-6 md:mr-5 mr-4  shadow-xl">
          <FaSmile className="xl:w-8 xl:h-8 md:w-7 md:h-7 w-6 h-6 text-white" />
        </div>
        <p className="xl:text-xl lg:text-lg md:text-base text-sm font-bold text-gray-600">
          <span className="text-blueTwo">12,345</span> People Appreciated Our
          Products
        </p>
      </div>
    </div>
  );
};

export default Header;
