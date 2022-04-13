import React from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import {FaShoppingCart} from 'react-icons/fa'
import {RiUserFill} from 'react-icons/ri'
import {BsList} from 'react-icons/bs'

const Navbar =()=> {
  return (
    <div className='flex items-center justify-around xl:py-10 md:py-7 sm:py-6 py-5'>
        <div className='lg:text-2xl sm:text-xl font-bold'>Brand <span className='text-blue-600'>Logo</span></div>
        <div className='sm:flex items-center hidden'>
            <div className="flex items-center lg:text-base sm:text-sm text-gray-700 cursor-pointer"><span className='mr-3'>Products</span><IoIosArrowDown /></div>
            <div className='mx-7  lg:text-base sm:text-sm text-gray-700 cursor-pointer'>Services</div>
            <div className=' lg:text-base sm:text-sm text-gray-700 cursor-pointer'>About</div>
            <div className='mx-7 lg:text-base sm:text-sm text-gray-700 cursor-pointer'>Blog</div>
            <div className=' lg:text-base sm:text-sm text-gray-700 cursor-pointer'>Contact us</div>
        </div>
        <div className='sm:flex items-center hidden'>
            <div className='p-3 rounded-md bg-gradient-to-r from-orangeOne to-orangeTwo mr-4 drop-shadow-4xl'><FaShoppingCart style={{color:"white", width:"18px", height:"18px"}}/></div>
            <div className='p-3 rounded-md bg-gradient-to-r from-blueOne to-blueTwo drop-shadow-3xl'><RiUserFill  style={{color:"white", width:"18px", height:"18px"}} /></div>
        </div>
        <div className='p-3 rounded-md bg-gradient-to-r from-blueOne to-blueTwo drop-shadow-3xl sm:hidden block'><BsList  style={{color:"white", width:"18px", height:"15.5px"}}/></div>
        
    </div>
  )
}

export default Navbar