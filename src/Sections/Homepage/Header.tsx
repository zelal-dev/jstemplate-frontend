import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { HiArchive } from "react-icons/hi";

const Header = () => {
  return (
    <div className="z-0 xl:py-32 lg:py-28 md:py-24 sm:py-20 py-16 flex flex-col justify-center items-center">
      <div className=" flex flex-col justify-center items-center xl:leading-16 md:leading-10 sm:leading-8">
        <h1 className="2xl:text-5xxl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold">
          Buy Our Ready-Made Web Solution
        </h1>
        <h1 className="2xl:text-5xxl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold">
          Grow Your Business Faster
        </h1>
      </div>
      <article className="max-w-3xl w-11/12 text-gray-600 xl:mt-6 md:mt-5 mt-3 text-center 2xl:text-xl lg:text-lg sm:text-base text-sm">
        MERN Stack Theme, Landing page and dashboard template, Headless CMS
        template built on best teck stack-
        <span className="bold text-black">
          Node.js, MongoDB, React.js, Next.js, Tailwind CSS
        </span>
      </article>
      <div className="flex sm:flex-row flex-col items-center xl:mt-12 lg:mt-10 md:mt-9 sm:mt-8 mt-7 ">
        <Link href="/shop">
          <a className="flex sm:w-auto w-full items-center xl:text-lg text-base xl:py-4 md:py-3 xl:px-6 md:px-5 py-3 px-3 rounded-lg bg-gradient-to-br from-blueOne to-blueTwo sm:mr-6 mr-0 shadow-3xl">
            <FaShoppingCart
              style={{ color: "white", width: "18px", height: "18px" }}
            />
            <span className="md:ml-4 ml-3 text-white">Our Solution</span>{" "}
          </a>
        </Link>
        {/* Pre Seal Button Hidden */}
        <Link href="/contact-us">
          <a className="flex sm:w-auto w-full items-center xl:text-lg text-base xl:py-4 md:py-3 xl:px-6 md:px-5 py-3 px-3 rounded-lg bg-gradient-to-br from-orangeOne to-orangeTwo  sm:mt-0 mt-3 shadow-4xl">
            <HiArchive
              style={{ color: "white", width: "18px", height: "18px" }}
            />
            <span className="md:ml-4 ml-3 text-white">Hire Us</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
