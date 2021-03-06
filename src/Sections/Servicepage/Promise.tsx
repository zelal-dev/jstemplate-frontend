import React from "react";
import PromiseCart from "../../components/PromiseCart";

const Promise = ({ colors, data }: { colors: any; data: any }) => {
  return (
    <div className={`${colors.bgPrimary} py-28`}>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-5 sm:px-0 gap-8 container mx-auto">
        <div className="xl:px-8 lg:px-7 md:px-6 px-5 border-l-4 border-gray-100 my-auto">
          <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold text-gray-100">
            {data ? data.title : "Heading Title"}
          </h1>
          <article className="xl:text-lg md:text-base text-sm text-gray-100 md:mt-4 mt-3">
            {data ? data.description : "Description"}
          </article>
        </div>
        {data &&
          data.items.map((item: any, index: any) => (
            <PromiseCart key={index} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Promise;
