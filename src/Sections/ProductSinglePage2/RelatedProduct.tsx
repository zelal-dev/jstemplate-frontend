import React from "react";
import SolutionCart from "../../components/SolutionCart";

const RelatedProduct = ({ data }: { data: any }) => {
  return (
    <div className="mt-28 container mx-auto px-5 sm:px-0">
      <h1 className="text-4xl font-bold text-gray-900">Related Product</h1>
      <div className="mt-10 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 container">
        {data &&
          data.map((item: any, index: any) => (
            <SolutionCart
              key={index}
              toColor="blueOne"
              fromColor="blueTwo"
              item={item}
            />
          ))}
        {!data && (
          <p className="text-center text-gray-400  md:col-span-2 xl:col-span-3">
            No Related Product
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedProduct;
