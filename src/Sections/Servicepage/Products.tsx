import React from "react";
import SolutionCart from "../../components/SolutionCart";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Products = () => {
  const smample = [1, 2, 3];
  return (
    <div className="bg-backgroundGrayOne">
      <div className="container mx-auto">
        <div className="xl:py-24 sm:py-16 py-14 flex flex-col items-center justify-center">
          <h1 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold lg:mt-4 sm:mt-3 mt-2 text-gray-900">
            Our MERN Stack Products
          </h1>
          <article className="mt-5 text-gray-600 md:w-1/3 w-3/5 text-center xl:text-lg md:text-base text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text
            dummy text
          </article>
          <div className="mt-16 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-11 container mx-auto px-5 sm:px-0">
            {smample.map((item, index) => (
              <div className="shadow-grayLight duration-200" key={index}>
                <SolutionCart
                  toColor="greenLight"
                  fromColor="greenDark"
                  item={item}
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            className="text-base font-semibold shadow-3xl mt-16 text-gray-100 flex items-center bg-gradient-to-r from-greenSecondaryLight to-greenSecondaryDark py-4 px-6 rounded-lg"
          >
            <span className="md:ml-4 ml-3 text-white mr-4">
              View All Solution
            </span>{" "}
            <HiOutlineArrowNarrowRight style={{ color: "white" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
