import React from 'react'
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaCheck, FaCcPaypal, FaCcVisa, FaCcMastercard, FaCcJcb, FaCcDiscover} from 'react-icons/fa';
import {SiAmericanexpress} from 'react-icons/si'
import Link from 'next/link'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

const FooterWithoutSolution=()=> {
  return (
    <div className='bg-gray-800 relative px-5'>
        <div className='container mx-auto'>
            <div className='flex items-start justify-between flex-wrap  pt-12'>
                <div className='pt-4'>
                    <h1 className='text-3xl font-bold text-gray-100'>Brand Logo</h1>
                    <article className='text-xl text-gray-400 w-80'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum Dummy Text</article>
                    <div className='flex items-center mt-7'>
                        <span className='mr-5 cursor-pointer'><FaFacebookF color='#AEB6BF' width="10.71" height="20" /></span>
                        <span className='mr-5 cursor-pointer'><FaTwitter color='#AEB6BF' width="10.71" height="20" /></span>
                        <span className='mr-5 cursor-pointer'><FaLinkedinIn color='#AEB6BF' width="10.71" height="20" /></span>
                        <span className='mr-5 cursor-pointer'><FaInstagram color='#AEB6BF' width="10.71" height="20" /></span>
                    </div>
                </div>
                <div className='pt-4'>
                    <h3 className='text-lg font-bold text-gray-100'>Menu</h3>
                    <div className='mt-4 flex flex-col '>
                        <Link href=""><a className='text-gray-400 font-sm'>Home</a></Link>
                        <Link href=""><a className='text-gray-400 font-sm mt-2'>Our Solution</a></Link>
                        <Link href=""><a className='text-gray-400 font-sm mt-2'>About</a></Link>
                        <Link href=""><a className='text-gray-400 font-sm mt-2'>Blog</a></Link>
                        <Link href=""><a className='text-gray-400 font-sm mt-2'>Faq’s</a></Link>
                    </div>
                </div>
                <div className='pt-4'>
                    <h3 className='text-lg font-bold text-gray-100'>Quick Link</h3>
                    <div className='mt-4 flex flex-col '>
                        <Link href=""><a className='text-gray-400 font-sm'>Contact Us</a></Link>
                        <Link href=""><a className='text-gray-400 font-sm mt-2'>Pre-Sale</a></Link>
                        <Link href=""><a className='text-gray-400 font-sm mt-2'>Terms & Condition</a></Link>
                        <Link href=""><a className='text-gray-400 font-sm mt-2'>Privacy Policy</a></Link>
                        <Link href=""><a className='text-gray-400 font-sm mt-2'>Help</a></Link>
                    </div>
                </div>
                <div className='pt-4'>
                    <h3 className='text-lg font-bold text-gray-100'>Our Solution</h3>
                    <div className='mt-4 flex flex-col '>
                        <Link href=""><a className='text-gray-400 font-sm'>Meta Jobs</a></Link>
                        <Link href=""><a className='text-gray-400 font-sm mt-2'>Meta Ads</a></Link>
                        <Link href=""><a className='text-gray-400 font-sm mt-2'>Meta List</a></Link>
                        <Link href=""><a className='text-gray-400 font-sm mt-2'>Meta Lancer</a></Link>
                    </div>
                </div>
                <div className='pt-4'>
                    <div>
                        <h3 className='text-lg font-bold text-gray-100'>Headless CMS</h3>
                        <div className='mt-4 flex flex-col '>
                            <Link href=""><a className='text-gray-400 font-sm'>E-Commerce Template</a></Link>
                            <Link href=""><a className='text-gray-400 font-sm mt-2'>Blog Template</a></Link>
                            <Link href=""><a className='text-gray-400 font-sm mt-2'>Multipurpose</a></Link>
                        </div>
                    </div>
                    <div className='mt-7'>
                        <h3 className='text-lg font-bold text-gray-100'>React Template</h3>
                        <div className='mt-4 flex flex-col '>
                            <Link href=""><a className='text-gray-400 font-sm'>React Dashboard</a></Link>
                            <Link href=""><a className='text-gray-400 font-sm mt-2'>React Multipurpose</a></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-700 py-6 px-10 rounded-md flex md:flex-row flex-col items-center justify-between mt-16'>
                <div className='flex items-center'>
                    <div className='md:p-4 p-2 rounded-full bg-gradient-to-r from-greenLight to-greenDark xl:mr-8 lg:mr-6 md:mr-5 sm:mr-4 mr-3'><FaCheck className='text-gray-100 xl:w-6 xl:h-5 lg:w-5 lg:h-4 md:w-4 md:h-3 w-3 h-2' /></div>
                    <h2 className='text-gray-100 xl:text-2xl lg:text-xl md:text-lg text-base font-bold'>Guaranted Safe Checkout</h2>
                </div>
                <div className='flex items-center mt-8 md:mt-0'>
                    <FaCcPaypal className='text-gray-400 xl:w-16 xl:h-10 lg:w-14 lg:h-8 md:w-10 md:h-7 w-9 h-6'/>
                    <FaCcVisa className='text-gray-400 xl:w-16 xl:h-10 lg:w-14 lg:h-8 md:w-10 md:h-7 w-9 h-6'/>
                    <FaCcMastercard className='text-gray-400 xl:w-16 xl:h-10 lg:w-14 lg:h-8 md:w-10 md:h-7 w-9 h-6'/>
                    <SiAmericanexpress className='text-gray-400 xl:w-16 xl:h-9 lg:w-14 lg:h-8 md:w-10 md:h-7 w-9 h-6 rounded'/>
                    <FaCcJcb className='text-gray-400 xl:w-16 xl:h-10 lg:w-14 lg:h-8 md:w-10 md:h-7 w-9 h-6'/>
                    <FaCcDiscover className='text-gray-400 xl:w-16 xl:h-10 lg:w-14 lg:h-8 md:w-10 md:h-7 w-9 h-6'/>
                </div>
            </div>
            <p className='text-base text-gray-400 text-center py-7'>© 2022 <span className='text-white'>JS-Template</span>, All Right Reserved</p>
        </div>
    </div>
  )
}

export default FooterWithoutSolution