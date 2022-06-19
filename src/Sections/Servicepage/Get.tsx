import Link from "next/link";
import React from "react";
import { IoChatbubbles } from "react-icons/io5";

const Get = ({ colors, data }: { colors: any; data: any }) => {
  return (
    <div className="container mx-auto">
      <div className="xl:py-24 sm:py-16 py-14 flex flex-col items-center justify-center">
        <h1 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold lg:mt-4 sm:mt-3 mt-2 text-gray-900">
          {data ? data.title : "Heading Title"}
        </h1>
        <article className="mt-5 text-gray-600 max-w-2xl w-11/12 text-center xl:text-lg md:text-base text-sm">
          {data ? data.description : "Description"}
        </article>
        <div className="mt-16 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-5 sm:px-0 gap-8 container mx-auto">
          {data &&
            data.items.map((item: any, index: any) => (
              <GetCart colors={colors} item={item} key={index} />
            ))}
        </div>
        <Link href={data.buttonLink}>
          <a
            className={`text-base font-semibold shadow-3xl mt-16 text-gray-100 flex items-center ${colors.buttonPrimary} py-4 px-6 rounded-lg`}
          >
            <IoChatbubbles className="mr-4 text-xl" />{" "}
            {data.buttonText ? data.buttonText : "Button Text"}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Get;

const GetCart = ({ colors, item }: { colors: any; item: any }) => {
  return (
    <div className="p-6 rounded-lg border border-gray-300 flex items-start">
      <div
        className={`xl:w-10 sm:w-12 w-10 h-10 rounded-md ${colors.bgPrimary} mr-6`}
      />
      <p className="text-sm text-gray-700">
        {item ? item.name : "Heading Title"}
      </p>
    </div>
  );
};
