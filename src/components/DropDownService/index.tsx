import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import Link from 'next/link'

const DropDownService=()=> {
  return (
    <div className='bg-white w-10/12 drop-shadow-xl rounded-lg'>
        <div className=' lg:px-8 md:px-7 sm:px-6 lg:py-8 md:py-7 sm:py-6  grid xl:grid-cols-2 lg:grid-cols-1 container gap-3'>
            <div className='flex items-start group p-5 rounded-lg hover:bg-backgroundGray cursor-pointer ease-in duration-200 border border-white hover:border-cartImageBgOne'>
                <div className='shadow-lg rounded-lg bg-white p-3 mr-6'><FaShoppingCart className='w-6 h-6 drop-shadow-lg text-blueTwo' /></div>
                <div>
                    <h1 className='text-lg text-gray-900 group-hover:text-blueTwo font-semibold'>MetaJobs- Job Board Theme</h1>
                    <article className='text-gray-700 text-sm w-4/5 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </article>
                </div>
            </div>
            <div className='flex items-start group p-5 rounded-lg hover:bg-backgroundGray cursor-pointer ease-in duration-200 border border-white hover:border-cartImageBgOne'>
                <div className='shadow-lg rounded-lg bg-white p-3 mr-6'><FaShoppingCart className='w-6 h-6 drop-shadow-lg text-orangeTwo' /></div>
                <div>
                    <h1 className='text-lg text-gray-900 group-hover:text-blueTwo font-semibold'>Meta Ads- Classified Ads Theme </h1>
                    <article className='text-gray-700 text-sm w-4/5 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </article>
                </div>
            </div>
            <div className='flex items-start group p-5 rounded-lg hover:bg-backgroundGray cursor-pointer ease-in duration-200 border border-white hover:border-cartImageBgOne'>
                <div className='shadow-lg rounded-lg bg-white p-3 mr-6'><FaShoppingCart className='w-6 h-6 drop-shadow-lg text-greenDark' /></div>
                <div>
                    <h1 className='text-lg text-gray-900 group-hover:text-blueTwo font-semibold'>Metalancer- Freelancer marketplace </h1>
                    <article className='text-gray-700 text-sm w-4/5 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </article>
                </div>
            </div>
            <div className='flex items-start group p-5 rounded-lg hover:bg-backgroundGray cursor-pointer ease-in duration-200 border border-white hover:border-cartImageBgOne'>
                <div className='shadow-lg rounded-lg bg-white p-3 mr-6'><FaShoppingCart className='w-6 h-6 drop-shadow-lg text-yellowDark' /></div>
                <div>
                    <h1 className='text-lg text-gray-900 group-hover:text-blueTwo font-semibold'>MetaList- Directory & Listing Theme</h1>
                    <article className='text-gray-700 text-sm w-4/5 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </article>
                </div>
            </div>
            <div className='flex items-start group p-5 rounded-lg hover:bg-backgroundGray cursor-pointer ease-in duration-200 border border-white hover:border-cartImageBgOne'>
                <div className='shadow-lg rounded-lg bg-white p-3 mr-6'><FaShoppingCart className='w-6 h-6 drop-shadow-lg text-redDark' /></div>
                <div>
                    <h1 className='text-lg text-gray-900 group-hover:text-blueTwo font-semibold'>Short Product Title Here</h1>
                    <article className='text-gray-700 text-sm w-4/5 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </article>
                </div>
            </div>
            <div className='flex items-start group p-5 rounded-lg hover:bg-backgroundGray cursor-pointer ease-in duration-200 border border-white hover:border-cartImageBgOne'>
                <div className='shadow-lg rounded-lg bg-white p-3 mr-6'><FaShoppingCart className='w-6 h-6 drop-shadow-lg text-purpleDark' /></div>
                <div>
                    <h1 className='text-lg text-gray-900 group-hover:text-blueTwo font-semibold'>Short Product Title Here</h1>
                    <article className='text-gray-700 text-sm w-4/5 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </article>
                </div>
            </div>
        </div>
        <div className='arrow bg-white m-0 border-0 w-10 h-6 absolute -top-4 2xl:left-96 xl:left-64 lg:left-52 md:left-56 sm:left-40' />
    </div>
  )
}

export default DropDownService