import React, { useState } from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import {FaShoppingCart} from 'react-icons/fa'
import {RiUserFill} from 'react-icons/ri'
import {BsList} from 'react-icons/bs'
import DropDownProduct from '../DropDownProduct'
import DropDownService from '../DropDownService'
import Link from 'next/link';

const DefaultNavbar =()=> {
  const [proDis, setProdDis] = useState<string>("hidden")
  const [serDis, setSerDis] = useState<string>("hidden")
  const [proColor, setProColor] = useState("text-gray-700")
  const [serColor, setSerColor] = useState("text-gray-700")

  const productDropdown = () =>{
    setSerDis("hidden")
    setSerColor("text-gray-700");
    if(proColor === "text-gray-700"){
      setProColor("text-secondary")
    }
    else{
      setProColor("text-gray-700")
    }
    if(proDis === "hidden"){
      setProdDis("block")
    }
    else{
      setProdDis("hidden");
    }
  }
  const serviceDropdown = () =>{
    setProdDis("hidden")
    setProColor("text-gray-700");
    if(serColor === "text-gray-700"){
      setSerColor("text-secondary")
    }
    else{
      setSerColor("text-gray-700")
    }
    if(serDis === "hidden"){
      setSerDis("block")
    }
    else{
      setSerDis("hidden");
    }
  }
  return (
    <div className='flex items-center container mx-auto justify-between xl:py-10 md:py-7 sm:py-6 py-5'>
        <Link href="/"><a className='lg:text-2xl sm:text-xl font-bold'>Brand <span className='text-blue-600'>Logo</span></a></Link>
        <div className='sm:flex items-center hidden'>
            <div onClick={productDropdown} className={`flex items-center lg:text-base sm:text-sm ease-in duration-200 ${proColor} cursor-pointer`}><span className='mr-3'>Products</span><IoIosArrowDown /></div>
            <div  onClick={serviceDropdown} className={`mx-7 flex items-center lg:text-base sm:text-sm ease-in duration-200 ${serColor} cursor-pointer`}><span className='mr-3'>Service</span><IoIosArrowDown /></div>
            <Link href=""><a className=' lg:text-base sm:text-sm text-gray-700 cursor-pointer'>About</a></Link>
            <Link href=""><a className='mx-7 lg:text-base sm:text-sm text-gray-700 cursor-pointer'>Blog</a></Link>
            <Link href=""><a className=' lg:text-base sm:text-sm text-gray-700 cursor-pointer'>Contact us</a></Link>
        </div>
        <div className='sm:flex items-center hidden'>
            <div className='p-3 rounded-md bg-gradient-to-br from-orangeOne to-orangeTwo mr-4 shadow-4xl'><FaShoppingCart style={{color:"white", width:"18px", height:"18px"}}/></div>
            <div className='p-3 rounded-md bg-gradient-to-br from-blueOne to-blueTwo shadow-3xl'><RiUserFill  style={{color:"white", width:"18px", height:"18px"}} /></div>
        </div>
        <div className='p-3 rounded-md bg-gradient-to-r from-blueOne to-blueTwo shadow-3xl sm:hidden block'><BsList  style={{color:"white", width:"18px", height:"15.5px"}}/></div>
        <div className={`absolute hidden top-28 lg:left-1/4 md:left-40 sm:left-28 z-20 ease-out duration-700 sm:${proDis}`}>
          <DropDownProduct />
        </div>
        <div className={`absolute hidden top-28 lg:left-1/4 md:left-40 sm:left-28 z-20 ease-out duration-700 sm:${serDis}`}>
          <DropDownService />
        </div>
    </div>
  )
}

export default DefaultNavbar