import Link from "next/link";
import React from "react";
import { IoChatbubbles } from "react-icons/io5";

const Hire = ({ colors, data }: { colors: any; data: any }) => {
  return (
    <div className="px-5 sm:px-0 2xl:py-28 xl:py-24 lg:py-20 md:py-16 py-14 ">
      <div
        className={`sm:bg-[url('/products/hire-bg.svg')] bg-no-repeat bg-cover ${colors.bgPrimary} container mx-auto xl:p-24 lg:p-20 md:p-16 sm:p-10 p-8  flex flex-col items-center justify-center rounded-lg`}
      >
        <h1 className="text-gray-100 font-bold 2xl:text-4xxl xl:text-4xl lg:text-3xl md:text-2xl text-xl xl:leading-12 lg:leading-10 md:leading-8 sm:leading-7 leading-6 pt-1 text-center">
          {data ? data.title : "Heading Title"}
        </h1>
        <article className="md:mt-6 mt-5 xl:text-xl lg:text-lg md:text-base text-sm text-gray-100 2xl:w-2/4 md:w-3/5 sm:w-2/3 w-full text-center">
          {data ? data.description : "Description"}
        </article>
        <Link href={data.buttonLink}>
          <a
            className={`text-base font-semibold drop-shadow-lg mt-16 ${colors.textPrimary} flex items-center bg-gray-100 py-4 px-6 rounded-lg`}
          >
            <IoChatbubbles className="mr-4 text-xl drop-shadow-xl" />{" "}
            {data.buttonText}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Hire;
