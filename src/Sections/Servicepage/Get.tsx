import React from 'react'
import {IoChatbubbles} from 'react-icons/io5'

const Get=()=> {
    const sample = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className='container mx-auto'>
        <div className='xl:py-24 sm:py-16 py-14 flex flex-col items-center justify-center'>
            <h1 className='2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold lg:mt-4 sm:mt-3 mt-2 text-gray-900'>What You Will Get</h1>
            <article className='mt-5 text-gray-600 md:w-1/3 w-3/5 text-center xl:text-lg md:text-base text-sm'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text dummy text
            </article>
            <div className='mt-16 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-5 sm:px-0 gap-8 container mx-auto'>
                {sample.map((item, index)=>(
                    <GetCart key={index} />
                ))}
            </div>
            <button className='text-base font-semibold shadow-3xl mt-16 text-gray-100 flex items-center bg-gradient-to-r from-greenSecondaryLight to-greenSecondaryDark py-4 px-6 rounded-lg'><IoChatbubbles className='mr-4' /> Start a Project</button>
        </div>
    </div>
  )
}

export default Get

const GetCart = () =>{
    return(
        <div className='p-6 rounded-lg border border-gray-300 flex items-start'>
           <div className='xl:w-10 sm:w-12 w-10 h-10 rounded-md bg-templateColor mr-6' />
           <p className='text-sm text-gray-700'>Lorem Ipsum is simply industry dummy text</p>
        </div>
    )
}