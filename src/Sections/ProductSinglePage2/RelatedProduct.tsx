import React from "react";
import SolutionCart from "../../components/SolutionCart";

const RelatedProduct = () => {
  const sample = [1, 2, 3];
  return (
    <div className="mt-28 container mx-auto px-5 sm:px-0">
      <h1 className="text-4xl font-bold text-gray-900">Related Product</h1>
      <div className="mt-10 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 container">
        {sample.map((item, index) => (
          <SolutionCart
            key={index}
            toColor="blueOne"
            fromColor="blueTwo"
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
