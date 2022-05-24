import React from "react";
import { AiFillStar } from "react-icons/ai";

const TestimonialsCart = () => {
  return (
    <div className="bg-white p-7 rounded-lg drop-shadow-lg">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-greenLight to-greenDark mr-4" />
        <div className="flex items-center">
          <div className="rounded p-1.5 bg-gradient-to-r from-greenLight to-greenDark mr-0.5">
            <AiFillStar
              style={{ width: "14px", height: "14px", color: "white" }}
            />
          </div>
          <div className="rounded p-1.5 bg-gradient-to-r from-greenLight to-greenDark mr-0.5">
            <AiFillStar
              style={{ width: "14px", height: "14px", color: "white" }}
            />
          </div>
          <div className="rounded p-1.5 bg-gradient-to-r from-greenLight to-greenDark mr-0.5">
            <AiFillStar
              style={{ width: "14px", height: "14px", color: "white" }}
            />
          </div>
          <div className="rounded p-1.5 bg-gradient-to-r from-greenLight to-greenDark mr-0.5">
            <AiFillStar
              style={{ width: "14px", height: "14px", color: "white" }}
            />
          </div>
          <div className="rounded p-1.5 bg-gray-300">
            <AiFillStar
              style={{ width: "14px", height: "14px", color: "white" }}
            />
          </div>
        </div>
      </div>
      <h3 className="text-sm font-medium mt-4">
        Client Name <span className="text-gray-400">reviewed</span> Product Name
      </h3>
      <article className="text-sm mt-3 text-gray-600">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has standard dummy text
      </article>
    </div>
  );
};

export default TestimonialsCart;
