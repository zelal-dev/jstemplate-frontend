import React from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import SolutionCart from '../../components/SolutionCart';

const Products=()=>{
    const sample = [1, 2, 3, 4, 5, 6];
  return (
    <div className='container mx-auto flex flex-col items-center px-5 sm:px-0 pb-2'>
        <div className='flex flex-col lg:flex-row items-center justify-between bg-white py-6 px-8 rounded-lg drop-shadow-lg container mx-auto'>
            <div className='flex items-center justify-start sm:justify-center lg:justify-start overflow-auto w-full sm:w-auto pb-5 sm:pb-0'>
                <button className='text-base text-gray-600 mr-5'>All Products</button>
                <button className='text-base text-gray-600 mr-5'>MERN Stack</button>
                <button className='text-base text-gray-600 mr-5'>Headless CMS</button>
                <button className='text-base text-gray-600 mr-5'>React Template</button>
                <button className='text-base text-gray-600'>Figma Template</button>
            </div>
            <button className='mt-6 lg:mt-0 py-3 px-4 rounded-lg shadow-sm border border-cartImageBgOne flex items-center'><span>Most Recent</span> <IoIosArrowDown className='text-gray-700 ml-6' /></button>
        </div>
        <div className='mt-11 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-11 container'>
            {sample.map((item, index)=>(
                <div className='hover:drop-shadow-2xl shadow-md ease-in duration-300' key={index}><SolutionCart /></div>
            ))}
        </div>
        <button className='text-base text-gray-100 mt-20 py-4 px-8 bg-gradient-to-r from-blueOne to-blueTwo rounded-md drop-shadow-lg'>Load More</button>
    </div>
  )
}

export default Products