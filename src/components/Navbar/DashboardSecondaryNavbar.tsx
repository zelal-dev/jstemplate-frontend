import Link from 'next/link'
import React from 'react'
import {RiUserFill} from "react-icons/ri"
import {FaShoppingCart, FaReceipt} from 'react-icons/fa'
import {HiOutlineDownload} from 'react-icons/hi'
import {BsFillFileDiffFill} from "react-icons/bs"
import {VscListSelection} from 'react-icons/vsc'
import { useRouter } from 'next/router'

const DashboardSecondaryNavbar = () => {
  const router = useRouter()
  // const style = {
  //   marginRight: 10,
  //   color: router.asPath === "/dashboard" ? 'text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center mr-3' : 'text-sm text-gray-600 p-4 rounded-lg flex items-center mr-3',
  // }
  const styleDash = router.asPath === "/dashboard" ? 'text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center mr-3' : 'text-sm text-gray-600 p-4 rounded-lg flex items-center mr-3';
  const stylePre = router.asPath === "/dashboard/presale" ? 'text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center mr-3' : 'text-sm text-gray-600 p-4 rounded-lg flex items-center mr-3';
  const styleDownloads = router.asPath === "/dashboard/downloads" ? 'text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center mr-3' : 'text-sm text-gray-600 p-4 rounded-lg flex items-center mr-3';
  const styleTickets = router.asPath === "/dashboard/tickets" ? 'text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center mr-3' : 'text-sm text-gray-600 p-4 rounded-lg flex items-center mr-3';
  const styleProjects = router.asPath === "/dashboard/projects" ? 'text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center mr-3' : 'text-sm text-gray-600 p-4 rounded-lg flex items-center mr-3';
  return (
    <div className='bg-white mt-1 drop-shadow-sm'>
        <div className='container mx-auto flex items-center justify-between py-2 px-5 sm:px-0'>
          <VscListSelection className='w-6 h-6 block lg:hidden' />
            <div className=' items-center hidden lg:flex'>
              <Link href="/dashboard"><a className={`${styleDash}`}><RiUserFill className='w-5 h-5 mr-4' /> <span>My Dashboard</span></a></Link>
              <Link href="/dashboard/presale"><a className={`${stylePre}`}><FaShoppingCart className='w-5 h-5 mr-4' /> <span>Pre-Sale</span></a></Link>
              <Link href="/dashboard/downloads"><a className={`${styleDownloads}`}><HiOutlineDownload className='w-5 h-5 mr-4' /> <span>Downloads</span></a></Link>
              <Link href="/dashboard/tickets"><a className={`${styleTickets}`}><FaReceipt className='w-5 h-5 mr-4' /> <span>Tickets</span></a></Link>
              <Link href="/dashboard/projects"><a className={`${styleProjects}`}><BsFillFileDiffFill className='w-5 h-5 mr-4' /> <span>Projects</span></a></Link>
            </div>
            <Link href=""><a className='text-sm text-white p-4 rounded-lg bg-gradient-to-br from-blueOne to-blueTwo flex items-center '>Start Your Project Free</a></Link>

        </div>
    </div>
  )
}

export default DashboardSecondaryNavbar