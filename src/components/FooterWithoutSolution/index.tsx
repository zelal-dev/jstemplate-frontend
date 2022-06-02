import Image from "next/image";
import Link from "next/link";
import React from "react";
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
} from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

const FooterWithoutSolution = () => {
  return (
    <div className="bg-gray-800 relative px-5">
      <div className="container mx-auto">
        <div className="flex items-start justify-between flex-wrap  pt-8">
          <div className="pt-8">
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum Dummy Text
            </article>
            <div className="flex items-center mt-7">
              <span className="mr-5 cursor-pointer">
                <FaFacebookF
                  className="text-[#AEB6BF] hover:text-blueTwo"
                  width="10.71"
                  height="20"
                />
              </span>
              <span className="mr-5 cursor-pointer">
                <FaTwitter
                  className="text-[#AEB6BF] hover:text-blueTwo"
                  width="10.71"
                  height="20"
                />
              </span>
              <span className="mr-5 cursor-pointer">
                <FaLinkedinIn
                  className="text-[#AEB6BF] hover:text-blueTwo"
                  width="10.71"
                  height="20"
                />
              </span>
              <span className="mr-5 cursor-pointer">
                <FaInstagram
                  className="text-[#AEB6BF] hover:text-blueTwo"
                  width="10.71"
                  height="20"
                />
              </span>
            </div>
          </div>
          <div className="pt-8">
            <h3 className="text-lg font-bold text-gray-100">Menu</h3>
            <div className="mt-4 flex flex-col ">
              <Link href="/">
                <a className="text-gray-400 hover:text-blueTwo font-sm">Home</a>
              </Link>
              <Link href="/shop">
                <a className="text-gray-400 hover:text-blueTwo font-sm mt-2">
                  Our Solution
                </a>
              </Link>
              <Link href="/resources">
                <a className="text-gray-400 hover:text-blueTwo font-sm mt-2">
                  Resources
                </a>
              </Link>
              <Link href="/blog">
                <a className="text-gray-400 hover:text-blueTwo font-sm mt-2">
                  Blog
                </a>
              </Link>
            </div>
          </div>
          <div className="pt-8">
            <h3 className="text-lg font-bold text-gray-100">Quick Link</h3>
            <div className="mt-4 flex flex-col ">
              <Link href="/contact-us">
                <a className="text-gray-400 hover:text-blueTwo font-sm">
                  Contact Us
                </a>
              </Link>
              <Link href="/terms-conditions">
                <a className="text-gray-400 hover:text-blueTwo font-sm mt-2">
                  Terms & Conditions
                </a>
              </Link>
              <Link href="/privacy-policy">
                <a className="text-gray-400 hover:text-blueTwo font-sm mt-2">
                  Privacy Policy
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
            <div className="md:p-4 p-2 rounded-full bg-gradient-to-br from-greenLight shadow-green to-greenDark xl:mr-8 lg:mr-6 md:mr-5 sm:mr-4 mr-3">
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
          © 2022 <span className="text-white">JS-Template</span>, All Right
          Reserved
        </p>
      </div>
    </div>
  );
};

export default FooterWithoutSolution;
