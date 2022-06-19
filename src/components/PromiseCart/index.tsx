import React from "react";

const PromiseCart = ({ item }: { item: any }) => {
  return (
    <div className="xl:p-10 lg:p-9 md:p-8 sm:p-7 p-6  rounded-lg border border-gray-300 flex items-start">
      <div className="xl:w-28 sm:w-48 w-36 h-10 rounded-md bg-gray-100 mr-6" />
      <div className="flex flex-col">
        <h1 className="xl:text-xl md:text-lg text-base font-bold text-gray-100">
          {item.name}
        </h1>
        <article className="md:text-base text-sm text-gray-100 md:mt-4 mt-3">
          {item.description}
        </article>
      </div>
    </div>
  );
};

export default PromiseCart;
