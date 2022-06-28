import React from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiMongodb, SiExpress } from 'react-icons/si'

const Header = () => {
  return (
    <div className=" flex flex-col items-center xl:pt-36 lg:pt-32 md:pt-24 sm:pt-20 pt-16 lg:pb-[12rem] sm:pb-72 pb-72">
      <div className="relative w-2/3 sm:w-auto">
        <h1 className="text-gray-100 xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold text-center">
          MetaAds - MERN Stack Classified Ads Theme
        </h1>
        <div className="absolute lg:-top-6 lg:-right-14 md:-top-8 md:-right-16 sm:-top-7 sm:-right-14 -top-7 -right-8  md:py-2 py-1 md:px-3 px-2 rounded-md bg-gradient-to-br from-orangeOne to-orangeTwo text-sm text-gray-100">
          Pre-Sale
        </div>
      </div>
      <article className="text-gray-100 xl:text-xl lg:text-lg sm:text-base text-sm lg:w-2/5 sm:w-2/4 w-3/4 text-center mt-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text
      </article>
      <h4 className="text-gray-100 xl:text-xl lg:tex-lg md:text-base text-sm tracking-largest mt-14">
        BUILT WITH
      </h4>
      <div className="mt-6 flex items-center">
        <div className="rounded-lg md:p-5 p-4 bg-gray-100 shadow-darkLight mr-5">
          <FaNodeJs className="xl:w-6 md:w-5 w-[1.0625rem] xl:h-6 md:h-5 h-[1.0625rem] text-primaryGreen" />
        </div>
        <div className="rounded-lg md:p-5 p-4 bg-gray-100 shadow-darkLight mr-5">
          <SiMongodb className="xl:w-6 md:w-5 w-[1.0625rem] xl:h-6 md:h-5 h-[1.0625rem] text-primaryGreen" />
        </div>
        <div className="rounded-lg md:p-5 p-4 bg-gray-100 shadow-darkLight mr-5">
          <SiExpress className="xl:w-6 md:w-5 w-[1.0625rem] xl:h-6 md:h-5 h-[1.0625rem] text-black" />
        </div>
        <div className="rounded-lg md:p-5 p-4 bg-gray-100 shadow-darkLight mr-5">
          <FaReact
            className="xl:w-6 md:w-5 w-[1.0625rem] xl:h-6 md:h-5 h-[1.0625rem]"
            style={{ color: '#00D8FF' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
