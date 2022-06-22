import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Link from 'next/link'
import useSWR from 'swr'
import {
  serviceMenuData,
  serviceMenuDocument,
} from '../../../data/service.data'
import { Axios } from '../../utils/axiosKits'

const fetcher = (url: string) => Axios(url).then((res) => res.data.data)

const DropDownService = () => {
  // call api using axios and get the data from the api
  const { data, error } = useSWR('/api/menu/service', fetcher, {
    refreshInterval: 0,
    fallbackData: [],
  })

  return (
    <div className="bg-white w-10/12 drop-shadow-xl rounded-lg">
      <div className=" lg:px-8 md:px-7 sm:px-6 lg:py-8 md:py-7 sm:py-6  grid xl:grid-cols-2 lg:grid-cols-1 container gap-3">
        {data &&
          data?.map((item: any) => {
            return (
              <>
                <Link key={item?.ID} href={item.url}>
                  <a>
                    <div className="flex items-start group p-5 rounded-lg hover:bg-backgroundGray cursor-pointer ease-in duration-200 border border-white hover:border-cartImageBgOne">
                      <div className="shadow-lg rounded-lg bg-white p-3 mr-6">
                        <FaShoppingCart className="w-6 h-6 drop-shadow-lg text-blueTwo" />
                      </div>
                      <div>
                        <h1 className="text-lg text-gray-900 group-hover:text-blueTwo font-semibold">
                          {item.title}
                        </h1>
                        <article className="text-gray-700 text-sm w-4/5 mt-2">
                          {item.description}
                        </article>
                      </div>
                    </div>
                  </a>
                </Link>
              </>
            )
          })}
      </div>
      <div className="arrow bg-white m-0 border-0 w-10 h-6 absolute -top-4 xl:left-96 lg:left-52 md:left-56 sm:left-40" />
    </div>
  )
}

export default DropDownService
