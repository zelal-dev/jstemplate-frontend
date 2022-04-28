import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { RiAppsLine, RiUserFill } from 'react-icons/ri'
import {CgBox} from "react-icons/cg"
import Navbar from './../Navbar'
import { IoBagRemoveOutline } from 'react-icons/io5'
import { FiUsers } from 'react-icons/fi'
import { BsFilePlus, BsFillFileDiffFill } from 'react-icons/bs'
import { FaReceipt } from 'react-icons/fa'
import Image from 'next/image'
import { ImCross } from 'react-icons/im'

const AdminDashboard = ({children}:{children:any}) => {
    const router = useRouter()
    const [mobileSidebarVisibilty, setMobileSidebarVisibility] = useState<string>("-left-full")
    const [mobileSidebarBack, setMobileSidebarBack] = useState<string>("hidden")

    const handleSidebar = () =>{
        if(mobileSidebarVisibilty === "-left-full"){
            setMobileSidebarVisibility("left-0")
            setMobileSidebarBack("fixed")
        }
        else{
            setMobileSidebarVisibility("-left-full")
            setMobileSidebarBack("hidden")
        }
    }

    const styleDash = router.asPath === "/adminDashboard" ? 'text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center' : 'text-sm text-gray-700 p-4 rounded-lg flex items-center';
    const styleClient = router.asPath === "/adminDashboard/clients" ? 'text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center mt-1' : 'text-sm text-gray-700 p-4 rounded-lg flex items-center mt-1';
    const styleLeads = router.asPath === "/adminDashboard/leads" ? 'text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center' : 'text-sm text-gray-700 p-4 rounded-lg flex items-center';
    const styleProducts = router.asPath === "/adminDashboard/products" ? 'text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center' : 'text-sm text-gray-700 p-4 rounded-lg flex items-center';
    const styleProjects = ((router.asPath === "/adminDashboard/projects") || (router.asPath === "/adminDashboard/projects/details")) ? 'text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center' : 'text-sm text-gray-700 p-4 rounded-lg flex items-center';
    const styleTickets = router.asPath === "/adminDashboard/tickets" ? 'text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center' : 'text-sm text-gray-700 p-4 rounded-lg flex items-center';

  return (
    <div>
        <Navbar.AdminNavbar handleSidebar={handleSidebar} />
        <div className='grid grid-cols-12 overflow-hidden'>
            <div className='col-span-2 lg:block hidden border-r border-[#E7ECF3]'>
                <div className=" overflow-y-auto bg-white p-5" style={{ height: "calc(100vh - 74px)" }}>
                    <h2 className='text-xs text-gray-500'>MENU</h2>
                    <div className='mt-3'>
                        <Link href="/adminDashboard"><a className={`${styleDash}`}><RiAppsLine className='w-5 h-5 mr-4' /> <span>My Dashboard</span></a></Link>
                        <Link href="/adminDashboard/clients"><a className={`${styleClient}`}><IoBagRemoveOutline className='w-5 h-5 mr-4' /> <span>Client</span></a></Link>
                        <Link href="/adminDashboard/leads"><a className={`${styleLeads}`}><FiUsers className='w-5 h-5 mr-4' /> <span>Leads</span></a></Link>
                        <Link href="/adminDashboard/products"><a className={`${styleProducts}`}><CgBox className='w-5 h-5 mr-4' /> <span>Products</span></a></Link>
                        <Link href="/adminDashboard/projects"><a className={`${styleProjects}`}><BsFilePlus className='w-5 h-5 mr-4' /> <span>Projects</span></a></Link>
                        <Link href="/adminDashboard/tickets"><a className={`${styleTickets}`}><FaReceipt className='w-5 h-5 mr-4' /> <span>Tickets</span></a></Link>
                    </div>
                </div>
            </div>
            <div className='lg:col-span-10 col-span-12'>
                {children}
            </div>
        </div>
        <div className={`bg-gray-800 ${mobileSidebarBack} duration-150 top-0 left-0 w-full h-screen opacity-50`} />
        <div className={`fixed top-0 ${mobileSidebarVisibilty} duration-150 md:w-2/5 sm:w-2/4 w-full bg-white h-screen`}>
            <div className='p-5'>
                <div className='flex items-center justify-between'>
                    <Link href="/"><a><Image src="/brandLogo.svg" alt='' width="136" height="42" /></a></Link>
                    <div className='cursor-pointer' onClick={handleSidebar}>
                        <ImCross className='w-3 h-3 text-gray-500' />
                    </div>
                </div>
                <hr className='w-full text-cartImageBgOne mt-5' />
                <div className='mt-5'>
                    <Link href="/adminDashboard"><a className={`${styleDash}`}><RiAppsLine className='w-5 h-5 mr-4' /> <span>My Dashboard</span></a></Link>
                    <Link href="/adminDashboard/client"><a className={`${styleClient}`}><IoBagRemoveOutline className='w-5 h-5 mr-4' /> <span>Client</span></a></Link>
                    <Link href="/adminDashboard/leads"><a className={`${styleLeads}`}><FiUsers className='w-5 h-5 mr-4' /> <span>Leads</span></a></Link>
                    <Link href="/adminDashboard/products"><a className={`${styleProducts}`}><CgBox className='w-5 h-5 mr-4' /> <span>Products</span></a></Link>
                    <Link href="/adminDashboard/projects"><a className={`${styleProjects}`}><BsFilePlus className='w-5 h-5 mr-4' /> <span>Projects</span></a></Link>
                    <Link href="/adminDashboard/tickets"><a className={`${styleTickets}`}><FaReceipt className='w-5 h-5 mr-4' /> <span>Tickets</span></a></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard