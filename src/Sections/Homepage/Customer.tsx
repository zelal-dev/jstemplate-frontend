import React from 'react'
import Image from 'next/image'
import customerBg from './../../../public/customerBg.svg'
const Customer = () => {
  return (
    <div className="relative w-full z-0">
      <Image src={customerBg} alt="" layout="responsive" />
      <div className=" absolute 2xl:top-28 xl:top-24 lg:top-20 md:top-16 sm:top-10 top-6 lg:inset-x-1/3 inset-x-1/4">
        <h1 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-white font-bold text-center">
          Our Customers World Wide
        </h1>
        <article className="lg:mt-5 md:mt-3 mt-2  text-gray-100  text-center xl:text-lg md:text-base text-sm sm:block hidden">
          With our innovative tools and solutions empowering business World
          Wide.
        </article>
      </div>
    </div>
  )
}

export default Customer
