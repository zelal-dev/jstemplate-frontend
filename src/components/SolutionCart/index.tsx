import React from 'react'
import {BsFillEmojiSmileFill} from 'react-icons/bs';

const SolutionCart=()=>{
  return (
    <div className='rounded-lg p-8 bg-white drop-shadow-2xl flex flex-col items-start relative'>
        <div className='w-full 2xl:h-64 lg:h-60 sm:h-56 h-48 rounded-lg mb-6 bg-cartImageBgOne' />
        <span className='text-xs py-1.5 rounded text-white px-2 bg-gradient-to-r from-blueOne to-blueTwo'>MERN Stack</span>
        <h5 className='text-xl mt-5 font-bold text-blueTwo leading-6'>MetaJobs- Job Board Theme</h5>
        <article className='text-gray-600 mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </article>
        <div className='p-1.5 rounded shadow mt-6 flex items-center'>
            <div className=' bg-gradient-to-r from-blueOne to-blueTwo p-2 rounded'><BsFillEmojiSmileFill  style={{color:"white", height:"16px", width:"16px"}}/></div>
             <span className='text-sm text-gray-500 font-bold ml-3'>1234</span>
        </div>
        <div className='text-sm font-semibold text-gray-100 bg-gradient-to-r from-orangeOne to-orangeTwo rounded py-2 px-3 absolute top-12 right-12 drop-shadow-4xl'>Pre-Sale</div>
    </div>
  )
}

export default SolutionCart