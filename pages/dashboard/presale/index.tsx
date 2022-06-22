import { useRouter } from 'next/router'
import React from 'react'
import { LoaderGrowing } from '../../../src/lib/loader'
import { useUser } from '../../../src/lib/useUser'

const PreSale = () => {
  const { loggedIn, user } = useUser()
  const router = useRouter()
  const sample = [1, 2, 3, 4]

  React.useEffect(() => {
    router.back()
  }, [router])

  //   if (!user && !loggedIn) {
  //     return <UserNotLogin />;
  //   }

  //   if (loggedIn && user) {
  //     return (
  //       <div className="bg-backgroundGrayOne min-h-screen">
  //         <Navbar.DashboardPrimaryNavbar />
  //         <Navbar.DashboardSecondaryNavbar />
  //         <div className="container mx-auto py-10 px-5 sm:px-0">
  //           <h2 className="text-2xl font-bold text-gray-900 mb-10">Pre-Sale</h2>
  //           {sample.map((items, index) => (
  //             <div
  //               key={index}
  //               className="grid grid-cols-12 container mb-4 p-3 md:p-0 bg-white rounded-lg"
  //             >
  //               <div className="md:col-span-1 col-span-4  md:my-auto md:p-2.5 ">
  //                 <div className="h-[3.75rem] w-[3.75rem] rounded-lg bg-blueTwo"></div>
  //               </div>
  //               <div className="md:col-span-4 col-span-8 md:my-auto md:p-2.5  ">
  //                 <h3 className="text-base font-bold text-gray-900">
  //                   Simple and Awesome Product Title Here
  //                 </h3>
  //               </div>
  //               <div className="col-span-4 block md:hidden" />
  //               <div className="md:col-span-5 col-span-8 md:m-auto md:p-2.5 ">
  //                 <div className=" flex items-center">
  //                   <div className="flex flex-col items-center mr-3">
  //                     <h3 className="text-xl font-bold text-gray-900">15</h3>
  //                     <h5 className="text-xxs text-gray-500">Days</h5>
  //                   </div>
  //                   <div className="text-4xl mr-3 pb-2.5">:</div>
  //                   <div className="flex flex-col items-center mr-3">
  //                     <h3 className="text-xl font-bold text-gray-900">22</h3>
  //                     <h5 className="text-xxs text-gray-500">Hours</h5>
  //                   </div>
  //                   <div className="text-4xl mr-3 pb-2.5">:</div>
  //                   <div className="flex flex-col items-center mr-3">
  //                     <h3 className="text-xl font-bold text-gray-900">48</h3>
  //                     <h5 className="text-xxs text-gray-500">Minutes</h5>
  //                   </div>
  //                   <div className="text-4xl mr-3 pb-2.5">:</div>
  //                   <div className="flex flex-col items-center mr-3">
  //                     <h3 className="text-xl font-bold text-gray-900">36</h3>
  //                     <h5 className="text-xxs text-gray-500">Seconds</h5>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="col-span-4 block md:hidden" />
  //               <div className="md:col-span-2 col-span-8 md:m-auto md:p-2.5 ">
  //                 <h3 className="text-white py-0.5 px-2.5 rounded-full text-xs bg-gradient-to-br from-purpleLight to-purpleDark inline">
  //                   Status
  //                 </h3>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     );
  //   }

  return <LoaderGrowing />
}

export default PreSale
