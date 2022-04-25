import React from 'react'
import Navbar from './../../src/components/Navbar'
import {FaShoppingCart, FaReceipt} from 'react-icons/fa'
import {BsFillFileDiffFill, BsCheckLg} from 'react-icons/bs';
import {HiOutlineDownload} from 'react-icons/hi';

const Dashboard = () => {
  return (
    <div className='bg-backgroundGrayOne min-h-screen'>
        <Navbar.DashboardPrimaryNavbar />
        <Navbar.DashboardSecondaryNavbar />
        <div className='container mx-auto py-10 px-5 sm:px-0'>
            <h2 className='text-2xl font-bold text-gray-900'>Dashboard</h2>
            <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 container mt-10'>
                <DashboardPreCart />
                <DashboardTicketCart />
                <DashboardProjectCart />
                <DashboardCompleteCart />
                <DashboardDownloadCart />
            </div>
            <div className='mt-8 p-7 bg-white rounded-lg border border-cartImageBgOne shadow-sm'>
                <h1 className='text-xl font-bold text-gray-900'>Open Project</h1>
                <div className='lg:grid grid-cols-12 container mt-8 hidden'>
                    <div className='col-span-1 p-4 bg-backgroundGrayOne'>
                        <h3 className='text-sm text-gray-900'>#</h3>
                    </div>
                    <div className='col-span-4 p-4 bg-backgroundGrayOne'>
                        <h3 className='text-sm text-gray-900'>Project Title</h3>
                    </div>
                    <div className='col-span-2 p-4 bg-backgroundGrayOne'>
                        <h3 className='text-sm text-gray-900'>Price</h3>
                    </div>
                    <div className='col-span-1 p-4 bg-backgroundGrayOne'>
                        <h3 className='text-sm text-gray-900'>Start Date</h3>
                    </div>
                    <div className='col-span-1 p-4 bg-backgroundGrayOne'>
                        <h3 className='text-sm text-gray-900'>End Date</h3>
                    </div>
                    <div className='col-span-2 p-4 bg-backgroundGrayOne'>
                        <h3 className='text-sm text-gray-900'>Progress</h3>
                    </div>
                    <div className='col-span-1 p-4 bg-backgroundGrayOne'>
                        <h3 className='text-sm text-gray-900'>Status</h3>
                    </div>

                    <div className='col-span-1 px-4 py-6 my-auto'>
                        <h3 className='text-sm text-gray-900'>1</h3>
                    </div>
                    <div className='col-span-4 px-4 py-6 my-auto '>
                        <h3 className='text-base text-gray-900 font-bold'>Simple and Awesome Project Title Here</h3>
                        <h3 className='text-sm text-gray-600'>Web Development</h3>
                    </div>
                    <div className='col-span-2 px-4 py-6 my-auto  flex items-center'>
                        <h3 className='text-sm text-gray-900 mr-4'>$5000</h3>
                        <h3 className='text-greenDark py-0.5 px-2.5 rounded-full text-xs bg-[#e7f8ef]'>Due</h3>
                    </div>
                    <div className='col-span-1 px-4 py-6 my-auto '>
                        <h3 className='text-sm text-gray-900'>10-04-2022</h3>
                    </div>
                    <div className='col-span-1 px-4 py-6 my-auto '>
                        <h3 className='text-sm text-gray-900'>24-06-2022</h3>
                    </div>
                    <div className='col-span-2 px-4 py-6 my-auto '>
                        <div className='w-full h-1.5 rounded-full bg-backgroundGrayOne'>
                            <div className='h-full w-3/4 bg-gradient-to-br from-blueOne to-blueTwo rounded-full'></div>
                        </div>
                    </div>
                    <div className='col-span-1 px-4 py-6 my-auto '>
                        <h3 className='text-white py-0.5 px-2.5 rounded-full text-xs bg-gradient-to-br from-orangeOne to-orangeTwo inline'>Status</h3>
                    </div>
                    <div className='col-span-12'>
                        <hr className='w-full bg-backgroundGrayOne'/>
                    </div>
                    
                    <div className='col-span-1 px-4 py-6 my-auto'>
                        <h3 className='text-sm text-gray-900'>2</h3>
                    </div>
                    <div className='col-span-4 px-4 py-6 my-auto '>
                        <h3 className='text-base text-gray-900 font-bold'>Simple and Awesome Project Title Here</h3>
                        <h3 className='text-sm text-gray-600'>Web Development</h3>
                    </div>
                    <div className='col-span-2 px-4 py-6 my-auto  flex items-center'>
                        <h3 className='text-sm text-gray-900 mr-4'>$5000</h3>
                        <h3 className='text-redDark py-0.5 px-2.5 rounded-full text-xs bg-[#fff1ec]'>Due</h3>
                    </div>
                    <div className='col-span-1 px-4 py-6 my-auto '>
                        <h3 className='text-sm text-gray-900'>10-04-2022</h3>
                    </div>
                    <div className='col-span-1 px-4 py-6 my-auto '>
                        <h3 className='text-sm text-gray-900'>24-06-2022</h3>
                    </div>
                    <div className='col-span-2 px-4 py-6 my-auto '>
                        <div className='w-full h-1.5 rounded-full bg-backgroundGrayOne'>
                            <div className='h-full w-3/4 bg-gradient-to-br from-blueOne to-blueTwo rounded-full'></div>
                        </div>
                    </div>
                    <div className='col-span-1 px-4 py-6 my-auto '>
                        <h3 className='text-white py-0.5 px-2.5 rounded-full text-xs bg-gradient-to-br from-purpleLight to-purpleDark inline'>Status</h3>
                    </div>
                    <div className='col-span-12'>
                        <hr className='w-full bg-backgroundGrayOne'/>
                    </div>
                </div>

                <hr className='w-full mt-10 block lg:hidden' />
                <div className='grid grid-cols-12 container md:mt-5 mt-4 lg:hidden'>
                    <div className='col-span-4 p-4 '>
                        <h3 className='text-sm text-gray-900'>#</h3>
                    </div>
                    <div className='col-span-8 p-4 '>
                        <h3 className='text-sm text-gray-900'>1</h3>
                    </div>
                    <div className='col-span-4 p-4 '>
                        <h3 className='text-sm text-gray-900'>Project Title</h3>
                    </div>
                    <div className='col-span-8 p-4 '>
                        <h3 className='text-base text-gray-900 font-bold'>Simple and Awesome Project Title Here</h3>
                        <h3 className='text-sm text-gray-600'>Web Development</h3>
                    </div>
                    <div className='col-span-4 p-4 '>
                        <h3 className='text-sm text-gray-900'>Price</h3>
                    </div>
                    <div className='col-span-8 p-4 flex items-center'>
                        <h3 className='text-sm text-gray-900 mr-4'>$5000</h3>
                        <h3 className='text-greenDark py-0.5 px-2.5 rounded-full text-xs bg-[#e7f8ef]'>Due</h3>
                    </div>
                    <div className='col-span-4 p-4 '>
                        <h3 className='text-sm text-gray-900'>Start Date</h3>
                    </div>
                    <div className='col-span-8 p-4 '>
                        <h3 className='text-sm text-gray-900'>10-04-2022</h3>
                    </div>
                    <div className='col-span-4 p-4 '>
                         <h3 className='text-sm text-gray-900'>End Date</h3>
                    </div>
                    <div className='col-span-8 p-4 '>
                        <h3 className='text-sm text-gray-900'>10-04-2022</h3>
                    </div>
                    <div className='col-span-4 p-4 '>
                        <h3 className='text-sm text-gray-900'>Progress</h3>
                    </div>
                    <div className='col-span-8 p-4 '>
                        <div className='w-full h-1.5 rounded-full bg-backgroundGrayOne'>
                            <div className='h-full w-3/4 bg-gradient-to-br from-blueOne to-blueTwo rounded-full'></div>
                        </div>
                    </div>
                    <div className='col-span-4 p-4 '>
                        <h3 className='text-sm text-gray-900'>Status</h3>
                    </div>
                    <div className='col-span-8 p-4 '>
                        <h3 className='text-white py-0.5 px-2.5 rounded-full text-xs bg-gradient-to-br from-purpleLight to-purpleDark inline'>Status</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard

const DashboardPreCart = () =>{
    return(
        <div className='bg-white p-6 rounded-lg flex items-center border border-cartImageBgOne shadow-sm'>
            <div className='p-4 rounded-full bg-[#e6f0fe] mr-5'>
                <FaShoppingCart className='w-5 h-5 text-blueTwo'/>
            </div>
            <div>
                <h3 className='text-gray-800 text-sm'>Pre-Sale</h3>
                <h3 className='text-xl font-bold text-blueTwo mt-1'>2</h3>
            </div>
        </div>
    )
}
const DashboardTicketCart = () =>{
    return(
        <div className='bg-white p-6 rounded-lg flex items-center border border-cartImageBgOne shadow-sm'>
            <div className='p-4 rounded-full bg-[#fff1ec] mr-5'>
                <FaReceipt className='w-5 h-5 text-orangeTwo'/>
            </div>
            <div>
                <h3 className='text-gray-800 text-sm'>Open Ticket</h3>
                <h3 className='text-xl font-bold text-orangeTwo mt-1'>2</h3>
            </div>
        </div>
    )
}

const DashboardProjectCart = () =>{
    return(
        <div className='bg-white p-6 rounded-lg flex items-center border border-cartImageBgOne shadow-sm'>
            <div className='p-4 rounded-full bg-[#f2edfe] mr-5'>
                <BsFillFileDiffFill className='w-5 h-5 text-purpleDark'/>
            </div>
            <div>
                <h3 className='text-gray-800 text-sm'>Open Project</h3>
                <h3 className='text-xl font-bold text-purpleDark mt-1'>2</h3>
            </div>
        </div>
    )
}
const DashboardCompleteCart = () =>{
    return(
        <div className='bg-white p-6 rounded-lg flex items-center border border-cartImageBgOne shadow-sm'>
            <div className='p-4 rounded-full bg-[#e7f8ef] mr-5'>
                <div className='p-1.5 rounded-full bg-gradient-to-br from-greenLight to-greenDark'><BsCheckLg className='w-2 h-2 text-white'/></div>
            </div>
            <div>
                <h3 className='text-gray-800 text-sm'>Complete Project</h3>
                <h3 className='text-xl font-bold text-greenDark mt-1'>2</h3>
            </div>
        </div>
    )
}

const DashboardDownloadCart = () =>{
    return(
        <div className='bg-white p-6 rounded-lg flex items-center border border-cartImageBgOne shadow-sm'>
            <div className='p-4 rounded-full bg-[#ffedee] mr-5'>
                <HiOutlineDownload className='w-5 h-5 text-redDark'/>
            </div>
            <div>
                <h3 className='text-gray-800 text-sm'>Download Projects</h3>
                <h3 className='text-xl font-bold text-redDark mt-1'>2</h3>
            </div>
        </div>
    )
}

// #e6f0fe
// #fff1ec
// #f2edfe
// #e7f8ef
// #ffedee