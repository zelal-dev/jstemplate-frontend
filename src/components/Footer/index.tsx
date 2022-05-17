import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  FaCcDiscover,
  FaCcJcb,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaCheck,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { SiAmericanexpress } from 'react-icons/si'

const Footer = ({
  boxToColor,
  boxFromColor,
  shadowBox,
  buttonToColor,
  buttonFromColor,
  shadowButton,
}: {
  boxToColor: string
  boxFromColor: string
  shadowBox: string
  buttonToColor: string
  buttonFromColor: string
  shadowButton: string
}) => {
  return (
    <div className="bg-gray-800 relative px-5">
      <div className="container mx-auto">
        <div className="bg-white  drop-shadow-2xl absolute -top-40 left-5 right-5 sm:left-auto sm:right-auto sm:container xl:p-24 lg:p-20 md:p-16 sm:p-12 p-8 flex lg:flex-row flex-col items-center justify-between rounded-lg">
          {/* <Image src={footerBg} /> */}
          <div className="flex items-start lg:w-3/4 w-full">
            <div
              className={`xl:w-24 xl:h-24 md:w-20 md:h-16 sm:w-16 w-36 h-14 rounded-md bg-gradient-to-br from-${boxFromColor} to-${boxToColor} lg:mr-10 sm:mr-6 mr-3 shadow-${shadowBox}`}
            />
            <div>
              <h1 className="text-gray-900 font-bold xl:text-3xl lg:text-2xl md:text-xl w-auto">
                You`ll love our solutions
              </h1>
              <article className="text-gray-600 xl:text-lg lg:text-base text-sm lg:w-3/4 w-full mt-2">
                Buy Our Ready-Made Web Solution Grow Your Business Faster
              </article>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <Link href="/productPage">
              <a
                className={`flex-1 shadow-${shadowButton} flex items-center xl:text-lg text-base xl:py-6 md:py-3 xl:px-10 md:px-5 py-3 px-3 rounded-lg bg-gradient-to-br from-${buttonFromColor} to-${buttonToColor} mt-8 lg:mt-0`}
              >
                <span className=" text-white mr-4">View All Solution</span>{' '}
                <HiOutlineArrowNarrowRight style={{ color: 'white' }} />
              </a>
            </Link>
          </div>
        </div>
        <div className="flex items-start justify-between flex-wrap xl:pt-52 lg:pt-48 md:pt-40 sm:pt-36 pt-32">
          <div className="pt-8">
            {/* <h1 className='text-3xl font-bold text-gray-100'>Brand Logo</h1> */}
            <Link href="/">
              <a>
                <Image
                  src="/footerBrandLogo.svg"
                  alt=""
                  width="136"
                  height="42"
                />
              </a>
            </Link>
            <article className="text-xl text-gray-400 w-80 mt-5">
              Top of Tailwind CSS, React.js, Next.js, Mongodb, Node.js,
              Express.js, Typescript themes and templates
            </article>
            <div className="flex items-center mt-7">
              <span className="mr-5 cursor-pointer">
                <FaFacebookF
                  className="hover:text-blueTwo text-[#AEB6BF]"
                  width="10.71"
                  height="20"
                />
              </span>
              <span className="mr-5 cursor-pointer">
                <FaTwitter
                  className="hover:text-blueTwo text-[#AEB6BF]"
                  width="10.71"
                  height="20"
                />
              </span>
              <span className="mr-5 cursor-pointer">
                <FaLinkedinIn
                  className="hover:text-blueTwo text-[#AEB6BF]"
                  width="10.71"
                  height="20"
                />
              </span>
              <span className="mr-5 cursor-pointer">
                <FaInstagram
                  className="hover:text-blueTwo text-[#AEB6BF]"
                  width="10.71"
                  height="20"
                />
              </span>
            </div>
          </div>
          <div className="pt-8">
            <h3 className="text-lg font-bold text-gray-100">Menu</h3>
            <div className="mt-4 flex flex-col ">
              <Link href="">
                <a className="text-gray-400 hover:text-blueTwo font-sm">Home</a>
              </Link>
              <Link href="">
                <a className="text-gray-400 hover:text-blueTwo font-sm mt-2">
                  Our Solution
                </a>
              </Link>
              <Link href="">
                <a className="text-gray-400 hover:text-blueTwo font-sm mt-2">
                  About
                </a>
              </Link>
              <Link href="">
                <a className="text-gray-400 hover:text-blueTwo font-sm mt-2">
                  Blog
                </a>
              </Link>
              <Link href="">
                <a className="text-gray-400 hover:text-blueTwo font-sm mt-2">
                  Faq’s
                </a>
              </Link>
            </div>
          </div>
          <div className="pt-8">
            <h3 className="text-lg font-bold text-gray-100">Quick Link</h3>
            <div className="mt-4 flex flex-col ">
              <Link href="">
                <a className="text-gray-400 hover:text-blueTwo font-sm">
                  Contact Us
                </a>
              </Link>
              <Link href="">
                <a className="text-gray-400 hover:text-blueTwo font-sm mt-2">
                  Pre-Sale
                </a>
              </Link>
              <Link href="">
                <a className="text-gray-400 hover:text-blueTwo font-sm mt-2">
                  Terms & Condition
                </a>
              </Link>
              <Link href="/privacy-policy">
                <a className="text-gray-400 hover:text-blueTwo font-sm mt-2">
                  Privacy Policy
                </a>
              </Link>
              <Link href="">
                <a className="text-gray-400 hover:text-blueTwo font-sm mt-2">
                  Help
                </a>
              </Link>
            </div>
          </div>
          <div className="pt-8">
            <h3 className="text-lg font-bold text-gray-100">Our Solution</h3>
            <div className="mt-4 flex flex-col ">
              <Link href="">
                <a className="text-gray-400 hover:text-blueTwo font-sm">
                  Meta Jobs
                </a>
              </Link>
              <Link href="">
                <a className="text-gray-400 hover:text-blueTwo font-sm mt-2">
                  Meta Ads
                </a>
              </Link>
              <Link href="">
                <a className="text-gray-400 hover:text-blueTwo font-sm mt-2">
                  Meta List
                </a>
              </Link>
              <Link href="">
                <a className="text-gray-400 hover:text-blueTwo font-sm mt-2">
                  Meta Lancer
                </a>
              </Link>
            </div>
          </div>
          <div className="pt-8">
            <div>
              <h3 className="text-lg font-bold text-gray-100">Headless CMS</h3>
              <div className="mt-4 flex flex-col ">
                <Link href="">
                  <a className="text-gray-400 hover:text-blueTwo font-sm">
                    E-Commerce Template
                  </a>
                </Link>
                <Link href="">
                  <a className="text-gray-400 hover:text-blueTwo font-sm mt-2">
                    Blog Template
                  </a>
                </Link>
                <Link href="">
                  <a className="text-gray-400 hover:text-blueTwo font-sm mt-2">
                    Multipurpose
                  </a>
                </Link>
              </div>
            </div>
            <div className="mt-7">
              <h3 className="text-lg font-bold text-gray-100">
                React Template
              </h3>
              <div className="mt-4 flex flex-col ">
                <Link href="">
                  <a className="text-gray-400 hover:text-blueTwo font-sm">
                    React Dashboard
                  </a>
                </Link>
                <Link href="">
                  <a className="text-gray-400 hover:text-blueTwo font-sm mt-2">
                    React Multipurpose
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 py-6 px-10 rounded-md flex md:flex-row flex-col items-center justify-between mt-16">
          <div className="flex items-center">
            <div className="md:p-4 p-2 rounded-full bg-gradient-to-br shadow-green from-greenLight to-greenDark xl:mr-8 lg:mr-6 md:mr-5 sm:mr-4 mr-3">
              <FaCheck className="text-gray-100 xl:w-6 xl:h-5 lg:w-5 lg:h-4 md:w-4 md:h-3 w-3 h-2" />
            </div>
            <h2 className="text-gray-100 xl:text-2xl lg:text-xl md:text-lg text-base font-bold">
              Guaranted Safe Checkout
            </h2>
          </div>
          <div className="flex items-center mt-8 md:mt-0">
            <FaCcPaypal className="text-gray-400 xl:w-16 xl:h-10 lg:w-14 lg:h-8 md:w-10 md:h-7 w-9 h-6" />
            <FaCcVisa className="text-gray-400 xl:w-16 xl:h-10 lg:w-14 lg:h-8 md:w-10 md:h-7 w-9 h-6" />
            <FaCcMastercard className="text-gray-400 xl:w-16 xl:h-10 lg:w-14 lg:h-8 md:w-10 md:h-7 w-9 h-6" />
            <SiAmericanexpress className="text-gray-400 xl:w-16 xl:h-9 lg:w-14 lg:h-8 md:w-10 md:h-7 w-9 h-6 rounded" />
            <FaCcJcb className="text-gray-400 xl:w-16 xl:h-10 lg:w-14 lg:h-8 md:w-10 md:h-7 w-9 h-6" />
            <FaCcDiscover className="text-gray-400 xl:w-16 xl:h-10 lg:w-14 lg:h-8 md:w-10 md:h-7 w-9 h-6" />
          </div>
        </div>
        <p className="text-base text-gray-400 text-center py-7">
          © 2022 <span className="text-white">js template</span>. All Right
          Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
