import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Layout from "../../../src/components/Layout";
import { LoaderGrowing } from "../../../src/lib/loader";
import { useUser, UserNotLogin } from "../../../src/lib/useUser";

const Tickets = () => {
  const { loggedIn, user } = useUser();

  if (!user && !loggedIn) {
    return <UserNotLogin />;
  }

  if (loggedIn && user) {
    return (
      <div>
        <Layout.AdminDashboard>
          <div
            className="py-7 px-12 bg-backgroundGrayOne overflow-y-auto"
            style={{ height: "calc(100vh - 75px)" }}
          >
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Tickets</h1>
              <button className="text-sm text-white py-2.5 px-4 rounded-md bg-blueTwo">
                Create Tickets
              </button>
            </div>
            <div className="items-center mt-8 sm:flex hidden">
              <h3 className="text-sm text-gray-900 font-semibold mr-8">
                Active Ticket
              </h3>
              <h3 className="text-sm text-gray-600 font-semibold mr-8">
                New Ticket Request
              </h3>
              <h3 className="text-sm text-gray-600 font-semibold mr-8">
                Closed Ticket
              </h3>
            </div>
            <div className="h-0.5 w-full mt-3 bg-[#eceef1] sm:block hidden">
              <div className="h-0.5 bg-blueTwo w-24" />
            </div>
            <div className="w-full py-4 px-5 sm:hidden block rounded-lg border border-[#DDE6F5] mt-8">
              <select
                name="cars"
                id="cars"
                aria-label="cars"
                className="w-full text-gray-700 border-none outline-none bg-transparent"
              >
                <option value="volvo">Active Ticket</option>
                <option value="saab">New Ticket Request</option>
                <option value="opel">Closed Ticket</option>
              </select>
            </div>
            <div className="mt-8 rounded-lg bg-white p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h1 className="text-base text-gray-900 font-bold">
                  Product List
                </h1>
                <div className="xl:w-56 sm:w-44 w-full py-2.5 px-3 rounded-lg border border-[#DDE6F5] flex items-center  mt-4 sm:mt-0">
                  <input
                    type="text"
                    className="border-none outline-none bg-transparent w-full"
                    placeholder="Search"
                  />
                  <div>
                    <BiSearchAlt2 className="text-gray-500 w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="2xl:grid grid-cols-12 mt-8 hidden">
                <div className="col-span-1 py-4 pl-4 bg-backgroundGrayOne">
                  <h3 className="text-sm text-gray-900">#</h3>
                </div>
                <div className="col-span-4 py-4 bg-backgroundGrayOne">
                  <h3 className="text-sm text-gray-900">Name</h3>
                </div>
                <div className="col-span-2 py-4 bg-backgroundGrayOne">
                  <h3 className="text-sm text-gray-900">Category</h3>
                </div>
                <div className="col-span-2 py-4 bg-backgroundGrayOne">
                  <h3 className="text-sm text-gray-900">Create Date</h3>
                </div>
                <div className="col-span-2 py-4 bg-backgroundGrayOne">
                  <h3 className="text-sm text-gray-900">Status</h3>
                </div>
                <div className="col-span-1 py-4 pl-3 bg-backgroundGrayOne">
                  <h3 className="text-sm text-gray-900 text-right pr-4">
                    Action
                  </h3>
                </div>

                <div className="col-span-1 py-6 my-auto">
                  <h3 className="text-sm text-gray-900">1</h3>
                </div>
                <div className="col-span-4 py-6 my-auto ">
                  <h3 className="text-sm text-blueTwo">
                    Ticket Subject Here Lorem Ipsum Dummy Text...
                  </h3>
                </div>
                <div className="col-span-2 py-6 my-auto  flex items-center">
                  <h3 className="text-sm text-gray-700">
                    Ticket Category Here
                  </h3>
                </div>
                <div className="col-span-2 py-6 my-auto ">
                  <h3 className="text-sm text-gray-700">12 June 2022</h3>
                </div>
                <div className="col-span-2 py-6  my-auto ">
                  <h3 className="text-white py-0.5 px-2.5 rounded-full text-xs bg-gradient-to-br from-greenLight to-greenDark inline">
                    Open
                  </h3>
                </div>
                <div className="col-span-1 py-6 my-auto ml-auto">
                  <div className="border border-grayLight bg-backgroundGrayOne p-3 rounded-lg ">
                    <BsThreeDotsVertical className="w-5 h-5" />
                  </div>
                </div>
                <div className="col-span-12">
                  <hr className="w-full bg-backgroundGrayOne" />
                </div>
              </div>

              <hr className="w-full mt-10 block 2xl:hidden" />
              <div className="grid grid-cols-12 container md:mt-5 mt-4 2xl:hidden">
                <div className="col-span-4 p-4 ">
                  <h3 className="text-sm text-gray-900">#</h3>
                </div>
                <div className="col-span-8 p-4 ">
                  <h3 className="text-sm text-gray-900">1</h3>
                </div>
                <div className="col-span-4 p-4 ">
                  <h3 className="text-sm text-gray-900">Name</h3>
                </div>
                <div className="col-span-8 p-4 ">
                  <h3 className="text-sm text-blueTwo">
                    Ticket Subject Here Lorem Ipsum Dummy Text...
                  </h3>
                </div>
                <div className="col-span-4 p-4 ">
                  <h3 className="text-sm text-gray-900">Category</h3>
                </div>
                <div className="col-span-8 p-4 flex items-center">
                  <h3 className="text-sm text-gray-700">
                    Ticket Category Here
                  </h3>
                </div>
                <div className="col-span-4 p-4 ">
                  <h3 className="text-sm text-gray-900">Create Date</h3>
                </div>
                <div className="col-span-8 p-4 ">
                  <h3 className="text-sm text-gray-700">12 June 2022</h3>
                </div>
                <div className="col-span-4 p-4 ">
                  <h3 className="text-sm text-gray-900">Status</h3>
                </div>
                <div className="col-span-8 p-4 ">
                  <h3 className="text-white py-0.5 px-2.5 rounded-full text-xs bg-gradient-to-br from-greenLight to-greenDark inline">
                    Open
                  </h3>
                </div>
                <div className="col-span-4 p-4 ">
                  <h3 className="text-sm text-gray-900">Action</h3>
                </div>
                <div className="col-span-8 p-4 mr-auto">
                  <div className="border border-grayLight bg-backgroundGrayOne p-3 rounded-lg ">
                    <BsThreeDotsVertical className="w-5 h-5" />
                  </div>
                </div>
                <div className="col-span-12">
                  <hr className="w-full bg-backgroundGrayOne" />
                </div>
              </div>
              <div className="flex sm:flex-row flex-col justify-between items-center mt-6">
                <h2 className="tex-base font-bold text-gray-700">
                  Total 1234 Products
                </h2>
                <div className="mt-3 sm:mt-0">
                  <button className="text-sm text-gray-100 py-3 px-4 rounded-lg bg-gradient-to-br from-blueOne to-blueTwo mr-2">
                    1
                  </button>
                  <button className="text-sm text-gray-600 py-3 px-4 rounded-lg bg-backgroundGrayOne mr-2">
                    2
                  </button>
                  <button className="text-sm text-gray-600 py-3 px-4 rounded-lg bg-backgroundGrayOne mr-2">
                    3
                  </button>
                  <button className="text-sm text-gray-600 py-3 px-4 rounded-lg bg-backgroundGrayOne">
                    4
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Layout.AdminDashboard>
      </div>
    );
  }

  return <LoaderGrowing />;
};

export default Tickets;
