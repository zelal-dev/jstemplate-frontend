import React from "react";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import Image from "../../lib/Image";

const SolutionCart = ({
  toColor,
  fromColor,
  item,
}: {
  toColor: string;
  fromColor: string;
  item: any;
}) => {
  return (
    <div className="hover:shadow-grayLight shadow-md ease-in duration-300 rounded-xl cursor-pointer p-7 bg-white  flex flex-col items-start relative group">
      {item.thumbnail ? (
        <div className="mb-6">
          <Image
            src={
              item.thumbnail ||
              "http://res.cloudinary.com/js-template/image/upload/v1651478994/vi1pbxtwb3l7qyv2vhpz.jpg"
            }
            layout={undefined}
            className={"w-full 2xl:h-64 lg:h-60 sm:h-56 h-48 rounded-lg "}
            alt="preview_img"
            width={800}
            height={500}
            noPlaceholder={undefined}
          />
        </div>
      ) : (
        <div className="w-full 2xl:h-64 lg:h-60 sm:h-56 h-48 rounded-lg mb-6 bg-cartImageBgOne" />
      )}
      {item &&
        item.category.map((category: string, index: any) => {
          return (
            <span
              key={`${index}-${category}`}
              className={`text-xs py-1.5 rounded text-white px-2 bg-gradient-to-br from-${toColor} to-${fromColor} shadow-3xl`}
            >
              {category}
            </span>
          );
        })}
      <h5
        className={`text-xl mt-5 font-bold text-gray-900 group-hover:text-${fromColor} duration-200 leading-6`}
      >
        {item?.title ? item?.title : "Product Title"}
      </h5>
      <article className="text-gray-600 mt-3">
        {item?.description
          ? `${item.description.slice(0, 125)}...`
          : "Product Description"}
      </article>
      {/* <div className="p-1.5 rounded shadow mt-6 flex items-center">
        <div
          className={`bg-gradient-to-br from-${toColor} to-${fromColor} p-2 rounded`}
        >
          <BsFillEmojiSmileFill
            style={{ color: 'white', height: '16px', width: '16px' }}
          />
        </div>
        <span className="text-sm text-gray-500 font-bold ml-3">1234</span>
      </div> */}

      {/* Pre Sale hidden */}
      {/* <div className="text-sm font-semibold text-gray-100 bg-gradient-to-br from-orangeOne to-orangeTwo rounded py-2 px-3 absolute top-12 right-12 shadow-4xl">
        Pre-Sale
      </div> */}
    </div>
  );
};

export default SolutionCart;
