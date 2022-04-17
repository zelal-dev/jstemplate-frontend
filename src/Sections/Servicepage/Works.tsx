import React from 'react'
import workCurve from './../../../public/workCurve.svg'
import workCurveSecond from './../../../public/workCurveSecond.svg'
import Image from 'next/image'

const Works=()=> {
  return (
    <div className='container mx-auto'>
        <div className='xl:py-24 sm:py-16 py-14 flex flex-col items-center justify-center'>
            <h1 className='2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold lg:mt-4 sm:mt-3 mt-2 text-gray-900'>How It Works  </h1>
            <article className='mt-5 text-gray-600 md:w-1/3 w-3/5 text-center xl:text-lg md:text-base text-sm'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text dummy text
            </article>
            <div className='mt-16 grid lg:grid-cols-12 md:grid-cols-1 gap-16 container mx-auto px-5 sm:px-0'>
                <div className='lg:col-span-7'>
                    <WorksCart />
                </div>
                <div className='lg:col-span-5 hidden lg:block'>
                    <div className='flex items-end h-full'><Image src={workCurve} alt="" /></div>
                </div>
                <div className='lg:col-span-5 hidden lg:block'>
                    <div className='flex justify-end items-end h-full'><Image src={workCurveSecond} alt="" /></div>
                </div>
                <div className='lg:col-span-7'>
                    <WorksCart />
                </div>
                <div className='lg:col-span-7'>
                    <WorksCart />
                </div>
                <div className='lg:col-span-5 hidden lg:block'>
                    <div className='flex items-end h-full'><Image src={workCurve} alt="" /></div>
                </div>
                <div className='lg:col-span-5 hidden lg:block'>
                </div>
                <div className='lg:col-span-7'>
                    <WorksCart />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Works

const WorksCart = () =>{
    return(
        <div className='col-span-12 flex items-start'>
            <div className='col-span-6'>
                <div className=' rounded-full bg-templateColor xl:w-72 lg:w-60 md:w-44 sm:w-32 w-20  xl:h-72 lg:h-60 md:h-44 sm:h-32 h-20' />
            </div>
            <div className='col-span-6 my-auto xl:ml-11 lg:ml-9 md:ml-7 sm:ml-6 ml-5'>
                <h1 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold text-gray-900'>Simple Step Title Here</h1>
                <article className='mt-5 xl:text-lg md:text-base sm:text-sm text-xs text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took</article>
            </div>
        </div>
    )
}