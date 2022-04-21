import React from 'react'
import {BsFillEmojiSmileFill} from 'react-icons/bs';

const SolutionCart=()=>{
  return (
    <div className='rounded-lg p-7 bg-white  flex flex-col items-start relative group'>
        <div className='w-full 2xl:h-64 lg:h-60 sm:h-56 h-48 rounded-lg mb-6 bg-cartImageBgOne' />
        <span className='text-xs py-1.5 rounded text-white px-2 bg-gradient-to-br from-blueOne to-blueTwo shadow-3xl'>MERN Stack</span>
        <h5 className='text-xl mt-5 font-bold text-gray-900 group-hover:text-blueTwo duration-200 leading-6'>MetaJobs- Job Board Theme</h5>
        <article className='text-gray-600 mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </article>
        <div className='p-1.5 rounded shadow mt-6 flex items-center'>
            <div className=' bg-gradient-to-br from-blueOne to-blueTwo p-2 rounded'><BsFillEmojiSmileFill  style={{color:"white", height:"16px", width:"16px"}}/></div>
             <span className='text-sm text-gray-500 font-bold ml-3'>1234</span>
        </div>
        <div className='text-sm font-semibold text-gray-100 bg-gradient-to-br from-orangeOne to-orangeTwo rounded py-2 px-3 absolute top-12 right-12 shadow-4xl'>Pre-Sale</div>
    </div>
  )
}

export default SolutionCart