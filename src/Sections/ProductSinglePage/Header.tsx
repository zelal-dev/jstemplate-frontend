import React from 'react'
import {FaNodeJs, FaReact} from 'react-icons/fa'
import {SiMongodb, SiExpress} from 'react-icons/si'

const Header = () => {
  return (
    <div className=' flex flex-col items-center xl:pt-36 lg:pt-32 md:pt-24 sm:pt-20 pt-16 lg:pb-[21rem] sm:pb-72 pb-72'>
        <div className='relative w-2/3 sm:w-auto'>
            <h1 className='text-gray-100 xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold text-center'>MetaAds - MERN Stack Classified Ads Theme</h1>
        </div>
        <article className='text-gray-100 xl:text-xl lg:text-lg sm:text-base text-sm lg:w-2/5 sm:w-2/4 w-3/4 text-center xl:mt-6 lg:mt-5 md:mt-4 mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text</article>
        <div className='xl:my-14 lg:my-12 md:my-10 sm:my-9 my-8 flex flex-col sm:flex-row items-center'>
            <button className='text-base font-semibold py-3 px-7 border-2 border-gray-100 bg-gray-100 rounded-lg text-secondaryTemplateColorDark sm:mr-4 mb-3 sm:mb-0'>Get Started</button>
            <button className='text-base font-semibold py-3 px-7 border-2 border-gray-100 rounded-lg text-white'>Get Started</button>
        </div>
        <h4 className='text-gray-100 xl:text-xl lg:tex-lg md:text-base text-sm tracking-largest'>BUILT WITH</h4>
        <div className='mt-6 flex items-center'>
            <div className='rounded-lg md:p-5 p-4 bg-gray-100 shadow-darkLight mr-5'><FaNodeJs className='xl:w-6 md:w-5 w-[1.0625rem] xl:h-6 md:h-5 h-[1.0625rem] text-primaryGreen'/></div>
            <div className='rounded-lg md:p-5 p-4 bg-gray-100 shadow-darkLight mr-5'><SiMongodb className='xl:w-6 md:w-5 w-[1.0625rem] xl:h-6 md:h-5 h-[1.0625rem] text-primaryGreen'/></div>
            <div className='rounded-lg md:p-5 p-4 bg-gray-100 shadow-darkLight mr-5'><SiExpress className='xl:w-6 md:w-5 w-[1.0625rem] xl:h-6 md:h-5 h-[1.0625rem] text-black'/></div>
            <div className='rounded-lg md:p-5 p-4 bg-gray-100 shadow-darkLight mr-5'><FaReact className='xl:w-6 md:w-5 w-[1.0625rem] xl:h-6 md:h-5 h-[1.0625rem]' style={{color:"#00D8FF"}}/></div>
        </div>
    </div>
  )
}

export default Header