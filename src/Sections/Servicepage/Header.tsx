import React from 'react'
import {IoIosArrowDown} from 'react-icons/io'

const Header=()=> {
  return (
    <div className='xl:py-20 lg:py-28 md:py-24 sm:py-20 py-16 px-5 sm:px-0 flex items-center flex-col lg:flex-row justify-between container mx-auto'>
        <div className='lg:w-3/5 sm:w-4/5 w-full m:mr-16 mr-0  lg:pr-20 pr-0'>
            <h1 className='2xl:text-7xxl xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-gray-100 xl:leading-24 lg:leading-16 md:leading-10 sm:leading-9 leading-8 font-bold text-center lg:text-left' style={{textShadow:"8px 8px 0px #459B4B"}}>MERN Stack Web Development</h1>
            <article className='xL:text-xl lg:text-lg md:text-base text-sm text-gray-100 xl:mt-8 lg:mt-7 md:mt-6 sm:mt-5 mt-4 text-center lg:text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type</article>
        </div>
        <div className='xl:p-10 lg:p-8 md:p-7 sm:p-6 p-5 rounded-lg bg-white lg:w-2/5 sm:w-3/4 w-full mt-16 lg:mt-0'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-gray-900 font-bold xl:text-xl text-sm'>Estimate Your Project Budget</h3>
                </div>
                <div className='flex items-end'>
                    <h6 className='xl:text-sm md:text-xs text-xxs md:pb-1 pb-0.5 xl:mr-2 mr-1 text-gray-500'>Total:</h6>
                    <h3 className='text-gray-900 font-bold xL:text-2xl  md:text-lg sm:text-base text-sm'>$2,345</h3>
                </div>
            </div>
            <div className='mt-7 p-4 rounded-md border border-grayLight'>
                <div className=' flex items-center justify-between'>
                    <div className=' flex flex-col sm:flex-row sm:items-center justify-between sm:w-3/4 lg:w-4/5 w-auto'>
                        <div className='flex items-center'>
                            <input type="checkbox"  />
                            <h4 className='text-gray-700 font-bold text-sm xl:ml-5 md:ml-3 ml-1.5'>I need UI/UX Design in Figma </h4>
                        </div>
                        <h4 className='text-gray-700 font-bold text-sm mt-2 sm:mt-0 ml-5 sm:ml-0'>$234</h4>
                    </div>
                    <div><IoIosArrowDown className='text-gray-500 w-2.5 h-2.5' /></div>
                </div>
                <div className='mt-5 flex justify-between items-center'>
                    <h3 className='text-sm text-gray-700'>How many page you need</h3>
                    <div className='flex items-center border border-grayLight rounded-md'>
                        <h5 className='text-sm text-gray-700 font-bold px-5'>10</h5>
                        <div className='flex flex-col'>
                            <div className='py-1 px-1 border border-grayLight  '><IoIosArrowDown className='text-gray-500 w-2 h-2' /></div>
                            <div className='py-1 px-1 border border-grayLight '><IoIosArrowDown className='text-gray-500 w-2 h-2' /></div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 flex justify-between flex-col sm:flex-row lg:flex-col xl:flex-row xl:items-center'>
                    <h3 className='text-sm text-gray-700'>Platform</h3>
                    <div className='flex items-center mt-3 sm:mt-0 lg:mt-3 xl:mt-0'>
                        <div className='flex items-center mr-5'>
                            <input type="checkbox"  />
                            <h4 className='text-gray-700 text-sm ml-3'>Desktop</h4>
                        </div>
                        <div className='flex items-center mr-5'>
                            <input type="checkbox"  />
                            <h4 className='text-gray-700 text-sm ml-3'>Mobile</h4>
                        </div>
                        <div className='flex items-center'>
                            <input type="checkbox"  />
                            <h4 className='text-gray-700 text-sm ml-3'>Tablet</h4>
                        </div>
                    </div>
                </div>
                <div className='mt-5 flex justify-between flex-col xl:flex-row sm:flex-row lg:flex-col xl:items-center'>
                    <h3 className='text-sm text-gray-700'>Page Type</h3>
                    <div className='flex items-center mt-3 sm:mt-0 lg:mt-3 xl:mt-0'>
                        <div className='flex items-center mr-5'>
                            <input type="checkbox"  />
                            <h4 className='text-gray-700 text-sm ml-3'>Landing Page</h4>
                        </div>
                        <div className='flex items-center'>
                            <input type="checkbox"  />
                            <h4 className='text-gray-700 text-sm ml-3'>Dashboard Page</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-2 p-4 rounded-md border border-grayLight'>
                <div className=' flex items-center justify-between'>
                    <div className=' flex flex-col sm:flex-row sm:items-center justify-between sm:w-3/4 lg:w-4/5 w-auto'>
                        <div className='flex items-center'>
                            <input type="checkbox"  />
                            <h4 className='text-gray-700 font-bold text-sm xl:ml-5 md:ml-3 ml-1.5'>Frontend Development</h4>
                        </div>
                        <h4 className='text-gray-700 font-bold text-sm mt-2 sm:mt-0 ml-5 sm:ml-0'>$234</h4>
                    </div>
                    <div><IoIosArrowDown className='text-gray-500 w-2.5 h-2.5' /></div>
                </div>
            </div>
            <div className='mt-2 p-4 rounded-md border border-grayLight'>
                <div className=' flex items-center justify-between'>
                    <div className=' flex flex-col sm:flex-row sm:items-center justify-between sm:w-3/4 lg:w-4/5 w-auto'>
                        <div className='flex items-center'>
                            <input type="checkbox"  />
                            <h4 className='text-gray-700 font-bold text-sm xl:ml-5 md:ml-3 ml-1.5'>Frontend Development</h4>
                        </div>
                        <h4 className='text-gray-700 font-bold text-sm mt-2 sm:mt-0 ml-5 sm:ml-0'>$234</h4>
                    </div>
                    <div><IoIosArrowDown className='text-gray-500 w-2.5 h-2.5' /></div>
                </div>
            </div>
            <h4 className='text-gray-700 font-bold text-sm mt-5'>Addional Task - $30/hour</h4>
            <div className='mt-6'>
                <button className='text-gray-100 mr-2 text-sm font-medium p-4 rounded-lg bg-gradient-to-br from-greenSecondaryLight to-greenSecondaryDark shadow-green'>Start Your Project Free</button>
                <button className='text-greenSecondaryDark text-sm font-medium p-4 rounded-lg '>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default Header
