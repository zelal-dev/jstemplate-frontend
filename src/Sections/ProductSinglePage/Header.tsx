import React from "react";
import Link from "next/link";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const Header = (props: any) => {
  const { data, icons, colors, livePreview } = props;
  return (
    <div className=" flex flex-col items-center xl:pt-36 lg:pt-32 md:pt-24 sm:pt-20 pt-16 lg:pb-[21rem] sm:pb-72 pb-72">
      <div className="relative w-2/3 sm:w-auto">
        <h1 className="text-gray-100 xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold text-center">
          {data ? data.title : ""}
        </h1>
      </div>
      <article className="text-gray-100 xl:text-xl lg:text-lg sm:text-base text-sm lg:w-2/5 sm:w-2/4 w-3/4 text-center xl:mt-6 lg:mt-5 md:mt-4 mt-3">
        {data ? data.description : ""}
      </article>
      <div className="xl:my-14 lg:my-12 md:my-10 sm:my-9 my-8 flex flex-col sm:flex-row items-center">
        <Link href={livePreview ? livePreview.link : "#"} passHref>
          <a target="_blank">
            <button
              type="button"
              className={`text-base font-semibold py-3 px-7 border-2 border-gray-100 bg-gray-100 rounded-lg ${colors.textPrimary} sm:mr-4 mb-3 sm:mb-0`}
            >
              Live Preview
            </button>
          </a>
        </Link>
        <Link href={`#${data.slug}`} passHref>
          <a className="text-base font-semibold py-3 px-7 border-2 border-gray-100 rounded-lg text-white">
            Pricing
          </a>
        </Link>
      </div>
      <h4 className="text-gray-100 xl:text-xl uppercase lg:tex-lg md:text-base text-sm tracking-largest">
        {icons ? icons.title : "Header"}
      </h4>
      <div className="mt-6 flex items-center">
        {icons &&
          icons.icons.map((icon: any, index: number) => (
            <div
              className="rounded-lg md:p-5 p-4 bg-gray-100 shadow-darkLight mr-5"
              key={index}
            >
              {icon.icon}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Header;
