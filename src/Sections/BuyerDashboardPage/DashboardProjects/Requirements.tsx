import React from "react";
import { AiOutlineFile } from "react-icons/ai";

const Requirements = () => {
  return (
    <div className="mt-6">
      <h1 className="text-base font-bold text-gray-900">Description</h1>
      <article className="text-base text-gray-600 mt-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat nobis
        laudantium atque, nulla possimus amet iste repudiandae, labore eaque,
        fugit porro harum. Et soluta voluptates sit aspernatur possimus,
        tempore, rerum minus aliquam corporis eius maiores. A praesentium
        accusamus explicabo quis, ipsam odit voluptas perspiciatis nobis odio
        dolorum, voluptatem assumenda animi.
      </article>
      <h3 className="mt-10">Attachment</h3>
      <div className="flex items-center mt-5">
        <div className="p-1.5 rounded-md border border-cartImageBgOne mr-4">
          <div className="p-7 rounded-md bg-backgroundGrayOne">
            <AiOutlineFile className="w-6 h-8 text-gray-500" />
          </div>
          <h3 className="text-xs text-[#0BB55C]">filename....docx</h3>
        </div>
        <div className="p-1.5 rounded-md border border-cartImageBgOne">
          <div className="p-7 rounded-md bg-backgroundGrayOne">
            <AiOutlineFile className="w-6 h-8 text-gray-500" />
          </div>
          <h3 className="text-xs text-[#0BB55C]">filename....docx</h3>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
