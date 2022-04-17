import React from 'react'

const Question=()=> {
    const sample = [1, 2]
  return (
    <div className='container mx-auto'>
        <div className='xl:py-24 sm:py-16 py-14 flex flex-col items-center justify-center'>
            <h5 className='xl:text-base md:text-sm text-xs text-templateColor'>FAQ’s</h5>
            <h1 className='2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold lg:mt-4 sm:mt-3 mt-2 text-gray-900'>Frequently Asked Questions</h1>

            <div className='mt-16 w-full  px-5 sm:px-0'>
                {sample.map((item:any, index:any)=>(
                     <QuestionCart key={index} id={item} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Question

const QuestionCart = ({id}:any) =>{
    console.log("hello",id)
    return(
        <div className='xl:p-8 lg:p-7 md:p-6 p-5  mb-5 rounded-lg border border-gray-300 sm:w-3/4 w-full mx-auto'>
            <div className='flex justify-between items-center'>
                <h1 className='xl:text-lg md:text-base text-sm  tex-gray-900 font-bold'>Simple and Awesome Question Title Here ?</h1>
                <button className='group'>+</button>
            </div>
            <div className='mt-5 lg:text-base text-sm text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
        </div>
    )
}