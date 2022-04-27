import React from 'react'

const ProjectDetails = () => {
  return (
    <div className='py-6 px-7 bg-white rounded-lg'>
        <div className='flex flex-col-reverse lg:flex-col'>
            <div className='flex items-center justify-between mt-5 lg:mt-0'>
                <h1 className='font-bold text-gray-900 text-xl lg:block hidden'>Project Details</h1>
                <div className='w-2/5 h-1.5 rounded-full bg-[#DDE6F5]'>
                    <div className='h-full w-3/4 bg-gradient-to-br from-blueOne to-blueTwo rounded-full'></div>
                </div>
            </div>
            <div className='lg:mt-6 mt-5 flex flex-col sm:flex-row items-start sm:items-center sm:justify-between'>
                <div>
                    <h1 className='text-gray-900 text-base '>Simple and Awesome Project Title Here</h1>
                    <h3 className='text-gray-600 text-sm mb-3 sm:mb-0'>Web Development</h3>
                </div>
                <h3 className='text-white py-0.5 px-2.5  rounded-full text-xs bg-gradient-to-br from-orangeOne to-orangeTwo inline'>Status</h3>
            </div>
        </div>
        <div className='py-4 px-6 rounded-lg bg-backgroundGrayOne flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6'>
            <div>
                <h1 className='text-gray-500 text-sm'>Start Date</h1>
                <h3 className='text-gray-900 font-bold text-base mt-1'>10-04-2022</h3>
            </div>
            <div className='mt-5 sm:mt-0'>
                <h1 className='text-gray-500 text-sm'>Estimated End Date</h1>
                <h3 className='text-gray-900 font-bold text-base mt-1'>10-04-2022</h3>
            </div>
            <div className='mt-5 sm:mt-0'>
                <h1 className='text-gray-500 text-sm sm:text-right'>Total Budget</h1>
                <h3 className='text-gray-900 font-bold text-base mt-1'>$5,000.00<h3 className='text-white py-0.5 px-2.5 rounded-full text-xs bg-gradient-to-br from-redLight to-redDark inline ml-2'>Due</h3></h3>
            </div>
        </div>
        <div className='mt-12'>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-bold text-gray-900'>Activity</h1>
                <h3 className='text-base text-blueTwo'>Create Milestone</h3>
            </div>
            <div className='mt-6 sm:py-5 sm:px-6 py-4 px-5 bg-backgroundGrayOne border-l-4 border-blueTwo rounded-lg'>
                <h1 className='text-base font-bold text-gray-800'>Project Requirements or Details</h1>
                <article className='my-3 text-sm text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...</article>
                <h4 className='text-sm font-bold text-blueTwo'>See Requirements</h4>
            </div>
            <div className='mt-4 sm:py-5 sm:px-6 py-4 px-5 bg-backgroundGrayOne border-l-4 border-orangeTwo rounded-lg'>
                <h1 className='text-base font-bold text-gray-800'>Project Estimated Budget</h1>
                
                <h4 className='text-xl mt-2 font-bold text-blueTwo'>$5,000.00</h4>
            </div>
            <div className='mt-4 sm:py-5 sm:px-6 py-4 px-5 bg-backgroundGrayOne border-l-4 border-[#0BB55C] rounded-lg'>
                <h1 className='text-base font-bold text-gray-800'>Project Approval Status</h1>
                
                <h4 className='text-sm mt-2 font-bold py-1 px-2 inline-block text-white rounded-md bg-[#0BB55C]'>Approved</h4>
            </div>
            <div className='mt-4 sm:py-5 sm:px-6 py-4 px-5 bg-backgroundGrayOne border-l-4 border-purpleDark rounded-lg flex items-center justify-between'>
                <div>
                    <h1 className='text-base font-bold text-gray-800'>First Milestone</h1>
                    <h4 className='text-xl mt-2 font-bold text-blueTwo'>$5,000.00</h4>
                </div>
                <h3 className='text-base font-bold text-greenDark'>Complete</h3>
            </div>
            <div className='mt-4 sm:py-5 sm:px-6 py-4 px-5 bg-backgroundGrayOne border-l-4 border-[#0BB55C] rounded-lg'>
                <h1 className='text-base font-bold text-gray-800'>Project Started</h1>
            </div>
            <div className='mt-4 sm:py-5 sm:px-6 py-4 px-5 bg-backgroundGrayOne border-l-4 border-purpleDark rounded-lg flex items-center justify-between'>
                <div>
                    <h1 className='text-base font-bold text-gray-800'>Second Milestone</h1>
                    <h4 className='text-xl mt-2 font-bold text-blueTwo'>$5,000.00</h4>
                </div>
                <h3 className='text-base font-bold text-greenDark'>Complete</h3>
            </div>
            <div className='mt-4 sm:py-5 sm:px-6 py-4 px-5 bg-backgroundGrayOne border-l-4 border-[#0BB55C] rounded-lg'>
                <h1 className='text-base font-bold text-gray-800'>Project first phase done</h1>
            </div>
            <div className='mt-4 sm:py-5 sm:px-6 py-4 px-5 bg-backgroundGrayOne border-l-4 border-purpleDark rounded-lg flex items-center justify-between'>
                <div>
                    <h1 className='text-base font-bold text-gray-800'>Third Milestone</h1>
                    <h4 className='text-xl mt-2 font-bold text-blueTwo'>$5,000.00</h4>
                </div>
                <h3 className='md:text-base sm:text-sm text-xs font-bold text-white md:py-4 md:px-6 py-3 px-4 rounded-lg bg-gradient-to-br from-blueOne to-blueTwo'>Pay Now</h3>
            </div>
            <div className='mt-4 sm:py-5 sm:px-6 py-4 px-5 bg-backgroundGrayOne border-l-4 border-[#0BB55C] rounded-lg'>
                <h1 className='text-base font-bold text-gray-800'>Delivered the project</h1>
                <article className='mt-3 text-sm text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...</article>
                <h3 className='text-sm inline-block font-bold text-white py-3 px-4 rounded-lg bg-gradient-to-br from-blueOne to-blueTwo mt-7'>Download Full Project</h3>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails