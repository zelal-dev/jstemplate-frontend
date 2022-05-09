// import Image from '../../src/components/optimize/image';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Navbar from "./../../src/components/Navbar";

import FooterWithoutSolution from './../../src/components/FooterWithoutSolution'

const img = [
  {
    img: "/blog-1.png",
  },
  {
    img: "/blog-2.png",
  },
  {
    img: "/blog-3.png",
  },
  {
    img: "/blog-4.png",
  },
  {
    img: "/blog-5.png",
  },
  {
    img: "/blog-6.png",
  },
  {
    img: "/blog-7.png",
  },
  {
    img: "/blog-8.png",
  },
  {
    img: "/blog-9.png",
  },
];

const News = () => {
  return (
    <>
      <div className="sm:bg-[url('/productSingleHeaderBg.svg')] bg-no-repeat bg-secondaryTemplateColorDark">
        <Navbar.SingleProductNavbar />
        <div className="container mx-auto">
          <div className="py-28 relative ">
            <h1 className="font-bold text-2xl sm:text-4xl text-white text-center">
              News &amp; Blog
            </h1>
          </div>
        </div>
      </div>
      <section className="bg-backgroundGrayOne ">
        {/* <div className="bg-themePrimary">
          <div className="container mx-auto">
            <div className="py-28 relative ">
              <h1 className="font-bold text-2xl sm:text-4xl text-white text-center">
                News &amp; Blog
              </h1>
            </div>
          </div>
        </div> */}
        <div className="pt-24 pb-0">
          <div className="container mx-auto">
            <div className="grid grid-cols-6 gap-7 px-5 sm:px-0">
              {img.map((item, index) => (
                <div
                  key={index}
                  className="col-span-6 md:col-span-3 lg:col-span-2 bg-white p-7 rounded-2xl transition duration-500 ease-in-out hover:shadow-grayLight "
                >
                  <Image
                    src="/serviceHeadBg.svg"
                    width={370}
                    height={280}
                    alt=""
                    layout="responsive"
                    objectFit="cover"
                  />
                  <p className="text-lg text-[#1a2b3a] pt-5 pb-2">
                    14 SEP, 2020
                  </p>
                  <h1 className="text-lg sm:text-xl text-[#001324] font-bold text-ellipsis overflow-hidden max-h-14">
                    <Link href="/news-blog/details">
                      <a>
                        Simple and Awesome News or Blog Title Here Lorem Ipsum
                        Text
                      </a>
                    </Link>
                  </h1>
                  <p className="text-base text-[#5D6D7E] pt-3 text-ellipsis overflow-hidden max-h-28">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s...
                  </p>
                  <Link href="/blog/details">
                    <a className="flex items-center gap-4 pt-2 group">
                      <span className="text-base font-semibold text-blueTwo group-hover:opacity-70 transition duration-300 ease-in-out">
                        Read More
                      </span>
                      <HiOutlineArrowNarrowRight className="w-4 h-3 text-blueTwo" />
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container mx-auto flex items-center justify-center py-16">
          <button className="text-base py-2.5 px-4 rounded-lg bg-white hover:bg-blueTwo hover:text-white duration-200 mr-1">
            1
          </button>
          <button className="text-base py-2.5 px-4 rounded-lg bg-white hover:bg-blueTwo hover:text-white duration-200 mr-1">
            2
          </button>
          <button className="text-base py-2.5 px-4 rounded-lg bg-white hover:bg-blueTwo hover:text-white duration-200 mr-1">
            3
          </button>
          <button className="text-base py-2.5 px-4 rounded-lg bg-white hover:bg-blueTwo hover:text-white duration-200 mr-1">
            ...
          </button>
          <button className="text-base py-2.5 px-4 rounded-lg bg-white hover:bg-blueTwo hover:text-white duration-200 mr-1">
            5
          </button>
        </div>
      </section>
      <FooterWithoutSolution />
    </>
  );
};

export default News;
