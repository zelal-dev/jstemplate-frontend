import React from 'react'
import Image from 'next/image'

const Timeline = () => {
  return (
    <div className='bg-backgroundGrayOne'>
        <div className='container mx-auto relative z-0'>
            <div className='xl:pt-24 sm:pt-16 pt-14 flex flex-col items-center justify-center'>
                <h5 className='xl:text-base md:text-sm text-xs text-secondaryTemplateColorDark'>Timeline</h5>
                <h1 className='2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold lg:mt-4 sm:mt-3 mt-2 text-gray-900'>Project Work Progress</h1>
            </div>
            {/* laptop and pc version */}
            <div className='pt-20 pb-[35rem]  grid-cols-11 gap-x-14 hidden lg:grid'>
                <div className='col-span-5 w-full'>
                    <TimelineCart title='Project Plan' rotate='rotate-0' right='-right-5' top='top-3' subtTitle='10th APR 2022' />
                </div>
                <div className='col-span-1 relative flex flex-col items-center'>
                    <div className='w-0.5 h-4 bg-secondaryTemplateColorDark' />
                    <div className='w-4 h-4 rounded-full bg-secondaryTemplateColorDark my-2' />
                    <div className='w-0.5 h-full bg-secondaryTemplateColorDark' />
                </div>
                <div className='col-span-5'></div>  
                
                <div className='col-span-5'></div>
                 <div className='col-span-1 relative flex flex-col items-center'>
                    <div className='w-0.5 h-4 bg-secondaryTemplateColorDark' />
                    <div className='w-4 h-4 rounded-full bg-secondaryTemplateColorDark my-2' />
                    <div className='w-0.5 h-full bg-secondaryTemplateColorDark' />
                </div>
                <div className='col-span-5 w-full'>
                    <TimelineCart title='UI/UX Design' rotate='rotate-180' right='-left-5' top='top-3' subtTitle='10th APR 2022' />
                </div>

                <div className='col-span-5 w-full'>
                    <TimelineCart title='Convert Design to Code' rotate='rotate-0' right='-right-5' top='top-3' subtTitle='RUNNING' />
                </div>
                 <div className='col-span-1 relative flex flex-col items-center'>
                    <div className='w-0.5 h-4 bg-secondaryTemplateColorDark' />
                    <div className='w-4 h-4 rounded-full bg-secondaryTemplateColorDark my-2' />
                    <div className='w-0.5 h-full bg-gray-400 opacity-50' />
                </div>
                <div className='col-span-5'></div>

                <div className='col-span-5'></div>
                 <div className='col-span-1 relative flex flex-col items-center'>
                    <div className='w-0.5 h-4 bg-gray-400 opacity-50' />
                    <div className='w-4 h-4 rounded-full bg-gray-400 opacity-50 my-2' />
                    <div className='w-0.5 h-full bg-gray-400 opacity-50' />
                </div>
                <div className='col-span-5 w-full opacity-50'>
                    <TimelineCart subtTitle='UPCOMING' rotate='rotate-180' right='-left-5' top='top-3' title='Backend &#38 API Development' />
                </div>

                <div className='col-span-5 w-full opacity-50'>
                    <TimelineCart subtTitle='UPCOMING' rotate='rotate-0' right='-right-5' top='top-3' title='API Implement, Testing, Bug Fix &#38 Release' />
                </div>
                 <div className='col-span-1 relative flex flex-col items-center'>
                    <div className='w-0.5 h-4 bg-gray-400 opacity-50' />
                    <div className='w-4 h-4 rounded-full bg-gray-400 opacity-50 my-2' />
                    <div className='w-0.5 h-full bg-gray-400 opacity-50' />
                </div>
                <div className='col-span-5'></div>
                 
            </div>
            {/* mobile and tab version  */}
            <div className='md:py-16 sm:py-12 py-10 grid grid-cols-11 sm:gap-x-10 gap-x-6 lg:hidden px-5 sm:px-0'>
                <div className='col-span-1 relative flex flex-col items-center'>
                    <div className='w-0.5 h-4 bg-secondaryTemplateColorDark' />
                    <div className='sm:w-4 w-3 sm:h-4 h-3  rounded-full bg-secondaryTemplateColorDark my-2' />
                    <div className='w-0.5 h-full bg-secondaryTemplateColorDark' />
                </div>
                <div className='col-span-10 w-full mb-8'>
                    <TimelineCart title='Project Plan' rotate='rotate-180' right='-left-5' top='top-3' subtTitle='10th APR 2022' />
                </div>
                
                 <div className='col-span-1 relative flex flex-col items-center'>
                    <div className='w-0.5 h-4 bg-secondaryTemplateColorDark' />
                    <div className='sm:w-4 w-3 sm:h-4 h-3  rounded-full bg-secondaryTemplateColorDark my-2' />
                    <div className='w-0.5 h-full bg-secondaryTemplateColorDark' />
                </div>
                <div className='col-span-10 w-full mb-8'>
                    <TimelineCart title='UI/UX Design' rotate='rotate-180' right='-left-5' top='top-3' subtTitle='10th APR 2022' />
                </div>

                 <div className='col-span-1 relative flex flex-col items-center'>
                    <div className='w-0.5 h-4 bg-secondaryTemplateColorDark' />
                    <div className='sm:w-4 w-3 sm:h-4 h-3  rounded-full bg-secondaryTemplateColorDark my-2' />
                    <div className='w-0.5 h-full bg-gray-400 opacity-50' />
                </div>
                <div className='col-span-10 w-full mb-8'>
                    <TimelineCart title='Convert Design to Code' rotate='rotate-180' right='-left-5' top='top-3' subtTitle='RUNNING' />
                </div>

                 <div className='col-span-1 relative flex flex-col items-center'>
                    <div className='w-0.5 h-4 bg-gray-400 opacity-50' />
                    <div className='sm:w-4 w-3 sm:h-4 h-3  rounded-full bg-gray-400 opacity-50 my-2' />
                    <div className='w-0.5 h-full bg-gray-400 opacity-50' />
                </div>
                <div className='col-span-10 mb-8 w-full opacity-50'>
                    <TimelineCart subtTitle='UPCOMING' rotate='rotate-180' right='-left-5' top='top-3' title='Backend &#38 API Development' />
                </div>

                 <div className='col-span-1 relative flex flex-col items-center'>
                    <div className='w-0.5 h-4 bg-gray-400 opacity-50' />
                    <div className='sm:w-4 w-3 sm:h-4 h-3  rounded-full bg-gray-400 opacity-50 my-2' />
                    <div className='w-0.5 h-full bg-gray-400 opacity-50' />
                </div>
                <div className='col-span-10 w-full opacity-50'>
                    <TimelineCart subtTitle='UPCOMING' rotate='rotate-180' right='-left-5' top='top-3' title='API Implement, Testing, Bug Fix &#38 Release' />
                </div>
                 
            </div>
        </div>
    </div>
  )
}

