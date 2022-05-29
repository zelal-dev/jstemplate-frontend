import Image from "next/image";
import React, { useState } from "react";

const SimpleTitleThird = ({ data }: { data: any }) => {
  const sample = [1, 2, 3];
  const [tab, setTab] = useState<number>(0);
  const [img, setImg] = useState<string>("/serviceHeadBg.svg");
  const headingImg = ["/serviceHeadBg.svg", "headerBg.svg"];

  const handleImage = (key: number) => {
    setImg(headingImg[0]);
    setTab(key);
  };
  return (
    <div className="bg-backgroundGrayOne">
      <div className="container mx-auto">
        <div className="xl:pt-24 sm:pt-16 py-14 md:pb-[29.5rem] flex flex-col items-center justify-center">
          <h1 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold lg:mt-4 sm:mt-3 mt-2 text-gray-900">
            Simple Title Here
          </h1>
          <article className="mt-5 text-gray-600 md:w-1/3 w-3/5 text-center xl:text-lg md:text-base text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text
            dummy text
          </article>
          <div className="lg:grid grid-cols-12 gap-[4.375rem] container lg:my-20 md:my-16 my-12">
            <div className="lg:col-span-4 my-auto px-5 sm:px-0">
              {sample.map((item, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => handleImage(index)}
                  className={`${
                    tab === index
                      ? "p-6 rounded-lg border-l-2 shadow-secondaryGrayLight border-x-secondaryTemplateColorDark bg-white duration-200 mt-6"
                      : "p-6 rounded-lg border-l-2 border-[#dde6f5] duration-200 mt-6"
                  }`}
                >
                  <h1 className="text-gray-700 font-bold text-lg text-left">
                    Screen Title Here
                  </h1>
                  <article className="text-sm text-gray-600 mt-4 text-left">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text
                  </article>
                </button>
              ))}
            </div>
            <div className="lg:col-span-8 mt-8 lg:mt-0 px-5 sm:px-0">
              <div className="w-full relative bg-white lg:h-[34.375rem] md:h-96 sm:h-64 h-52 shadow-grayLight rounded-xl">
                <Image src={img} alt="" layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="text-base font-semibold py-4 px-8 bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark shadow-secondaryTemplate rounded-lg text-gray-100 mr-5"
            >
              Get Started
            </button>
            <button
              type="button"
              className="text-base font-semibold py-4 px-8 bg-gradient-to-br from-orangeOne to-orangeTwo shadow-4xl rounded-lg text-gray-100"
            >
              Get Free Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleTitleThird;
