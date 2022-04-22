import React from 'react'
import {IoChatbubbles} from 'react-icons/io5'
const Heading=()=> {
    const sample = [1, 2, 3, 4, 5, 6, 7]
  return (
    <div className='bg-backgroundGrayOne'>
        <div className='container mx-auto'>
            <div className='xl:py-24 sm:py-16 py-14 flex flex-col items-center justify-center'>
                <h1 className='2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold lg:mt-4 sm:mt-3 mt-2 text-gray-900'>Simple Heading Text</h1>
                <article className='mt-5 text-gray-600 md:w-1/3 w-3/5 text-center xl:text-lg md:text-base text-sm'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text dummy text
                </article>
                <div className='flex flex-col sm:flex-row px-5 sm:px-0 items-center justify-between container mt-16'>
                    <div className='xl:w-1/4 sm:w-2/5 w-full 2xl:mr-36 xl:mr-36 md:mr-16 sm:mr-5   flex flex-col'>
                        {sample.map((item, index)=>(
                            <div key={index} className='hover:bg-white group hover:shadow-md  flex items-center p-5 rounded-lg mb-2 ease-in duration-200'>
                                <div className='w-5 h-5  bg-gray-900 mr-6 block group-hover:hidden duration-200' />
                                <div className='w-5 h-5 hidden group-hover:block bg-gradient-to-br from-greenSecondaryLight to-greenSecondaryDark mr-6 ' />
                                <h3 className='text-base text-gray-900'>Product Feature Title Here</h3>
                            </div>
                        ))}
                    </div>
                    <div className='xl:w-3/4 sm:w-3/5 w-full sm:h-96 sm:py-64 h-40 bg-white rounded-lg shadow-xl mt-8 sm:mt-0' />
                </div>
                <button className='text-base font-semibold drop-shadow-lg mt-16 text-gray-100 flex items-center shadow-green bg-gradient-to-br from-greenSecondaryLight to-greenSecondaryDark py-4 px-6 rounded-lg'><IoChatbubbles className='mr-4' /> Start a Project</button>
            </div>
        </div>
    </div>
  )
}

export default Heading