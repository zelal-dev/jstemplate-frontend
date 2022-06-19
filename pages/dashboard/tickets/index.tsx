import React, { useState } from "react";
import Navbar from "../../../src/components/Navbar";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import { LoaderGrowing } from "../../../src/lib/loader";
import { UserNotLogin, useUser } from "../../../src/lib/useUser";

const Tickets = () => {
  const { loggedIn, user } = useUser();

  const [modal, setModal] = useState<string>("hidden");
  const [layout, setLayout] = useState<string>("block");

  const handleTicketModal = () => {
    if (modal === "hidden") {
      setModal("flex");
      setLayout("fixed");
    } else {
      setModal("hidden");
      setLayout("block");
    }
  };

  if (!user && !loggedIn) {
    return <UserNotLogin />;
  }

  if (loggedIn && user) {
    return (
      <div className={`bg-backgroundGrayOne min-h-screen ${layout} w-full`}>
        <Navbar.DashboardPrimaryNavbar />
        <Navbar.DashboardSecondaryNavbar />
        <div className="container mx-auto py-10 px-5 sm:px-0">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Tickets</h2>
            <button
              onClick={handleTicketModal}
              className="text-sm py-3 px-6 rounded-lg text-gray-100 bg-gradient-to-br from-blueOne to-blueTwo"
            >
              Create New Ticket
            </button>
          </div>
          <div className="mt-8 p-7 bg-white rounded-lg border border-cartImageBgOne shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-xl font-bold text-gray-900">Open Project</h1>
              <div className="mt-4 sm:mt-0">
                <button className="text-sm py-3 px-4 rounded-lg text-gray-700 bg-backgroundGrayOne mr-2">
                  Open
                </button>
                <button className="text-sm py-3 px-4 rounded-lg text-gray-700 bg-backgroundGrayOne mr-2">
                  Awaiting
                </button>
                <button className="text-sm py-3 px-4 rounded-lg text-gray-700 bg-backgroundGrayOne ">
                  Closed
                </button>
              </div>
            </div>
            <div className="lg:grid grid-cols-12 container mt-8 hidden">
              <div className="col-span-1 p-4 bg-backgroundGrayOne">
                <h3 className="text-sm text-gray-900">#</h3>
              </div>
              <div className="col-span-4 p-4 bg-backgroundGrayOne">
                <h3 className="text-sm text-gray-900">Subject</h3>
              </div>
              <div className="col-span-2 p-4 bg-backgroundGrayOne">
                <h3 className="text-sm text-gray-900">Category</h3>
              </div>
              <div className="col-span-2 p-4 bg-backgroundGrayOne">
                <h3 className="text-sm text-gray-900">Created</h3>
              </div>
              <div className="col-span-2 p-4 bg-backgroundGrayOne">
                <h3 className="text-sm text-gray-900">Status</h3>
              </div>
              <div className="col-span-1 p-4 bg-backgroundGrayOne">
                <h3 className="text-sm text-gray-900"></h3>
              </div>

              <div className="col-span-1 px-4 py-6 my-auto">
                <h3 className="text-sm text-gray-900">1</h3>
              </div>
              <div className="col-span-4 px-4 py-6 my-auto ">
                <h3 className="text-sm text-gray-700">
                  Ticket Subject Here Lorem Ipsum Dummy Text...
                </h3>
              </div>
              <div className="col-span-2 px-4 py-6 my-auto  flex items-center">
                <h3 className="text-sm text-gray-700">Ticket Category</h3>
              </div>
              <div className="col-span-2 px-4 py-6 my-auto ">
                <h3 className="text-sm text-gray-700">24-04-2022</h3>
              </div>
              <div className="col-span-2 px-4 py-6 my-auto ">
                <h3 className="text-white py-0.5 px-2.5 rounded-full text-xs bg-gradient-to-br from-yellowLight to-yellowDark inline">
                  Awaiting
                </h3>
              </div>
              <div className="col-span-1 px-4 py-6 my-auto ">
                <Link href="/dashboard/tickets/details">
                  <a className="text-sm text-blueTwo">View Ticket</a>
                </Link>
              </div>
              <div className="col-span-12">
                <hr className="w-full bg-backgroundGrayOne" />
              </div>

              <div className="col-span-1 px-4 py-6 my-auto">
                <h3 className="text-sm text-gray-900">2</h3>
              </div>
              <div className="col-span-4 px-4 py-6 my-auto ">
                <h3 className="text-sm text-gray-700">
                  Ticket Subject Here Lorem Ipsum Dummy Text...
                </h3>
              </div>
              <div className="col-span-2 px-4 py-6 my-auto  flex items-center">
                <h3 className="text-sm text-gray-700">Ticket Category</h3>
              </div>
              <div className="col-span-2 px-4 py-6 my-auto ">
                <h3 className="text-sm text-gray-700">24-04-2022</h3>
              </div>
              <div className="col-span-2 px-4 py-6 my-auto ">
                <h3 className="text-white py-0.5 px-2.5 rounded-full text-xs bg-gradient-to-br from-yellowLight to-yellowDark inline">
                  Awaiting
                </h3>
              </div>
              <div className="col-span-1 px-4 py-6 my-auto ">
                <Link href="/dashboard/tickets/details">
                  <a className="text-sm text-blueTwo">View Ticket</a>
                </Link>
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
                <h3 className="text-sm text-gray-900">Subject</h3>
              </div>
              <div className="col-span-8 p-4 ">
                <h3 className="text-sm text-gray-700">
                  Ticket Subject Here Lorem Ipsum Dummy Text...
                </h3>
              </div>
              <div className="col-span-4 p-4 ">
                <h3 className="text-sm text-gray-900">Category</h3>
              </div>
              <div className="col-span-8 p-4 flex items-center">
                <h3 className="text-sm text-gray-700">Ticket Category</h3>
              </div>
              <div className="col-span-4 p-4 ">
                <h3 className="text-sm text-gray-900">Created</h3>
              </div>
              <div className="col-span-8 p-4 ">
                <h3 className="text-sm text-gray-700">24-04-2022</h3>
              </div>
              <div className="col-span-4 p-4 ">
                <h3 className="text-sm text-gray-900">Status</h3>
              </div>
              <div className="col-span-8 p-4 ">
                <h3 className="text-white py-0.5 px-2.5 rounded-full text-xs bg-gradient-to-br from-yellowLight to-yellowDark inline">
                  Awaiting
                </h3>
              </div>

              <div className="col-span-4 p-4 "></div>
              <div className="col-span-8 p-4 ">
                <Link href="/dashboard/tickets/details">
                  <a className="text-sm text-blueTwo">View Ticket</a>
                </Link>
              </div>
            </div>

            <div className="mt-6">
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
          <div
            className={`fixed ${modal} duration-300 w-full h-screen bg-gray-900 top-0 left-0 right-0 opacity-50`}
          />
          <div
            className={`fixed w-full duration-300 h-screen ${modal} justify-center items-center top-0 left-0 right-0`}
          >
            <div className="xl:p-12 lg:p-10 md:p-8 sm:p-7 p-6 bg-white rounded-lg relative">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-center">
                Add New Ticket
              </h1>
              <form action="" className="mt-7 flex flex-col items-center">
                <div className="xl:w-96 lg:w-80 md:w-72 w-64 py-4 px-5 rounded-lg border border-[#DDE6F5]">
                  <select
                    name="category"
                    aria-label="cars"
                    className="w-full text-gray-700 border-none outline-none"
                  >
                    <option value="volvo">Select Category</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <input
                  type="text"
                  className="xl:w-96 lg:w-80 md:w-72 w-64 py-4 px-5 rounded-lg border border-[#DDE6F5] outline-none mt-4"
                  placeholder="Subject"
                />
                <textarea
                  name=""
                  id=""
                  className="h-40 xl:w-96 lg:w-80 md:w-72 w-64 py-4 px-5 rounded-lg border border-[#DDE6F5] outline-none mt-4"
                  placeholder="Write your message..."
                ></textarea>
                <input
                  type="button"
                  value="Submit Ticket"
                  className="text-sm py-3 px-6 rounded-lg text-gray-100 bg-gradient-to-br from-blueOne to-blueTwo mt-6"
                />
              </form>
              <div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={handleTicketModal}
              >
                <ImCross className="w-3 h-3 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <LoaderGrowing />;
};

export default Tickets;

// #e6f0fe
// #fff1ec
// #f2edfe
// #e7f8ef
// #ffedee
