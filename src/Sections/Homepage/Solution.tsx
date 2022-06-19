import React from 'react'
import SolutionCart from '../../components/SolutionCart'
import Link from 'next/link'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import _ from 'lodash'

const Solution = ({ data }: { data: any }) => {
  return (
    <div className="container mx-auto relative z-0">
      <div className="xl:py-24 sm:py-16 py-14 flex flex-col items-center justify-center">
        <h5 className="xl:text-base md:text-sm text-xs text-secondary">
          Top Products
        </h5>
        <h1 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold lg:mt-4 sm:mt-3 mt-2 text-gray-900">
          Our Creative Solution
        </h1>
        <article className="mt-5 text-gray-600 max-w-2xl w-11/12 text-center xl:text-lg md:text-base text-sm">
          Check out the Best full stack solution and React, Next.js Ready-Made
          Templates. Every templates we ensure super fast speed, scaleable and
          secure
        </article>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-11 container mx-auto xl:mt-40 md:mt-16 mt-12 px-5 md:px-0">
          {data &&
            _.slice(data, 0, 6).map((item: any, index: any) => (
              <div
                className={`${
                  index === 1 || index === 4 || index === 7 || index === 10
                    ? 'xl:-mt-20'
                    : ''
                } `}
                key={item.id}
              >
                <Link href={`/item/${item.slug}`}>
                  <a>
                    <SolutionCart
                      toColor="blueOne"
                      fromColor="blueTwo"
                      item={item}
                    />
                  </a>
                </Link>
              </div>
            ))}
        </div>
        <Link href="/shop">
          <a className="mt-20 xl:mt-0 shadow-3xl flex sm:w-auto items-center xl:text-lg text-base xl:py-6 md:py-3 xl:px-10 md:px-5 py-3 px-3 rounded-lg bg-gradient-to-br from-blueOne to-blueTwo sm:mr-6 mr-0">
            <span className="md:ml-4 ml-3 text-white mr-4">
              View All Solution
            </span>
            <HiOutlineArrowNarrowRight style={{ color: 'white' }} />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Solution
