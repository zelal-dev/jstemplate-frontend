import Image from "next/image";
import React from "react";
import { AiOutlineFile } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { FiSend, FiSmile } from "react-icons/fi";

const Message = () => {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-12 container">
        <div className="col-span-1">
          <Image src="/manRound.svg" alt="" width="50" height="50" />
        </div>
        <div className="col-span-9 ml-6">
          <article className="text-sm bg-backgroundGrayOne text-gray-600 p-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </article>
          <h3 className="text-xs text-gray-500 mt-2">Saturday 1:20 PM</h3>
        </div>
      </div>
      <div className="grid grid-cols-12 container mt-7">
        <div className="col-span-2" />
        <div className="col-span-9 mr-6">
          <article className="text-sm bg-backgroundGrayOne text-gray-600 p-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </article>
          <h3 className="text-xs text-gray-500 mt-2 text-right">
            Saturday 1:20 PM
          </h3>
        </div>
        <div className="col-span-1">
          <Image src="/manRound.svg" alt="" width="50" height="50" />
        </div>
      </div>
      <div className="mt-7 py-3 px-5 rounded-lg bg-backgroundGrayOne items-center hidden sm:flex">
        <div className="flex items-center">
          <FiSmile className="w-4 h-4 text-gray-600 cursor-pointer mr-4" />
          <AiOutlineFile className="w-4 h-4 text-gray-600 cursor-pointer mr-4" />
          <BiLinkAlt className="w-4 h-4 text-gray-600 cursor-pointer" />
        </div>
        <div className="w-0.5 h-8 bg-gray-300 mx-5" />
        <input
          type="text"
          className="border-none outline-none bg-transparent w-full"
          placeholder="Write your message..."
        />
        <button
          type="button"
          aria-label="send"
          className="text-sm text-white py-3 px-3 rounded-md bg-[#FF7043] ml-5"
        >
          <FiSend className="w-[1.125rem] h-[1.125rem]" />
        </button>
      </div>
      <div className="mt-7 py-3 px-5 rounded-lg bg-backgroundGrayOne items-center block sm:hidden">
        <input
          type="text"
          className="border-none outline-none text-sm bg-transparent w-full"
          placeholder="Write your message..."
        />
        <div className="flex items-end justify-between">
          <div className="flex items-center">
            <FiSmile className="w-4 h-4 cursor-pointer text-gray-700 mr-4" />
            <AiOutlineFile className="w-4 h-4 cursor-pointer text-gray-700 mr-4" />
            <BiLinkAlt className="w-4 h-4 cursor-pointer text-gray-700" />
          </div>
          <button
            type="button"
            aria-label="send"
            className="text-sm text-white py-3 px-3 rounded-md bg-[#FF7043]"
          >
            <FiSend className="w-[1.125rem] h-[1.125rem]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
