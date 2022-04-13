import React from 'react'
import Link from 'next/link';
import {HiArchive} from 'react-icons/hi';
import {FaShoppingCart} from 'react-icons/fa';

const Header=()=>{
  return (
    <div className='xl:py-32 lg:py-28 md:py-24 sm:py-20 py-16 flex flex-col justify-center items-center'>
        <div className=' flex flex-col justify-center items-center xl:leading-extra-loose md:leading-10 sm:leading-8'>
            <h1 className='2xl:text-5xxl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold'>Buy Our Ready-Made Web Solution</h1>
            <h1 className='2xl:text-5xxl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold'>Grow Your Business Faster</h1>
        </div>
        <article className='sm:w-2/5 w-4/5 text-gray-600 xl:mt-6 md:mt-5 mt-3 text-center 2xl:text-xl lg:text-lg sm:text-base text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text</article>
        <div className='flex sm:flex-row flex-col items-center xl:mt-12 lg:mt-10 md:mt-9 sm:mt-8 mt-7 '>
            <Link href=""><a className='flex sm:w-auto w-full items-center xl:text-lg text-base xl:py-4 md:py-3 xl:px-6 md:px-5 py-3 px-3 rounded-lg bg-gradient-to-r from-blueOne to-blueTwo sm:mr-6 mr-0'> <HiArchive  style={{ color:"white",width:"18px", height:"18px"}} /> <span className='md:ml-4 ml-3 text-white'>Our Solution</span> </a></Link>
            <Link href=""><a className='flex sm:w-auto w-full items-center xl:text-lg text-base xl:py-4 md:py-3 xl:px-6 md:px-5 py-3 px-3 rounded-lg bg-gradient-to-r from-orangeOne to-orangeTwo  sm:mt-0 mt-3'> <FaShoppingCart  style={{ color:"white",width:"18px", height:"18px"}} /> <span className='md:ml-4 ml-3 text-white'>Pre Sale</span> </a></Link>

        </div>
    </div>
  )
}

export default Header