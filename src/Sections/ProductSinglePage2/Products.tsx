import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'

const Products = ({
  children,
  info,
  colors,
}: {
  children: any
  info: any
  colors: any
}) => {
  console.log('Information', info)
  return (
    <>
      <div className="grid-cols-12 gap-7 container mx-auto -mt-72 hidden lg:grid">
        <div className="col-span-8 mb-auto">
          <div className="rounded-lg bg-white p-5">
            <div className=" xl:h-[32.5rem] lg:h-[24rem] h-72 relative w-full">
              <Image
                src="/productCartImg.svg"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="mt-8 rounded-lg bg-white ">
            <div className="pt-5 px-10 pb-4">
              <button
                type="button"
                className="text-base text-gray-900 border-none outline-none mr-10"
              >
                Description
              </button>
              {/* Review button hidden */}
              {/* <button
                type="button"
                className="text-base text-gray-600 border-none outline-none"
              >
                Review (10)
              </button> */}
            </div>
            <div className="h-0.5 w-full bg-[#DDE6F5]">
              <div className="h-0.5 w-20 ml-10 bg-blueTwo" />
            </div>
            <div className="py-8 px-10">{children}</div>
          </div>
          <div
            className={`sm:bg-[url("/products/hire-bg.svg")] bg-no-repeat bg-cover ${colors.bgPrimary} container mx-auto xl:p-12 p-8  flex flex-col items-center justify-center rounded-lg mt-10`}
          >
            <h3 className="xl:text-lg lg:text-base text-gray-100">
              Hurry up! Limited time offer
            </h3>
            <h1 className="text-gray-100 font-bold text-3xl mt-2 text-center">
              Start building today. ????
            </h1>
            <button
              type="button"
              className={`py-3 px-8 font-semibold ${colors.textPrimary} bg-gray-100 rounded-md text-base mt-6`}
            >
              Buy Now
            </button>
          </div>
        </div>
        <div className="col-span-4 p-8 rounded-lg bg-white mb-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">Price</h1>
            <div className="flex items-center">
              <div className="flex items-end mr-5">
                <h1 className="text-2xl text-gray-900 font-bold mr-3">
                  ${info[0].price}.00
                </h1>
                <h5 className="text-sm text-[#FA4F58] pb-1">
                  {/* ${info?.pricing.regularPrice}.00 */}
                </h5>
              </div>
              {/* {info?.offer && (
                <h3 className="text-xs text-gray-100 py-0.5 px-2.5 rounded-full bg-gradient-to-br from-purpleLight to-purpleDark">
                  {info?.offer}
                </h3>
              )} */}
            </div>
          </div>
          <hr className="w-full bg-cartImageBgOne my-6" />
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
            <Link href="#">
              <a
                target="_blank"
                className={`text-base font-semibold text-gray-100 py-3 rounded-lg ${colors.buttonPrimary} flex items-center justify-center shadow-3xl`}
              >
                <AiFillEye className="text-2xl mr-3" />
                <span>Live Preview</span>
              </a>
            </Link>
            <button
              type="button"
              className="text-base font-semibold text-gray-100 py-3 rounded-lg bg-gradient-to-br from-orangeOne to-orangeTwo flex items-center justify-center shadow-4xl"
            >
              <FaShoppingCart className="text-lg mr-3" />
              <span>Buy Now</span>
            </button>
          </div>
          <hr className="w-full bg-cartImageBgOne mt-6" />
          {/* Downloads hidden */}
          {/* <div className="flex items-center justify-between my-5">
            <h3 className="text-base text-gray-800">Downloads</h3>
            <h3 className="text-base text-gray-600">20 Times</h3>
          </div>
          <hr className="w-full bg-cartImageBgOne " /> */}
          <div className="flex items-center justify-between my-5">
            <h3 className="text-base text-gray-800">Last Update</h3>
            {/* <h3 className="text-base text-gray-600">{info?.updateAt}</h3> */}
          </div>
          <hr className="w-full bg-cartImageBgOne " />
          {info?.released && (
            <>
              <div className="flex items-center justify-between my-5">
                <h3 className="text-base text-gray-800">Released</h3>
                {/* <h3 className="text-base text-gray-600">{info?.released}</h3> */}
              </div>
              <hr className="w-full bg-cartImageBgOne " />
            </>
          )}
          {info?.tools && (
            <>
              <div className="flex items-center justify-between my-5">
                <h3 className="text-base text-gray-800">Tools</h3>
                <h3 className="text-base text-gray-600">{info?.tools}</h3>
              </div>
              <hr className="w-full bg-cartImageBgOne " />
            </>
          )}
          {info?.version && (
            <>
              <div className="flex items-center justify-between my-5">
                <h3 className="text-base text-gray-800">Software Version</h3>
                <h3 className="text-base text-gray-600">{info?.version}</h3>
              </div>
              <hr className="w-full bg-cartImageBgOne " />
            </>
          )}
          <div className="flex items-center justify-between my-5">
            <h3 className="text-base text-gray-800">Responsive</h3>
            <h3 className="text-base text-gray-600">
              {info?.responsive ? 'Yes' : 'No'}
            </h3>
          </div>
          <hr className="w-full bg-cartImageBgOne " />
          <div className="flex items-center justify-between my-5">
            <h3 className="text-base text-gray-800">Documentation</h3>
            <h3 className="text-base text-gray-600">
              {info?.doc ? 'Yes' : 'No'}
            </h3>
          </div>
          <hr className="w-full bg-cartImageBgOne " />
          {info?.tags && (
            <>
              <div className="flex items-start justify-between mt-5">
                <h3 className="text-base text-gray-800">Tags</h3>
                <article className="text-base text-gray-600 w-2/4">
                  {info?.tags.toString().replace(/,/g, ', ')}
                </article>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="grid-cols-12 gap-7 container mx-auto md:-mt-60 sm:-mt-48 -mt-40 grid lg:hidden px-5 sm:px-0">
        <div className="col-span-12 mb-auto">
          <div className="rounded-lg bg-white p-5">
            <div className=" xl:h-[32.5rem] lg:h-[24rem] sm:h-72 h-60 relative w-full">
              <Image
                src="/productCartImg.svg"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:p-8 sm:p-6 p-5 rounded-lg bg-white mb-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">Price</h1>
            <div className="flex items-center">
              <div className="flex items-end mr-5">
                <h1 className="text-2xl text-gray-900 font-bold mr-3">$20</h1>
                <h5 className="text-sm text-[#FA4F58] pb-1">$30</h5>
              </div>
              <h3 className="text-xs text-gray-100 py-0.5 px-2.5 rounded-full bg-gradient-to-br from-purpleLight to-purpleDark">
                Limited Offer
              </h3>
            </div>
          </div>
          <hr className="w-full bg-cartImageBgOne my-6" />
          <div className="grid grid-cols-2 gap-5">
            <button
              type="button"
              className="text-base font-semibold text-gray-100 py-4 rounded-lg bg-gradient-to-br from-blueOne to-blueTwo flex items-center justify-center shadow-3xl"
            >
              <AiFillEye className="text-lg mr-3" />
              <span>Preview</span>
            </button>
            <button
              type="button"
              className="text-base font-semibold text-gray-100 py-4 rounded-lg bg-gradient-to-br from-orangeOne to-orangeTwo flex items-center justify-center shadow-4xl"
            >
              <FaShoppingCart className="text-lg mr-3" />
              <span>Add To Cart</span>
            </button>
          </div>
          <hr className="w-full bg-cartImageBgOne mt-6" />
          <div className="flex items-center justify-between my-5">
            <h3 className="text-base text-gray-800">Downloads</h3>
            <h3 className="text-base text-gray-600">20 Times</h3>
          </div>
          <hr className="w-full bg-cartImageBgOne " />
          <div className="flex items-center justify-between my-5">
            <h3 className="text-base text-gray-800">Last Update</h3>
            <h3 className="text-base text-gray-600">August 30, 2021</h3>
          </div>
          <hr className="w-full bg-cartImageBgOne " />
          <div className="flex items-center justify-between my-5">
            <h3 className="text-base text-gray-800">Released</h3>
            <h3 className="text-base text-gray-600">May 1, 2021</h3>
          </div>
          <hr className="w-full bg-cartImageBgOne " />
          <div className="flex items-center justify-between my-5">
            <h3 className="text-base text-gray-800">Tools</h3>
            <h3 className="text-base text-gray-600">Figma (.fig)</h3>
          </div>
          <hr className="w-full bg-cartImageBgOne " />
          <div className="flex items-center justify-between my-5">
            <h3 className="text-base text-gray-800">Software Version</h3>
            <h3 className="text-base text-gray-600">4.5.12 or Above</h3>
          </div>
          <hr className="w-full bg-cartImageBgOne " />
          <div className="flex items-center justify-between my-5">
            <h3 className="text-base text-gray-800">Responsive</h3>
            <h3 className="text-base text-gray-600">Yes</h3>
          </div>
          <hr className="w-full bg-cartImageBgOne " />
          <div className="flex items-center justify-between my-5">
            <h3 className="text-base text-gray-800">Documentation</h3>
            <h3 className="text-base text-gray-600">Yes</h3>
          </div>
          <hr className="w-full bg-cartImageBgOne " />
          <div className="flex items-start justify-between mt-5">
            <h3 className="text-base text-gray-800">Tags</h3>
            <article className="text-base text-gray-600 w-2/4">
              admin, app, clean, dashboard, figma, interface, kit, minimal,
              modern, shop, sketch, template, ui, ui kit, ux
            </article>
          </div>
        </div>
        <div className="col-span-12">
          <div className="mt-8 rounded-lg bg-white ">
            <div className="pt-5 md:px-10 sm:px-7 px-5  pb-4">
              <button
                type="button"
                className="text-base text-gray-900 border-none outline-none mr-10"
              >
                Description
              </button>
              <button
                type="button"
                className="text-base text-gray-600 border-none outline-none"
              >
                Review (10)
              </button>
            </div>
            <div className="h-0.5 w-full bg-[#DDE6F5]">
              <div className="h-0.5 w-20 ml-10 bg-blueTwo" />
            </div>
            <div className="md:py-8 md:px-10 sm:p-7 p-5">
              <h1 className="text-2xl font-bold text-gray-900">
                Digiency- Figma Website Template
              </h1>
              <article className="text-base text-gray-600 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                corporis, esse nam inventore laboriosam nihil quasi rem facere
                ipsa neque itaque optio eveniet nisi? Dolorem quod praesentium
                accusantium harum nobis.
              </article>
              <article className="text-base text-gray-600 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                corporis, esse nam inventore laboriosam nihil quasi rem facere
                ipsa neque itaque optio eveniet nisi? Dolorem quod praesentium
                accusantium harum nobis.
              </article>
              <h3 className="text-base font-bold text-gray-900 mt-5">
                FEATURES
              </h3>
              <ul className="list-disc ml-5">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
              <h3 className="text-base font-bold text-gray-900 mt-5">
                FEATURES
              </h3>
              <ul className="list-disc ml-5">
                <li>Screen 1</li>
                <li>Screen 1</li>
                <li>Screen 1</li>
                <li>Screen 1</li>
                <li>Screen 1</li>
              </ul>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-10 mt-10">
                <div className="w-full xl:h-64 md:h-44 sm:h-36 h-56 relative rounded-xl">
                  <Image
                    src="/productCartImg.svg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="w-full xl:h-64 md:h-44 sm:h-36 h-56 relative rounded-xl">
                  <Image
                    src="/productCartImg.svg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="w-full xl:h-64 md:h-44 sm:h-36 h-56 relative rounded-xl">
                  <Image
                    src="/productCartImg.svg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="w-full xl:h-64 md:h-44 sm:h-36 h-56 relative rounded-xl">
                  <Image
                    src="/productCartImg.svg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="w-full xl:h-64 md:h-44 sm:h-36 h-56 relative rounded-xl">
                  <Image
                    src="/productCartImg.svg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="w-full xl:h-64 md:h-44 sm:h-36 h-56 relative rounded-xl">
                  <Image
                    src="/productCartImg.svg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12">
          <div className='bg-[url("/contactusBg.svg")] bg-cover container mx-auto xl:p-12 p-8  flex flex-col items-center justify-center rounded-lg mt-10'>
            <h3 className="text-lg text-gray-100">
              Hurry up! Limited time offer
            </h3>
            <h1 className="text-gray-100 font-bold lg:text-3xl text-2xl mt-2 text-center">
              Start building today. ????
            </h1>
            <button
              type="button"
              className="py-4 px-8 font-semibold text-blueTwo bg-gray-100 rounded-md text-base mt-6"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
