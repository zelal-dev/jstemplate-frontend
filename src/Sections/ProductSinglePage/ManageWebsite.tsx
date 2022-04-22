import Image from 'next/image'
import React, { useState } from 'react'
import { BiDollar } from 'react-icons/bi'
import { HiBell } from 'react-icons/hi'
import { IoChatbubbles } from 'react-icons/io5'
import { RiAppsFill, RiLayoutMasonryFill, RiSearchFill, RiUserFill } from 'react-icons/ri'
import megaPhone from './../../../public/megaPhone.svg'
import time from './../../../public/time.svg'

const MangeWebsite=()=>{
    const sample = [1, 2, 3]
    const [boxShadowOne, setBoxShadowOne] = useState("")
    const [boxShadowTwo, setBoxShadowTwo] = useState("")
    const [boxShadowThree, setBoxShadowThree] = useState("")
    const [boxShadowFour, setBoxShadowFour] = useState("")
    const [boxShadowFive, setBoxShadowFive] = useState("")
    const [boxShadowSix, setBoxShadowSix] = useState("")
    const handleMouseOverOne = () =>{
        setBoxShadowOne("")
    }
    const handleMouseOutOne = () =>{
        setBoxShadowOne("inset 0px 8px 4px -4px #E9F0FB")
    }
    const handleMouseOverTwo = () =>{
        setBoxShadowTwo("")
    }
    const handleMouseOutTwo = () =>{
        setBoxShadowTwo("inset 0px 8px 4px -4px #E9F0FB")
    }
    const handleMouseOverThree = () =>{
        setBoxShadowThree("")
    }
    const handleMouseOutThree = () =>{
        setBoxShadowThree("inset 0px 8px 4px -4px #E9F0FB")
    }
    const handleMouseOverFour = () =>{
        setBoxShadowFour("")
    }
    const handleMouseOutFour = () =>{
        setBoxShadowFour("inset 0px 8px 4px -4px #E9F0FB")
    }
    const handleMouseOverFive = () =>{
        setBoxShadowFive("")
    }
    const handleMouseOutFive = () =>{
        setBoxShadowFive("inset 0px 8px 4px -4px #E9F0FB")
    }
    const handleMouseOverSix = () =>{
        setBoxShadowSix("")
    }
    const handleMouseOutSix = () =>{
        setBoxShadowSix("inset 0px 8px 4px -4px #E9F0FB")
    }
  return (
    <div className='container mx-auto'>
        <div className='xl:py-24 sm:py-16 py-14 flex flex-col items-center justify-center'>
            <video controls className='rounded-xl xl:-mt-96 lg:-mt-[21rem] md:-mt-80 sm:-mt-80 -mt-[18rem] shadow-2xl xl:w-[59.5rem] lg:w-[50rem] md:w-[40rem] sm:w-[30rem] w-[20rem] xl:h-[31.25rem] lg:h-[25rem] md:h-[20rem] sm:h-[15rem] h-[10.625rem]' >
                <source src="https://www.youtube.com/watch?v=Faow3SKIzq0" type="video/mp4"/>
            </video>
            <h1 className='2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold lg:mt-4 sm:mt-3 text-gray-900  md:w-2/4 w-4/6 text-center pt-28'>Everything You Need to Manage Your Classified Ads Website</h1>
            <article className='mt-5 text-gray-600 md:w-2/4 w-3/5 text-center xl:text-lg md:text-base text-sm'>
                Meta Ads is the best classifieds ads MERN Stack theme that will help you to develop scaleable ads business website. Here are the key features
            </article>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-11 container mx-auto xl:my-16 md:mt-12 mt-8 px-5 lg:px-28 sm:px-16'>
                <div className='bg-backgroundGrayOne p-10 rounded-lg flex flex-col items-center justify-center hover:bg-white cursor-pointer hover:drop-shadow-xl ease-in duration-200' style={{boxShadow:`${boxShadowOne}`}} onMouseOver={handleMouseOverOne} onMouseOut={handleMouseOutOne}>
                    <div className='p-5 rounded-md bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark shadow-secondaryTemplate'><Image src={megaPhone} alt="" /></div>
                    <h5 className='text-xl font-bold mt-7 text-gray-900 text-center'>Ads Management</h5>
                    <article className='text-lg text-gray-600 mt-4 text-center'>
                        Super admin, seller can manage their ads from dashboard. Included everything you need
                    </article>
                </div>
                
                <div className='bg-backgroundGrayOne p-10 rounded-lg flex flex-col items-center justify-center  hover:bg-white cursor-pointer hover:drop-shadow-xl ease-in duration-200' style={{boxShadow:`${boxShadowTwo}`}} onMouseOver={handleMouseOverTwo} onMouseOut={handleMouseOutTwo}>
                    <div className='p-5 rounded-md bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark shadow-secondaryTemplate'><RiUserFill style={{color:"white", width:"30px", height:"30px"}} /></div>
                    <h5 className='text-xl font-bold mt-7 text-gray-900 text-center'>Seller Profile</h5>
                    <article className='text-lg text-gray-600 mt-4 text-center'>
                        Best layout of seller profile with seller total review, individual reviews and total Ads.
                    </article>
                </div>
                <div className='bg-backgroundGrayOne p-10 rounded-lg flex flex-col items-center justify-center  hover:bg-white cursor-pointer hover:drop-shadow-xl ease-in duration-200' style={{boxShadow:`${boxShadowThree}`}} onMouseOver={handleMouseOverThree} onMouseOut={handleMouseOutThree}>
                    <div className='p-5 rounded-md bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark shadow-secondaryTemplate'><RiSearchFill style={{color:"white", width:"30px", height:"30px"}} /></div>
                    <h5 className='text-xl font-bold mt-7 text-gray-900 text-center'>Advanced Search</h5>
                    <article className='text-lg text-gray-600 mt-4 text-center'>
                        Meta Ads has advanced search and filter functionality in both frontend and backend 
                    </article>
                </div>
                <div className='bg-backgroundGrayOne p-10 rounded-lg flex flex-col items-center justify-center  hover:bg-white cursor-pointer hover:drop-shadow-xl ease-in duration-200' style={{boxShadow:`${boxShadowFour}`}} onMouseOver={handleMouseOverFour} onMouseOut={handleMouseOutFour}>
                    <div className='p-5 rounded-md bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark shadow-secondaryTemplate'><RiLayoutMasonryFill style={{color:"white", width:"30px", height:"30px"}} /></div>
                    <h5 className='text-xl font-bold mt-7 text-gray-900 text-center'>Easy Super Admin</h5>
                    <article className='text-lg text-gray-600 mt-4 text-center'>
                        Super Admin can manage everything from admin dashboard.
                    </article>
                </div>
                <div className='bg-backgroundGrayOne p-10 rounded-lg flex flex-col items-center justify-center  hover:bg-white cursor-pointer hover:drop-shadow-xl ease-in duration-200' style={{boxShadow:`${boxShadowFive}`}} onMouseOver={handleMouseOverFive} onMouseOut={handleMouseOutFive}>
                    <div className='p-5 rounded-md bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark shadow-secondaryTemplate'><RiAppsFill style={{color:"white", width:"30px", height:"30px"}} /></div>
                    <h5 className='text-xl font-bold mt-7 text-gray-900 text-center'>Seller Dashboard</h5>
                    <article className='text-lg text-gray-600 mt-4 text-center'>
                        Seller can buy, upgrade, downgrade packages and post their Ads
                    </article>
                </div>
                <div className='bg-backgroundGrayOne p-10 rounded-lg flex flex-col items-center justify-center  hover:bg-white cursor-pointer hover:drop-shadow-xl ease-in duration-200' style={{boxShadow:`${boxShadowSix}`}} onMouseOver={handleMouseOverSix} onMouseOut={handleMouseOutSix}>
                    <div className='p-5 rounded-md bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark shadow-secondaryTemplate'><Image src={time} alt="" /></div>
                    <h5 className='text-xl font-bold mt-7 text-gray-900 text-center'>Real Time Notification</h5>
                    <article className='text-lg text-gray-600 mt-4 text-center'>
                        Real Time ads, message and all functionality work. Best Approch
                    </article>
                </div>
                <div className='bg-backgroundGrayOne p-10 rounded-lg flex flex-col items-center justify-center  hover:bg-white cursor-pointer hover:drop-shadow-xl ease-in duration-200' style={{boxShadow:`${boxShadowSix}`}} onMouseOver={handleMouseOverSix} onMouseOut={handleMouseOutSix}>
                    <div className='p-5 rounded-md bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark shadow-secondaryTemplate'><BiDollar style={{color:"white", width:"30px", height:"30px"}} /></div>
                    <h5 className='text-xl font-bold mt-7 text-gray-900 text-center'>Pricing Plan for Seller</h5>
                    <article className='text-lg text-gray-600 mt-4 text-center'>
                        Pricing plan for seller can be controller from super admin dashboard.
                    </article>
                </div>
                <div className='bg-backgroundGrayOne p-10 rounded-lg flex flex-col items-center justify-center  hover:bg-white cursor-pointer hover:drop-shadow-xl ease-in duration-200' style={{boxShadow:`${boxShadowSix}`}} onMouseOver={handleMouseOverSix} onMouseOut={handleMouseOutSix}>
                    <div className='p-5 rounded-md bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark shadow-secondaryTemplate'><HiBell style={{color:"white", width:"30px", height:"30px"}} /></div>
                    <h5 className='text-xl font-bold mt-7 text-gray-900 text-center'>Ads Alert Functionality</h5>
                    <article className='text-lg text-gray-600 mt-4 text-center'>
                        Best Ads alert functionality to get disired ads directly on buyer email
                    </article>
                </div>
                <div className='bg-backgroundGrayOne p-10 rounded-lg flex flex-col items-center justify-center  hover:bg-white cursor-pointer hover:drop-shadow-xl ease-in duration-200' style={{boxShadow:`${boxShadowSix}`}} onMouseOver={handleMouseOverSix} onMouseOut={handleMouseOutSix}>
                    <div className='p-5 rounded-md bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark shadow-secondaryTemplate'><IoChatbubbles style={{color:"white", width:"30px", height:"30px"}} /></div>
                    <h5 className='text-xl font-bold mt-7 text-gray-900 text-center'>Message Functionality</h5>
                    <article className='text-lg text-gray-600 mt-4 text-center'>
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
                    </article>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MangeWebsite