export default Timeline

const TimelineCart = ({subtTitle, title, rotate, right, top}:{subtTitle:string, title:string, rotate:string, right:string, top:string}) =>{
    return (
        <div className='xl:p-10 lg:p-9 md:p-7 sm:p-6 p-5 rounded-lg bg-white relative'>
            <div style={{clipPath: "clip-path: polygon(100% 50%, 0 0, 0 100%)"}}  className={`arrow-timeline w-6 h-10 bg-white absolute ${rotate} ${right} ${top}`}></div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <Image src="/timelineBusiness.svg" alt='' width='52' height='52' />
                    <div className='ml-4'>
                        <h3 className='md:text-base text-sm font-semibold text-[#068179]'>{subtTitle}</h3>
                        <h2 className='font-bold text-gray-900 xl:text-2xl lg:text-xl md:text-lg text-base'>{title}</h2>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <Image src="/timelineCartImg.svg" alt='' width='118' height="80" />
                </div>
                <div className='block lg:hidden'>
                    <Image src="/timelineCartImg.svg" alt='' width='57' height="38" />
                </div>
            </div>
            <article className='text-gray-600 xl:text-lg md:text-base text-sm mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text...   <span className='font-bold text-secondaryTemplateColorDark'>Read More</span></article>
        </div>
    )
}