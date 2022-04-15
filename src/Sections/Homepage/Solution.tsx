import React from 'react'
import SolutionCart from '../../components/SolutionCart'
import Link from 'next/link';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const Solution=()=>{
    const sample = [1, 2, 3]
  return (
    <div className='container mx-auto'>
        <div className='xl:py-24 sm:py-16 py-14 flex flex-col items-center justify-center'>
            <h5 className='xl:text-base md:text-sm text-xs text-secondary'>Statistics</h5>
            <h1 className='2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold lg:mt-4 sm:mt-3 mt-2 text-gray-900'>Our Creative Solution</h1>
            <article className='mt-5 text-gray-600 md:w-1/3 w-3/5 text-center xl:text-lg md:text-base text-sm'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text dummy text
            </article>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-11 container mx-auto xl:mt-60 md:mt-16 mt-12 px-5 md:px-0'>
                {/* {sample.map((items, index)=>(
                    <SolutionCart key={index} />
                ))} */}
                <div className='drop-shadow-2xl'><SolutionCart /></div>
                <div className='xl:-mt-36 drop-shadow-2xl'><SolutionCart /></div>
                <div className='drop-shadow-2xl'><SolutionCart /></div>
                <div className='drop-shadow-2xl'><SolutionCart /></div>
                <div className='xl:-mt-36 drop-shadow-2xl'><SolutionCart /></div>
                <div className='drop-shadow-2xl'><SolutionCart /></div>
            </div>
            <Link href=""><a className='xl:-mt-12 md:mt-16 mt-10 drop-shadow-xl flex sm:w-auto items-center xl:text-lg text-base xl:py-6 md:py-3 xl:px-10 md:px-5 py-3 px-3 rounded-lg bg-gradient-to-r from-blueOne to-blueTwo sm:mr-6 mr-0'><span className='md:ml-4 ml-3 text-white mr-4'>Our Solution</span> <HiOutlineArrowNarrowRight style={{color:"white"}}/></a></Link>
        </div>
    </div>
  )
}

export default Solution