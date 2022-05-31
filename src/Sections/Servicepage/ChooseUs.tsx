import React from "react";
import ServiceChooseCart from "../../components/ServiceChooseCart";

const ChooseUs = ({ colors, data }: { colors: any; data: any }) => {
  return (
    <div className="container mx-auto">
      <div className="xl:py-24 sm:py-16 py-14 flex flex-col items-center justify-center">
        <h1 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold lg:mt-4 sm:mt-3 mt-2 text-gray-900">
          {data ? data.title : "Heading Title"}
        </h1>
        <article className="mt-5 text-gray-600 max-w-2xl w-11/12 text-center xl:text-lg md:text-base text-sm">
          {data ? data.description : "Description"}
        </article>
        <div className="mt-16 grid lg:grid-cols-3 sm:grid-cols-2 gap-8 container mx-auto px-5 sm:px-0">
          {data &&
            data.items.map((item: any, index: any) => (
              <div
                className={`border ${colors.borderPrimary} ${colors.hoverBorderPrimary} rounded-lg ease-in duration-200`}
                key={index}
              >
                <ServiceChooseCart colors={colors} data={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
