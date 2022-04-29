import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'

const Header = () => {
  return (
    <div className='xl:pt-32 lg:pt-28 md:pt-24 sm:pt-20 pt-16 xl:pb-[21.5rem] lg:pb-80 md:pb-72 sm:pb-60 pb-52 flex flex-col items-center'>
        <h1 className='xl:text-4xxl lg:text-4xl md:text-3xl sm:text-2xl text-xl  font-bold text-gray-100'>Digiency- Figma Website Template</h1>
        <h3 className='md:text-base text-sm flex-wrap text-gray-100 flex items-center justify-center mt-4'><span className='mr-3'>Home</span><MdArrowForwardIos className='text-base mr-3' /><span className='mr-3'>Figma Template</span><MdArrowForwardIos className='text-base mr-3' /><span className='mr-3'>Digiency- Figma Website Template</span></h3>
    </div>
  )
}

export default Header

// xl:pt-32 lg:pt-28 md:pt-24 sm:mt-20 mt-16 xl:pb-[21.5rem] lg:pb-80 md:pb-72 sm:pb-60 pb-52