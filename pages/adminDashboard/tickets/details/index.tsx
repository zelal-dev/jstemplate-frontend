
import Layout from '../../../../src/components/Layout'
import React, { useState } from 'react'
import {FiSend, FiSmile} from "react-icons/fi"
import {AiFillStar, AiOutlineFile} from "react-icons/ai"
import Image from 'next/image';
import { BiLinkAlt } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';

const TicketDetails = () => {
    const [modal, setModal] = useState<string>('hidden');
    const [layout, setLayout] = useState<string>('block');

    const handleTicketModal = () =>{
        if(modal==="hidden"){
            setModal("flex")
            setLayout("fixed")
        }
        else{
            setModal("hidden")
            setLayout("block")
        }
    }
  return (
    <>
        <Layout.AdminDashboard>
            <div className='md:py-7 md:px-12 p-4 bg-backgroundGrayOne overflow-y-auto' style={{ height: "calc(100vh - 75px)" }}>
                <div className='grid grid-cols-12 gap-7'>
                    <div className='md:col-span-3 col-span-12'>
                        <div className='p-6 bg-white rounded-lg border border-cartImageBgOne shadow-sm'>
                            <h3 className='text-base text-gray-900'>Ticket Subject Here Lorem Ipsum Simple Dummy Text</h3>
                            <hr className='w-full my-6 text-cartImageBgOne' />
                            <div className='flex flex-row md:flex-col lg:flex-row items-center justify-between'>
                                <h2 className='text-sm font-bold text-gray-600'>Create Date</h2>
                                <h2 className='text-sm text-blueTwo'>User Name Here</h2>
                            </div>
                            <div className='flex flex-row md:flex-col lg:flex-row items-center justify-between mt-3'>
                                <h2 className='text-sm font-bold text-gray-600'>Created By</h2>
                                <h2 className='text-sm text-gray-700'>12 June 2022</h2>
                            </div>
                            <div className='flex flex-row md:flex-col lg:flex-row items-center justify-between mt-3'>
                                <h2 className='text-sm font-bold text-gray-600'>Ticket Category</h2>
                                <h2 className='text-sm text-gray-700'>Category Name Here</h2>
                            </div>
                            <div className='flex flex-row md:flex-col lg:flex-row items-center justify-between mt-3'>
                                <h3 className='text-sm text-gray-600'>Status</h3>
                                <h5 className='bg-gradient-to-br text-xs md:mt-2 lg:mt-0 from-greenLight to-greenDark py-0.5 px-2.5 rounded-full text-gray-100'>Open</h5>
                            </div>
                            <hr className='w-full my-6 text-cartImageBgOne' />
                            <div className='flex 2xl:flex-row flex-col 2xl:items-center 2xl:justify-between'>
                                <button className='text-sm text-gray-900 py-2.5 px-2.5 rounded-md bg-gray-200'>Send Give Review Message</button>
                                <button className='text-sm text-white py-2.5 px-2.5 rounded-md bg-[#FA4F58] mt-3 2xl:mt-0'>Close Ticket</button>
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-9 col-span-12'>
                        <div className='grid grid-cols-12 p-8 gap-5 bg-white rounded-lg border border-cartImageBgOne shadow-sm mb-4'>
                            <div className='col-span-1'>
                                <Image src="/manRound.svg" alt='' width="50" height="50" />
                            </div>
                            <div className='col-span-11'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h2 className='text-base font-bold text-gray-900'>User Name Here - Reply</h2>
                                        <h2 className='text-sm text-gray-600 mt-0.5'>Saturday 1:20 PM</h2>
                                    </div>
                                    <h2 className='text-sm text-gray-600'>12 April 2022</h2>
                                </div>
                                <article className='text-sm text-gray-600 mt-5'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </article>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 p-8 gap-5 bg-white rounded-lg border border-cartImageBgOne shadow-sm mb-4'>
                            <div className='col-span-1'>
                                <Image src="/manRound.svg" alt='' width="50" height="50" />
                            </div>
                            <div className='col-span-11'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h2 className='text-base font-bold text-gray-900'>User Name Here - Reply</h2>
                                        <h2 className='text-sm text-gray-600 mt-0.5'>Saturday 1:20 PM</h2>
                                    </div>
                                    <h2 className='text-sm text-gray-600'>12 April 2022</h2>
                                </div>
                                <article className='text-sm text-gray-600 mt-5'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                </article>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 p-8 gap-5 bg-white rounded-lg border border-cartImageBgOne shadow-sm mb-4'>
                            <div className='col-span-1'>
                                <Image src="/manRound.svg" alt='' width="50" height="50" />
                            </div>
                            <div className='col-span-11'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h2 className='text-base font-bold text-gray-900'>User Name Here - Reply</h2>
                                        <h2 className='text-sm text-gray-600 mt-0.5'>Saturday 1:20 PM</h2>
                                    </div>
                                    <h2 className='text-sm text-gray-600'>12 April 2022</h2>
                                </div>
                                <article className='text-sm text-gray-600 mt-5'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                </article>
                                <button className='text-sm py-3 px-6 rounded-lg text-gray-100 bg-gradient-to-br from-blueOne to-blueTwo mt-5' onClick={handleTicketModal}>Write a Review</button>
                            </div>
                        </div>
                        <div className='p-4 bg-white rounded-lg border border-cartImageBgOne shadow-sm mt-4'>
                            <form action="">
                                <input type="text" className='border-none outline-none text-sm' placeholder='Write your message...' />
                                <div className='flex items-end justify-between'>
                                    <div className='flex items-center'>
                                        <FiSmile className='w-4 h-4 cursor-pointer text-gray-700 mr-4' />
                                        <AiOutlineFile className='w-4 h-4 cursor-pointer text-gray-700 mr-4' />
                                        <BiLinkAlt className='w-4 h-4 cursor-pointer text-gray-700' />
                                    </div>
                                    <button className='text-sm text-white py-3 px-5 rounded-md bg-[#FF7043] flex items-center'><span className='hidden sm:block'>Submit</span><FiSend className='w-[1.125rem] h-[1.125rem] sm:ml-4'/></button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
                <div className={`fixed ${modal} duration-300 w-full h-screen bg-gray-900 top-0 left-0 right-0 opacity-50`} />
                <div className={`fixed w-full duration-300 h-screen ${modal} justify-center items-center top-0 left-0 right-0`}>
                    <div className='xl:p-12 lg:p-10 md:p-8 sm:p-7 p-6 bg-white rounded-lg relative'>
                        <h1 className='text-2xl font-bold text-gray-900 sm:text-center'>Give Your Feedback</h1>
                        <form action="" className='mt-7 flex flex-col items-center'>
                            <div className='w-full flex items-center'>
                                <div className='p-1.5 rounded-md bg-gradient-to-br from-greenLight to-greenDark mr-1.5'><AiFillStar className='text-sm text-white' /></div>
                                <div className='p-1.5 rounded-md bg-gradient-to-br from-greenLight to-greenDark mr-1.5'><AiFillStar className='text-sm text-white' /></div>
                                <div className='p-1.5 rounded-md bg-gradient-to-br from-greenLight to-greenDark mr-1.5'><AiFillStar className='text-sm text-white' /></div>
                                <div className='p-1.5 rounded-md bg-gradient-to-br from-greenLight to-greenDark mr-1.5'><AiFillStar className='text-sm text-white' /></div>
                                <div className='p-1.5 rounded-md bg-gray-300 mr-1.5'><AiFillStar className='text-sm text-white' /></div>
                            </div>
                            <textarea name="" id="" className='h-40 xl:w-96 lg:w-80 w-72 py-4 px-5 rounded-lg border border-[#DDE6F5] outline-none mt-4' placeholder='Write your message...'></textarea>
                            <input type="button" value="Submit" className='text-sm py-3 px-6 rounded-lg text-gray-100 bg-gradient-to-br from-blueOne to-blueTwo mt-6'/>
                        </form>
                        <div className='absolute top-4 right-4 cursor-pointer' onClick={handleTicketModal}>
                            <ImCross className='w-3 h-3 text-gray-500' />
                        </div>
                    </div>
                </div>
            </div>
        </Layout.AdminDashboard>
    </>
  )
}

export default TicketDetails