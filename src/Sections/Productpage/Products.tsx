import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { ProductDocument } from '../../../pages/shop'
import SolutionCart from '../../components/SolutionCart'

const Products = ({ data }: { data: ProductDocument }) => {
  return (
    <div className="container mx-auto flex flex-col items-center px-5 sm:px-0 pb-2 pt-10">
      <div className="flex flex-col lg:flex-row items-center justify-between bg-white py-6 px-8 rounded-lg shadow-md container mx-auto">
        <div className="flex items-center justify-start sm:justify-center lg:justify-start overflow-auto w-full sm:w-auto pb-5 sm:pb-0">
          <button className="text-base text-gray-600 mr-5">All Products</button>
          <button className="text-base text-gray-600 mr-5">MERN Stack</button>
          <button className="text-base text-gray-600 mr-5">Headless CMS</button>
          <button className="text-base text-gray-600 mr-5">
            React Template
          </button>
          <button className="text-base text-gray-600">Figma Template</button>
        </div>
        <button className="mt-6 lg:mt-0 py-3 px-4 rounded-lg shadow-sm border border-cartImageBgOne flex items-center">
          <span>Most Recent</span>{' '}
          <IoIosArrowDown className="text-gray-700 ml-6" />
        </button>
      </div>
      <div className="mt-11 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-11 container">
        {data &&
          data.map((item: any) => (
            <div
              className="hover:shadow-grayLight shadow-md ease-in duration-300"
              key={item._id}
            >
              <SolutionCart toColor="blueOne" fromColor="blueTwo" item={item} />
            </div>
          ))}
      </div>
      <button className="text-base shadow-3xl text-gray-100 mt-20 py-4 px-8 bg-gradient-to-br from-blueOne to-blueTwo rounded-md drop-shadow-lg">
        Load More
      </button>
    </div>
  )
}

export default Products
