import React from "react";
import { FiUser } from "react-icons/fi";

const ServiceChooseCart = ({ colors, data }: { colors: any; data: any }) => {
  return (
    <div className="p-10 rounded-lg ">
      <div className="flex items-center justify-between">
        <div
          className={`w-20 h-20 rounded-lg grid justify-center items-center ${colors.bgPrimary} shadow-secondaryTemplate`}
        >
          {data && data.icon}
        </div>
        <h1
          className={`text-5xxl font-black ${colors.textPrimary} opacity-30 leading-16`}
        >
          {data ? data.count : "01"}
        </h1>
      </div>
      <h1 className="mt-5 text-gray-900 font-bold text-xl">{data.name}</h1>
      <article className="text-base mt-3 text-gray-600">
        {data ? data.description : "Description"}
      </article>
    </div>
  );
};

export default ServiceChooseCart;
