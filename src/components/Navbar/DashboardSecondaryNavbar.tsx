import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsFillFileDiffFill, BsFillTriangleFill } from "react-icons/bs";
import { FaReceipt, FaShoppingCart } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { RiUserFill } from "react-icons/ri";
import { VscListSelection } from "react-icons/vsc";

const DashboardSecondaryNavbar = () => {
  const router = useRouter();
  const [modal, setModal] = useState<string>("hidden");
  const [layout, setLayout] = useState<string>("block");
  const [sidebar, setSidebar] = useState<string>("hidden");

  const handleTicketModal = () => {
    if (modal === "hidden") {
      setModal("flex");
      setLayout("fixed");
    } else {
      setModal("hidden");
      setLayout("block");
    }
  };

  const handleSidebar = () => {
    if (sidebar === "hidden") {
      setSidebar("block");
    } else {
      setSidebar("hidden");
    }
  };

  // const style = {
  //   marginRight: 10,
  //   color: router.asPath === "/dashboard" ? 'text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center mr-3' : 'text-sm text-gray-600 p-4 rounded-lg flex items-center mr-3',
  // }
  const styleDash =
    router.asPath === "/dashboard"
      ? "text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center mr-3"
      : "text-sm text-gray-600 p-4 rounded-lg flex items-center mr-3";
  const stylePre =
    router.asPath === "/dashboard/presale"
      ? "text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center mr-3"
      : "text-sm text-gray-600 p-4 rounded-lg flex items-center mr-3";
  const styleDownloads =
    router.asPath === "/dashboard/downloads"
      ? "text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center mr-3"
      : "text-sm text-gray-600 p-4 rounded-lg flex items-center mr-3";
  const styleTickets =
    router.asPath === "/dashboard/tickets"
      ? "text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center mr-3"
      : "text-sm text-gray-600 p-4 rounded-lg flex items-center mr-3";
  const styleProjects =
    router.asPath === "/dashboard/projects"
      ? "text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center mr-3"
      : "text-sm text-gray-600 p-4 rounded-lg flex items-center mr-3";
  return (
    <div className="bg-white mt-1 drop-shadow-sm relative z-30">
      <div className="container relative mx-auto flex items-center justify-between py-2 px-5 sm:px-0">
        <VscListSelection
          className="w-6 h-6 block lg:hidden"
          onClick={handleSidebar}
        />
        <div className=" items-center hidden lg:flex">
          <Link href="/dashboard">
            <a className={`${styleDash}`}>
              <RiUserFill className="w-5 h-5 mr-4" /> <span>My Dashboard</span>
            </a>
          </Link>
          <Link href="/dashboard/presale">
            <a className={`${stylePre}`}>
              <FaShoppingCart className="w-5 h-5 mr-4" /> <span>Pre-Sale</span>
            </a>
          </Link>
          <Link href="/dashboard/downloads">
            <a className={`${styleDownloads}`}>
              <HiOutlineDownload className="w-5 h-5 mr-4" />{" "}
              <span>Downloads</span>
            </a>
          </Link>
          <Link href="/dashboard/tickets">
            <a className={`${styleTickets}`}>
              <FaReceipt className="w-5 h-5 mr-4" /> <span>Tickets</span>
            </a>
          </Link>
          <Link href="/dashboard/projects">
            <a className={`${styleProjects}`}>
              <BsFillFileDiffFill className="w-5 h-5 mr-4" />{" "}
              <span>Projects</span>
            </a>
          </Link>
        </div>
        <button
          className="text-sm text-white p-4 rounded-lg bg-gradient-to-br from-blueOne to-blueTwo flex items-center "
          onClick={handleTicketModal}
        >
          Start Your Project Free
        </button>
        <div
          className={`absolute ${sidebar} z-50 lg:hidden rounded-lg shadow-xl p-3 top-20 bg-white w-60`}
        >
          <div className="flex flex-col">
            <Link href="/dashboard">
              <a className={`${styleDash}`}>
                <RiUserFill className="w-5 h-5 mr-4" />{" "}
                <span>My Dashboard</span>
              </a>
            </Link>
            <Link href="/dashboard/presale">
              <a className={`${stylePre}`}>
                <FaShoppingCart className="w-5 h-5 mr-4" />{" "}
                <span>Pre-Sale</span>
              </a>
            </Link>
            <Link href="/dashboard/downloads">
              <a className={`${styleDownloads}`}>
                <HiOutlineDownload className="w-5 h-5 mr-4" />{" "}
                <span>Downloads</span>
              </a>
            </Link>
            <Link href="/dashboard/tickets">
              <a className={`${styleTickets}`}>
                <FaReceipt className="w-5 h-5 mr-4" /> <span>Tickets</span>
              </a>
            </Link>
            <Link href="/dashboard/projects">
              <a className={`${styleProjects}`}>
                <BsFillFileDiffFill className="w-5 h-5 mr-4" />{" "}
                <span>Projects</span>
              </a>
            </Link>
          </div>
          <BsFillTriangleFill className="text-white absolute -top-3" />
        </div>
      </div>
      <div
        className={`fixed ${modal} duration-300 w-full h-screen bg-gray-900 -top-28 left-0 right-0 bottom-0 opacity-50`}
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
                name="cars"
                id="cars"
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
  );
};

export default DashboardSecondaryNavbar;
