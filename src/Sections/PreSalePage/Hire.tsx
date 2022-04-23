import React from 'react'
import {IoChatbubbles} from 'react-icons/io5'
import prodSingleBg from './../../../public/prodSingleBg.svg';

const Hire = () => {
  return (
    <div className='px-5 sm:px-0 2xl:pt-28 xl:pt-24 lg:pt-20 md:pt-16 pt-14 '>
        <div style={{backgroundImage:`url("/prodSingleBg.svg")`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className='container mx-auto xl:p-24 lg:p-20 md:p-16 sm:p-10 p-8  flex flex-col items-center justify-center rounded-lg '>
            <h1 className='text-gray-100 font-bold 2xl:text-4xxl xl:text-4xl lg:text-3xl md:text-2xl text-xl xl:leading-12 lg:leading-10 md:leading-8 sm:leading-7 leading-6 pt-1 text-center'>Hire MERN Stack Developers</h1>
            <article className='md:mt-6 mt-5 xl:text-xl lg:text-lg md:text-base text-sm text-gray-100 2xl:w-2/4 md:w-3/5 sm:w-2/3 w-full text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text</article>
            <button className='text-base font-semibold drop-shadow-lg mt-16 text-secondaryTemplateColorDark flex items-center bg-gray-100 py-4 px-6 rounded-lg'><IoChatbubbles className='mr-4 drop-shadow-xl' /> Start a Project</button>
        </div>
    </div>
  )
}

export default Hire