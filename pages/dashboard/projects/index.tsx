import React from "react";
import { LoaderGrowing } from "../../../src/lib/loader";
import { UserNotLogin, useUser } from "../../../src/lib/useUser";
import Navbar from "./../../../src/components/Navbar";

const Projects = () => {
  const { loggedIn, user } = useUser();

  if (!user && !loggedIn) {
    return <UserNotLogin />;
  }

  if (loggedIn && user) {
    return (
      <div className="bg-backgroundGrayOne min-h-screen">
        <Navbar.DashboardPrimaryNavbar />
        <Navbar.DashboardSecondaryNavbar />
        <div className="container mx-auto py-10 px-5 sm:px-0">
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>

          <div className="mt-8 p-7 bg-white rounded-lg border border-cartImageBgOne shadow-sm">
            <div className="flex items-center">
              <h3 className="text-base font-semibold text-gray-900 mr-10">
                Active
              </h3>
              <h3 className="text-base font-semibold text-gray-900 mr-10">
                Cancelled
              </h3>
              <h3 className="text-base font-semibold text-gray-900 mr-10">
                Completed
              </h3>
            </div>
            <div className="h-0.5 mt-4 w-ful bg-backgroundGrayOne"></div>
            <div className="lg:grid grid-cols-12 container mt-6 hidden">
              <div className="col-span-1 p-4 bg-backgroundGrayOne">
                <h3 className="text-sm text-gray-900">#</h3>
              </div>
              <div className="col-span-4 p-4 bg-backgroundGrayOne">
                <h3 className="text-sm text-gray-900">Project Title</h3>
              </div>
              <div className="col-span-2 p-4 bg-backgroundGrayOne">
                <h3 className="text-sm text-gray-900">Price</h3>
              </div>
              <div className="col-span-1 p-4 bg-backgroundGrayOne">
                <h3 className="text-sm text-gray-900">Start Date</h3>
              </div>
              <div className="col-span-1 p-4 bg-backgroundGrayOne">
                <h3 className="text-sm text-gray-900">End Date</h3>
              </div>
              <div className="col-span-2 p-4 bg-backgroundGrayOne">
                <h3 className="text-sm text-gray-900">Progress</h3>
              </div>
              <div className="col-span-1 p-4 bg-backgroundGrayOne">
                <h3 className="text-sm text-gray-900">Status</h3>
              </div>

              <div className="col-span-1 px-4 py-6 my-auto">
                <h3 className="text-sm text-gray-900">1</h3>
              </div>
              <div className="col-span-4 px-4 py-6 my-auto ">
                <h3 className="text-base text-gray-900 font-bold">
                  Simple and Awesome Project Title Here
                </h3>
                <h3 className="text-sm text-gray-600">Web Development</h3>
              </div>
              <div className="col-span-2 px-4 py-6 my-auto  flex items-center">
                <h3 className="text-sm text-gray-900 mr-4">$5000</h3>
                <h3 className="text-greenDark py-0.5 px-2.5 rounded-full text-xs bg-[#e7f8ef]">
                  Due
                </h3>
              </div>
              <div className="col-span-1 px-4 py-6 my-auto ">
                <h3 className="text-sm text-gray-900">10-04-2022</h3>
              </div>
              <div className="col-span-1 px-4 py-6 my-auto ">
                <h3 className="text-sm text-gray-900">24-06-2022</h3>
              </div>
              <div className="col-span-2 px-4 py-6 my-auto ">
                <div className="w-full h-1.5 rounded-full bg-backgroundGrayOne">
                  <div className="h-full w-3/4 bg-gradient-to-br from-blueOne to-blueTwo rounded-full"></div>
                </div>
              </div>
              <div className="col-span-1 px-4 py-6 my-auto ">
                <h3 className="text-white py-0.5 px-2.5 rounded-full text-xs bg-gradient-to-br from-orangeOne to-orangeTwo inline">
                  Status
                </h3>
              </div>
              <div className="col-span-12">
                <hr className="w-full bg-backgroundGrayOne" />
              </div>

              <div className="col-span-1 px-4 py-6 my-auto">
                <h3 className="text-sm text-gray-900">2</h3>
              </div>
              <div className="col-span-4 px-4 py-6 my-auto ">
                <h3 className="text-base text-gray-900 font-bold">
                  Simple and Awesome Project Title Here
                </h3>
                <h3 className="text-sm text-gray-600">Web Development</h3>
              </div>
              <div className="col-span-2 px-4 py-6 my-auto  flex items-center">
                <h3 className="text-sm text-gray-900 mr-4">$5000</h3>
                <h3 className="text-redDark py-0.5 px-2.5 rounded-full text-xs bg-[#fff1ec]">
                  Due
                </h3>
              </div>
              <div className="col-span-1 px-4 py-6 my-auto ">
                <h3 className="text-sm text-gray-900">10-04-2022</h3>
              </div>
              <div className="col-span-1 px-4 py-6 my-auto ">
                <h3 className="text-sm text-gray-900">24-06-2022</h3>
              </div>
              <div className="col-span-2 px-4 py-6 my-auto ">
                <div className="w-full h-1.5 rounded-full bg-backgroundGrayOne">
                  <div className="h-full w-3/4 bg-gradient-to-br from-blueOne to-blueTwo rounded-full"></div>
                </div>
              </div>
              <div className="col-span-1 px-4 py-6 my-auto ">
                <h3 className="text-white py-0.5 px-2.5 rounded-full text-xs bg-gradient-to-br from-purpleLight to-purpleDark inline">
                  Status
                </h3>
              </div>
              <div className="col-span-12">
                <hr className="w-full bg-backgroundGrayOne" />
              </div>
            </div>

            <hr className="w-full mt-10 block lg:hidden" />
            <div className="grid grid-cols-12 container md:mt-5 mt-4 lg:hidden">
              <div className="col-span-4 p-4 ">
                <h3 className="text-sm text-gray-900">#</h3>
              </div>
              <div className="col-span-8 p-4 ">
                <h3 className="text-sm text-gray-900">1</h3>
              </div>
              <div className="col-span-4 p-4 ">
                <h3 className="text-sm text-gray-900">Project Title</h3>
              </div>
              <div className="col-span-8 p-4 ">
                <h3 className="text-base text-gray-900 font-bold">
                  Simple and Awesome Project Title Here
                </h3>
                <h3 className="text-sm text-gray-600">Web Development</h3>
              </div>
              <div className="col-span-4 p-4 ">
                <h3 className="text-sm text-gray-900">Price</h3>
              </div>
              <div className="col-span-8 p-4 flex items-center">
                <h3 className="text-sm text-gray-900 mr-4">$5000</h3>
                <h3 className="text-greenDark py-0.5 px-2.5 rounded-full text-xs bg-[#e7f8ef]">
                  Due
                </h3>
              </div>
              <div className="col-span-4 p-4 ">
                <h3 className="text-sm text-gray-900">Start Date</h3>
              </div>
              <div className="col-span-8 p-4 ">
                <h3 className="text-sm text-gray-900">10-04-2022</h3>
              </div>
              <div className="col-span-4 p-4 ">
                <h3 className="text-sm text-gray-900">End Date</h3>
              </div>
              <div className="col-span-8 p-4 ">
                <h3 className="text-sm text-gray-900">10-04-2022</h3>
              </div>
              <div className="col-span-4 p-4 ">
                <h3 className="text-sm text-gray-900">Progress</h3>
              </div>
              <div className="col-span-8 p-4 ">
                <div className="w-full h-1.5 rounded-full bg-backgroundGrayOne">
                  <div className="h-full w-3/4 bg-gradient-to-br from-blueOne to-blueTwo rounded-full"></div>
                </div>
              </div>
              <div className="col-span-4 p-4 ">
                <h3 className="text-sm text-gray-900">Status</h3>
              </div>
              <div className="col-span-8 p-4 ">
                <h3 className="text-white py-0.5 px-2.5 rounded-full text-xs bg-gradient-to-br from-purpleLight to-purpleDark inline">
                  Status
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <LoaderGrowing />;
};

export default Projects;
