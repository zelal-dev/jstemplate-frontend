import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { LoaderGrowing } from '../../../src/lib/loader'
import { useUser, UserNotLogin } from '../../../src/lib/useUser'
import Navbar from './../../../src/components/Navbar'

const Downloads = () => {
  const { loggedIn, user } = useUser()
  const sample = [1, 2, 3, 4]

  if (!user && !loggedIn) {
    return <UserNotLogin />
  }

  if (loggedIn && user) {
    return (
      <div className="bg-backgroundGrayOne min-h-screen">
        <Navbar.DashboardPrimaryNavbar />
        <Navbar.DashboardSecondaryNavbar />
        <div className="container mx-auto py-10 px-5 sm:px-5">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Downloads</h2>
          {sample.map((items, index) => (
            <div
              key={index}
              className="grid grid-cols-12 container mb-4 bg-white rounded-lg"
            >
              <div className="lg:col-span-1 col-span-3 my-auto p-2.5">
                <div className="h-[4.375rem] w-[4.375rem] rounded-lg bg-gray-300"></div>
              </div>
              <div className="lg:col-span-4 col-span-9 my-auto p-2.5 ">
                <h3 className="text-base font-bold text-gray-900">
                  Simple and Awesome Product Title Here
                </h3>
                <h3 className="text-sm text-gray-600">
                  Lorem Ipsum has been the industry standard dummy text
                </h3>
              </div>
              <div className="col-span-3 block lg:hidden" />
              <div className="lg:col-span-5 sm:col-span-7 col-span-9 lg:m-auto p-2.5 flex items-center">
                <h3 className="text-lg text-gray-700 mr-8">$500</h3>
                <h3 className="text-lg text-blueTwo">Lifetime Subscription</h3>
              </div>
              <div className="col-span-3 block sm:hidden" />
              <div className="sm:col-span-2 col-span-9 relative lg:my-auto lg:ml-auto mr-auto  lg:mr-6 p-2.5  cursor-pointer">
                <div className="border border-grayLight bg-backgroundGrayOne p-3 rounded-lg">
                  <BsThreeDotsVertical className="w-5 h-5" />
                </div>
                {/* <div className='absolute container'>
                            <Dropdown />
                        </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return <LoaderGrowing />
}

export default Downloads

const Dropdown = () => {
  return (
    <div className=" w-full bg-red-400">
      {/* <Link href="#"><a className='text-sm text-white p-4 rounded-lg bg-gradient-to-br from-blueOne to-blueTwo flex items-center '>Start Your Project Free</a></Link> */}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ipsum.
    </div>
  )
}
