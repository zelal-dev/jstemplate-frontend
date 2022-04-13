import React from 'react'
import TestimonialsCart from '../../components/TestimonialsCart'

const Testimonials=()=> {
    const sample = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className='bg-backgroundGrayOne'>
        <div className='container mx-auto'>
            <div className='xl:py-24 sm:py-16 py-14 flex flex-col items-center justify-center'>
                <h5 className='xl:text-base md:text-sm text-xs text-secondary'>Testimonials</h5>
                <h1 className='2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold lg:mt-4 sm:mt-3 mt-2 text-gray-900'>What Our Client Says About Us ?</h1>
                
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-7 container mx-auto mt-16 mb-32 px-5'>
                    {sample.map((items, index)=>(
                        <TestimonialsCart key={index} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials