import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from '../../src/components/Layout'
import Navbar from '../../src/components/Navbar'

const AdminDashboard = () => {
    const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className='w-full'>
        <Layout.AdminDashboard>
        <div className='overflow-y-auto sm:py-7 sm:px-12 p-5 bg-backgroundGrayOne' style={{ height: "calc(100vh - 75px)" }}>
            <h1 className='text-2xl font-bold text-gray-900'>Dashboard</h1>
            <div className='mt-8 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                <DashboardCarts />
            </div>
            <div className='grid grid-cols-12 gap-5 mt-8'>
                <div className='xl:col-span-9 col-span-12'>
                    <div className='w-full rounded-lg bg-white p-6'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-base font-bold text-gray-900'>New Project Proposal</h1>
                            <Link href=""><a className='text-sm font-semibold text-blueTwo'>View All Project</a></Link>
                        </div>
                        <div className='2xl:grid grid-cols-12 mt-6 hidden'>
                            <div className='col-span-1 py-4 pl-4 bg-backgroundGrayOne'>
                                <h3 className='text-sm text-gray-900'>#</h3>
                            </div>
                            <div className='col-span-4 py-4 bg-backgroundGrayOne'>
                                <h3 className='text-sm text-gray-900'>Project Title</h3>
                            </div>
                            <div className='col-span-2 py-4 bg-backgroundGrayOne'>
                                <h3 className='text-sm text-gray-900'>Client</h3>
                            </div>
                            <div className='col-span-2 py-4 bg-backgroundGrayOne'>
                                <h3 className='text-sm text-gray-900'>Price</h3>
                            </div>
                            <div className='col-span-1 py-4 bg-backgroundGrayOne'>
                                <h3 className='text-sm text-gray-900'>Start Date</h3>
                            </div>
                            <div className='col-span-1 py-4 bg-backgroundGrayOne'>
                                <h3 className='text-sm text-gray-900'>End Date</h3>
                            </div>
                            <div className='col-span-1 py-4 bg-backgroundGrayOne'>
                                <h3 className='text-sm text-gray-900'></h3>
                            </div>

                            <div className='col-span-1 pl-4 py-6 my-auto'>
                                <h3 className='text-sm text-gray-900'>1</h3>
                            </div>
                            <div className='col-span-4  py-6 my-auto '>
                                <h3 className='text-base text-blueTwo font-bold'>Simple and Awesome Project Title Here</h3>
                                <h3 className='text-sm text-gray-600'>Web Development</h3>
                            </div>
                            <div className='col-span-2  py-6 my-auto '>
                                <h3 className='text-sm text-blueTwo'>Client Name Here</h3>
                            </div>
                            <div className='col-span-2  py-6 my-auto  flex items-center'>
                                <h3 className='text-sm text-gray-900 mr-4'>$5000</h3>
                                <h3 className='text-greenDark py-0.5 px-2.5 rounded-full text-xs bg-[#e7f8ef]'>Due</h3>
                            </div>
                            <div className='col-span-1  py-6 my-auto '>
                                <h3 className='text-sm text-gray-900'>10-04-2022</h3>
                            </div>
                            <div className='col-span-1  py-6 my-auto '>
                                <h3 className='text-sm text-gray-900'>24-06-2022</h3>
                            </div>
                            <div className='col-span-1 px-4 py-6 my-auto '>
                                <h3 className='text-sm font-semibold text-blueTwo'>View Project</h3>
                            </div>
                            <div className='col-span-12'>
                                <hr className='w-full bg-backgroundGrayOne'/>
                            </div>
                            
                            
                        </div>
                        <hr className='w-full mt-6 block 2xl:hidden' />
                        <div className='grid grid-cols-12 container md:mt-5 mt-4 2xl:hidden'>
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
                                <h3 className='text-base text-blueTwo font-bold'>Simple and Awesome Project Title Here</h3>
                                <h3 className='text-sm text-gray-600'>Web Development</h3>
                            </div>
                            <div className='col-span-4 p-4 '>
                                <h3 className='text-sm text-gray-900'>Client</h3>
                            </div>
                            <div className='col-span-8 p-4 '>
                                <h3 className='text-sm text-blueTwo'>Client Name Here</h3>
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
                            </div>
                            <div className='col-span-8 p-4 '>
                                <h3 className='text-sm font-semibold text-blueTwo'>View Project</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-3 md:col-span-6 sm:col-span-9 col-span-12'>
                    <div className='rounded-lg bg-white p-6'>
                        <div className='flex items-center justify-between'>
                            <h3 className='text-base text-gray-800 font-bold'>New User</h3>
                            <h3 className='text-base text-gray-800 font-bold'>12</h3>
                        </div>
                        <div className='mt-5'>
                            {sample.map((items, index)=>(
                                <UserCart key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout.AdminDashboard>
    </div>
  )
}

export default AdminDashboard

const DashboardCarts = () =>{
    return(
        <>
        <div className='bg-white rounded-lg shadow-md p-5 flex items-center'>
            <Image src="/preSaleDash.svg" alt='' width="52" height="52" />
            <div className='ml-5'>
                <h3 className='text-sm text-gray-800'>Total Pre-Sale</h3>
                <h3 className='text-xl font-bold text-blueTwo'>1234</h3>
            </div>
        </div>
        <div className='bg-white rounded-lg shadow-md p-5 flex items-center'>
            <Image src="/saleDash.svg" alt='' width="52" height="52" />
            <div className='ml-5'>
                <h3 className='text-sm text-gray-800'>Total Sale</h3>
                <h3 className='text-xl font-bold text-orangeTwo'>1234</h3>
            </div>
        </div>
        <div className='bg-white rounded-lg shadow-md p-5 flex items-center'>
            <Image src="/userDash.svg" alt='' width="52" height="52" />
            <div className='ml-5'>
                <h3 className='text-sm text-gray-800'>Total Users</h3>
                <h3 className='text-xl font-bold text-purpleDark'>500</h3>
            </div>
        </div>
        <div className='bg-white rounded-lg shadow-md p-5 flex items-center'>
            <Image src="/ticketDash.svg" alt='' width="52" height="52" />
            <div className='ml-5'>
                <h3 className='text-sm text-gray-800'>Open Ticket</h3>
                <h3 className='text-xl font-bold text-greenDark'>500</h3>
            </div>
        </div>
        <div className='bg-white rounded-lg shadow-md p-5 flex items-center'>
            <Image src="/projectDash.svg" alt='' width="52" height="52" />
            <div className='ml-5'>
                <h3 className='text-sm text-gray-800'>Active project</h3>
                <h3 className='text-xl font-bold text-redDark'>500</h3>
            </div>
        </div>
        <div className='bg-white rounded-lg shadow-md p-5 flex items-center'>
            <Image src="/productDash.svg" alt='' width="52" height="52" />
            <div className='ml-5'>
                <h3 className='text-sm text-gray-800'>Total Product</h3>
                <h3 className='text-xl font-bold text-redDark'>500</h3>
            </div>
        </div>
        </>
    )
}

const UserCart = () =>{
    return(
        <div className='flex items-center border-b-2 border-backgroundGrayOne p-4'>
            <div className='text-base font-bold text-white py-1.5 px-3 rounded-full bg-blueTwo mr-3'>H</div>
            <div>
                <h1 className='text-base text-gray-800'>User Name Here</h1>
                <h1 className='text-xs text-gray-500'>Client</h1>
            </div>
        </div>
    )
}