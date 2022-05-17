import Link from 'next/link'
import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
// import Image from 'next/image'
// import cart from './../../../public/cart.svg';

const DropDownProduct = () => {
  const [mernColor, setMernColor] = useState<string>('secondary')
  const [headlessColor, setHeadlessColor] = useState<string>()
  const [reactColor, setReactColor] = useState<string>()
  const [figmaColor, setFigmaColor] = useState<string>()
  const mern = () => {
    setMernColor('secondary')
    setReactColor('')
    setFigmaColor('')
    setHeadlessColor('')
  }
  const headless = () => {
    setHeadlessColor('secondary')
    setMernColor('')
    setReactColor('')
    setFigmaColor('')
  }
  const react = () => {
    setReactColor('secondary')
    setMernColor('')
    setFigmaColor('')
    setHeadlessColor('')
  }
  const figma = () => {
    setFigmaColor('secondary')
    setReactColor('')
    setMernColor('')
    setHeadlessColor('')
  }
  return (
    <div className="bg-white xl:w-[55.625rem] w-10/12 h-auto drop-shadow-xl rounded-lg">
      <div className="pt-7">
        <div className=" lg:px-8 md:px-7 sm:px-6 flex items-center">
          <button
            onClick={mern}
            className={`xl:pb-5 xl:px-8 lg:pb-3 lg:px-4 md:pb-2 md:px-3 sm:pb-2 sm:px-1 lg:text-base sm:text-xs text-gray-700 peer cursor-pointer text-${mernColor} duration-200 ease-in`}
          >
            Mern Stack
          </button>
          <button
            onClick={headless}
            className={`xl:pb-5 xl:px-8 lg:pb-3 lg:px-4 md:pb-2 md:px-3 sm:pb-2 sm:px-1  lg:text-base sm:text-xs text-gray-700 cursor-pointer text-${headlessColor} duration-200 ease-in`}
          >
            Frontity Theme
          </button>
          <button
            onClick={react}
            className={`xl:pb-5 xl:px-8 lg:pb-3 lg:px-4 md:pb-2 md:px-3 sm:pb-2 sm:px-1  lg:text-base sm:text-xs text-gray-700 cursor-pointer text-${reactColor} duration-200 ease-in`}
          >
            React Template
          </button>
          <button
            onClick={figma}
            className={`xl:pb-5 xl:px-8 lg:pb-3 lg:px-4 md:pb-2 md:px-3 sm:pb-2 sm:px-1  lg:text-base sm:text-xs text-gray-700 cursor-pointer text-${figmaColor} duration-200 ease-in`}
          >
            Tailwind CSS
          </button>
        </div>
        <div className="bg-gray-200  lg:px-8 md:px-7 sm:px-6  flex items-center">
          <div
            className={`xl:w-36 lg:w-28 md:w-20 sm:w-16 h-px duration-200 ease-in bg-${mernColor} mr-2`}
          />
          <div
            className={`xl:w-40 lg:w-32 md:w-24 sm:w-20 h-px duration-200 ease-in bg-${headlessColor} mr-2.5`}
          />
          <div
            className={`xl:w-40 lg:w-32 md:w-24 sm:w-20 h-px duration-200 ease-in bg-${reactColor} mr-2`}
          />
          <div
            className={`xl:w-44 lg:w-36 md:w-28 sm:w-24 h-px duration-200 ease-in bg-${figmaColor}`}
          />
        </div>
        <div
          className={`lg:px-8 md:px-7 sm:px-6  md:py-7 sm:py-6 ${
            mernColor === 'secondary' ? 'grid' : 'hidden'
          } xl:grid-cols-2 lg:grid-cols-1 container gap-2`}
        >
          <ButtonLayout
            title="MetaJobs- Job Board Theme"
            url="/productSinglePage"
            shortDescription="The best job portal website template. Secure, fast and scaleable."
          >
            <FaShoppingCart className="w-6 h-6 drop-shadow-lg text-blueTwo" />
          </ButtonLayout>
          <ButtonLayout
            title="MetaAds- Classified Ads Theme"
            url="/productSinglePage"
            shortDescription="Build a classified ads website with a clean and modern design."
          >
            <FaShoppingCart className="w-6 h-6 drop-shadow-lg text-orangeTwo" />
          </ButtonLayout>

          <ButtonLayout
            title="Freelancer marketplace theme"
            url="/productSinglePage"
            shortDescription="Build a freelancer marketplace website with a clean and modern design."
          >
            <FaShoppingCart className="w-6 h-6 drop-shadow-lg text-greenDark" />
          </ButtonLayout>

          <ButtonLayout
            title="MetaList- Directory & Listing Theme"
            url="/productSinglePage"
            shortDescription="Build a directory & listing website with a clean and modern design."
          >
            <FaShoppingCart className="w-6 h-6 drop-shadow-lg text-yellowDark" />
          </ButtonLayout>

          {/* <ButtonLayout
            title="Short Product Title Here"
            url="/productSinglePage"
          >
            <FaShoppingCart className="w-6 h-6 drop-shadow-lg text-redDark" />
          </ButtonLayout> */}

          {/* <ButtonLayout
            title="Short Product Title Here"
            url="/productSinglePage"
          >
            <FaShoppingCart className="w-6 h-6 drop-shadow-lg text-purpleDark" />
          </ButtonLayout> */}
        </div>
        <div
          className={`lg:px-8 md:px-7 sm:px-6  md:py-7 sm:py-6 ${
            headlessColor === 'secondary' ? 'grid' : 'hidden'
          } xl:grid-cols-2 lg:grid-cols-1 container gap-2`}
        >
          <ButtonLayout
            title="Portfo- Personal Portfolio Theme"
            url="/productSinglePage"
            shortDescription="Portfo- Frontity Personal Portfolio Theme"
          >
            <FaShoppingCart className="w-6 h-6 drop-shadow-lg text-blueTwo" />
          </ButtonLayout>

          <ButtonLayout
            title="Frontity Blog, News Theme"
            url="/productSinglePage"
            shortDescription="Frontity Multipurpose Blog Theme"
          >
            <FaShoppingCart className="w-6 h-6 drop-shadow-lg text-orangeTwo" />
          </ButtonLayout>
          {/* 
          <ButtonLayout
            title="Creative Multipurpose Frontity Theme"
            url="/productSinglePage"
            shortDescription="Build a freelancer marketplace website with a clean and modern design."
          >
            <FaShoppingCart className="w-6 h-6 drop-shadow-lg text-greenDark" />
          </ButtonLayout> */}

          {/* <ButtonLayout
            title="Frontity Multipurpose WooCommerce Theme"
            url="/productSinglePage"
            shortDescription="Build a directory & listing website with a clean and modern design."
          >
            <FaShoppingCart className="w-6 h-6 drop-shadow-lg text-yellowDark" />
          </ButtonLayout> */}
        </div>
        <div
          className={`lg:px-8 md:px-7 sm:px-6  md:py-7 sm:py-6 ${
            reactColor === 'secondary' ? 'grid' : 'hidden'
          } xl:grid-cols-2 lg:grid-cols-1 container gap-2`}
        >
          <ButtonLayout
            title="Digiency- Multipurpose Agency Template"
            url="/productSinglePage"
            shortDescription="Multipurpose React Agency Template"
          >
            <FaShoppingCart className="w-6 h-6 drop-shadow-lg text-blueTwo" />
          </ButtonLayout>

          <ButtonLayout
            title="MetaDash- React Dashboard Template"
            url="/productSinglePage"
            shortDescription="Build a React Dashboard Template"
          >
            <FaShoppingCart className="w-6 h-6 drop-shadow-lg text-orangeTwo" />
          </ButtonLayout>

          {/* <ButtonLayout
            title="Metalancer- Freelancer marketplace"
            url="/productSinglePage"
            shortDescription="Build a freelancer marketplace website with a clean and modern design."
          >
            <FaShoppingCart className="w-6 h-6 drop-shadow-lg text-greenDark" />
          </ButtonLayout> */}
        </div>
        <div
          className={`lg:px-8 md:px-7 sm:px-6  md:py-7 sm:py-6 ${
            figmaColor === 'secondary' ? 'grid' : 'hidden'
          } xl:grid-cols-2 lg:grid-cols-1 container gap-2`}
        >
          <ButtonLayout
            title="SEO Agency Landing Page Template"
            url="/productSinglePage"
            shortDescription="Build a SEO Agency Landing Page Template"
          >
            <FaShoppingCart className="w-6 h-6 drop-shadow-lg text-blueTwo" />
          </ButtonLayout>

          <ButtonLayout
            title="Tailwind CSS Blog Template"
            url="/productSinglePage"
            shortDescription="Build a Tailwind CSS Blog Template"
          >
            <FaShoppingCart className="w-6 h-6 drop-shadow-lg text-orangeTwo" />
          </ButtonLayout>
        </div>
        <div className=" lg:px-8 md:px-7 sm:px-6 md:py-7 sm:py-6  bg-backgroundGrayOne flex flex-col xl:flex-row justify-between items-center rounded-b-lg">
          <div>
            <h2 className="text-gray-900 text-base font-semibold xl:text-left text-center">
              You will love our solutions
            </h2>
            <article className="text-gray-600 text-sm">
              Lightning fast speed, secure and scale your website as you need
            </article>
          </div>
          <Link href="">
            <a className="mt-3 shadow-3xl flex sm:w-auto items-center xl:text-lg text-base xl:py-3 md:py-2 xl:px-4 md:px-3 py-2.5 px-3 rounded-lg bg-gradient-to-br from-blueOne to-blueTwo ">
              <span className="md:ml-2 ml-1 text-white mr-2">
                View All Solution
              </span>{' '}
              <HiOutlineArrowNarrowRight style={{ color: 'white' }} />
            </a>
          </Link>
        </div>
      </div>
      <div className="arrow bg-white m-0 border-0 w-10 h-6 absolute -top-4 2xl:left-72 xl:left-64 lg:left-28 md:left-20 sm:left-10" />
    </div>
  )
}

export default DropDownProduct

const ButtonLayout = ({
  children,
  title,
  url,
  shortDescription,
}: {
  children: any
  title: string
  url: string
  shortDescription: string
}) => {
  return (
    <Link href={`${url}`}>
      <a>
        <div className="flex items-start group p-5 rounded-lg hover:bg-backgroundGray cursor-pointer ease-in duration-200 border border-white hover:border-cartImageBgOne">
          <div className="shadow-lg rounded-lg bg-white p-3 mr-6">
            {children}
          </div>
          <div>
            <h1 className="text-lg text-gray-900 group-hover:text-blueTwo font-semibold">
              {title}
            </h1>
            <article className="text-gray-700 text-sm w-4/5 mt-2">
              {shortDescription}
            </article>
          </div>
        </div>
      </a>
    </Link>
  )
}
