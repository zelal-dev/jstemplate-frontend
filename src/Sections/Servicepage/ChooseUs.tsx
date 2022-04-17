import React from 'react'
import ServiceChooseCart from '../../components/ServiceChooseCart'

const ChooseUs=()=> {
    const sample = [1, 2, 3, 4, 5, 6]
  return (
    <div className='container mx-auto'>
        <div className='xl:py-24 sm:py-16 py-14 flex flex-col items-center justify-center'>
            <h1 className='2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold lg:mt-4 sm:mt-3 mt-2 text-gray-900'>Why Choose Us ?</h1>
            <article className='mt-5 text-gray-600 md:w-1/3 w-3/5 text-center xl:text-lg md:text-base text-sm'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text dummy text
            </article>
            <div className='mt-16 grid lg:grid-cols-3 sm:grid-cols-2 gap-8 container mx-auto px-5 sm:px-0'>
                {sample.map((item, index)=>(
                    <div className='border border-grayLight hover:border-templateColor rounded-lg ease-in duration-200' key={index}><ServiceChooseCart /></div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ChooseUs