import { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import useSWR from 'swr'

import Image from 'next/image'
import { LoaderGrowing } from '../../../src/lib/loader'
import { UserNotLogin, useUser } from '../../../src/lib/useUser'
import { Axios } from '../../../src/utils/axiosKits'
import Navbar from './../../../src/components/Navbar'

const fetcher = ( url: string ) => Axios.get( url ).then( ( res ) => res.data.data )

const Downloads = () => {
  const { loggedIn, user } = useUser()
  // use state to show hide and show download button

  const [ showDownload, setShowDownload ] = useState( false )

  const { data, error } = useSWR( '/api/orders/retrives' as string, fetcher )

  const dropdownHandler = () => {
    setShowDownload( !showDownload )
  }
  console.log( "SHow download", showDownload )
  if ( !user && !loggedIn ) {
    return <UserNotLogin />

  }

  if ( loggedIn && user ) {
    return (
      <div className="bg-backgroundGrayOne min-h-screen">
        <Navbar.DashboardPrimaryNavbar />
        {/* <Navbar.DashboardSecondaryNavbar /> */ }
        <div className="container mx-auto py-10 px-5 sm:px-5">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Downloads</h2>
          { data && data.map( ( item: any ) => (
            <div
              key={ item.id }
              className="grid grid-cols-12 container mb-4 bg-white rounded-lg"
            >

              {
                item.line_items && item.line_items.map( ( product ) => (
                  <>
                    <div className="lg:col-span-1 col-span-3 my-auto p-2.5">
                      <div className="h-[4.375rem] w-[4.375rem] rounded-lg bg-gray-300">
                        <Image src={ product.image.src }
                          width="200"
                          height="200"

                        />
                      </div>
                    </div>
                    <div className="lg:col-span-4 col-span-9 my-auto p-2.5 ">
                      <h3 className="text-base font-bold text-gray-900">
                        { product.name }
                      </h3>
                      {/* <h3 className="text-sm text-gray-600">
                        Lorem Ipsum has been the industry standard dummy text
                      </h3> */}
                    </div>
                    <div className="col-span-3 block lg:hidden" />
                    <div className="lg:col-span-5 sm:col-span-7 col-span-9 lg:m-auto p-2.5 flex items-center">
                      <h3 className="text-lg text-gray-700 mr-8"> { product.total } <span className='text-sm bold'>{ item.currency }</span> </h3>
                      <h3 className="text-lg text-blueTwo">{ item.status }</h3>
                    </div>
                    <div className="col-span-3 block sm:hidden" />
                    <div className="sm:col-span-2 col-span-9 relative lg:my-auto lg:ml-auto mr-auto  lg:mr-6 p-2.5  cursor-pointer">
                      <div className="border border-grayLight bg-backgroundGrayOne p-3 rounded-lg" onClick={ dropdownHandler } >
                        <BsThreeDotsVertical className="w-5 h-5" />
                      </div>
                      <div className='absolute container'>
                        <div id="dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 " data-popper-placement="bottom">
                          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                            <li>
                              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                            <li>
                              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                ) ) }
            </div>

          ) ) }
        </div>
      </div>
    )
  }

  return <LoaderGrowing />
}

export default Downloads


function dropdownHandler (): void {
  throw new Error( 'Function not implemented.' )
}

