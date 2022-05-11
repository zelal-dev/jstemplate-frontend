import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsList } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RiUserFill } from "react-icons/ri";
import { ToastProvider } from "react-toast-notifications";
import ForgetPassword from "../../Sections/Authentication/ForgetPassword";
import Login from "../../Sections/Authentication/Login";
import Registration from "../../Sections/Authentication/Registration";
import { localGet } from "../../utils/localStorage";
import DropDownProduct from "../DropDownProduct";
import DropDownService from "../DropDownService";

const DefaultNavbar = () => {
  const [proDis, setProdDis] = useState<string>("hidden");
  const [serDis, setSerDis] = useState<string>("hidden");
  const [proColor, setProColor] = useState("text-gray-700");
  const [serColor, setSerColor] = useState("text-gray-700");
  const [sideBarContent, setSideBarContent] = useState<string>("hidden");
  const [loginModal, setLoginModal] = useState<string>("hidden");
  const [signUpModal, setSignUpModal] = useState<string>("hidden");
  const [forgetPassModal, setForgetPassModal] = useState<string>("hidden");
  const [sideBarServiceContent, setSideBarServiceContent] =
    useState<string>("hidden");
  const [sideBar, setSideBar] = useState<string>("-left-full");
  const [userInfo, setUserInfo] = useState<any>()
  const [toggle, setToggle] = useState<boolean>(false)
  // const local = localGet("jst_u_info");
  // if (local !== null) {
  //   console.log(local.token);
  // }
  useEffect(()=>{
    setUserInfo(localGet("jst_u_info"));
  }, [toggle])

  const handleUserImageShow = () =>{
    if(toggle){
      setToggle(false)
    }
    else{
      setToggle(true)
    }
  }
  const handleLoginModal = () => {
    setSignUpModal("hidden");
    if (loginModal === "hidden") {
      setLoginModal("flex");
    } else {
      setLoginModal("hidden");
    }
  };
  const handleRegModal = () => {
    setLoginModal("hidden");
    if (signUpModal === "hidden") {
      setSignUpModal("flex");
    } else {
      setSignUpModal("hidden");
    }
  };

  const handelForgetPassModal = (e: any) => {
    e.preventDefault();
    setLoginModal("hidden");
    if (forgetPassModal === "hidden") {
      setForgetPassModal("flex");
    } else {
      setForgetPassModal("hidden");
    }
  };

  const productDropdown = () => {
    setSerDis("hidden");
    setSerColor("text-gray-700");
    if (proColor === "text-gray-700") {
      setProColor("text-secondary");
    } else {
      setProColor("text-gray-700");
    }
    if (proDis === "hidden") {
      setProdDis("block");
    } else {
      setProdDis("hidden");
    }
  };
  const serviceDropdown = () => {
    setProdDis("hidden");
    setProColor("text-gray-700");
    if (serColor === "text-gray-700") {
      setSerColor("text-secondary");
    } else {
      setSerColor("text-gray-700");
    }
    if (serDis === "hidden") {
      setSerDis("block");
    } else {
      setSerDis("hidden");
    }
  };

  const handleSidebar = () => {
    if (sideBar === "-left-full") {
      setSideBar("left-0");
    } else {
      setSideBar("-left-full");
    }
  };

  const handleSidebarContent = () => {
    if (sideBarContent === "hidden") {
      setSideBarContent("block");
    } else if (sideBarContent === "block") {
      setSideBarContent("hidden");
    }
  };
  const handleServiceSidebarContent = () => {
    if (sideBarServiceContent === "hidden") {
      setSideBarServiceContent("block");
    } else if (sideBarServiceContent === "block") {
      setSideBarServiceContent("hidden");
    }
  };

  return (
    <div className="flex items-center container mx-auto justify-between xl:py-10 md:py-7 sm:py-6 py-5 px-5 sm:px-0">
      {/* <Link href="/"><a className='lg:text-2xl sm:text-xl font-bold'>Brand <span className='text-blue-600'>Logo</span></a></Link> */}
      <Link href="/">
        <a>
          <Image src="/brandLogo.svg" alt="" width="136" height="42" />
        </a>
      </Link>
      <div className="sm:flex items-center hidden">
        <div
          onClick={productDropdown}
          className={`flex items-center lg:text-base sm:text-sm ease-in duration-200 ${proColor} cursor-pointer`}
        >
          <span className="mr-3">Products</span>
          <IoIosArrowDown />
        </div>
        <div
          onClick={serviceDropdown}
          className={`mx-7 flex items-center lg:text-base sm:text-sm ease-in duration-200 ${serColor} cursor-pointer`}
        >
          <span className="mr-3">Service</span>
          <IoIosArrowDown />
        </div>
        <Link href="">
          <a className=" lg:text-base sm:text-sm text-gray-700 cursor-pointer">
            About
          </a>
        </Link>
        <Link href="/blog">
          <a className="mx-7 lg:text-base sm:text-sm text-gray-700 cursor-pointer">
            Blog
          </a>
        </Link>
        <Link href="/contact-us">
          <a className=" lg:text-base sm:text-sm text-gray-700 cursor-pointer">
            Contact us
          </a>
        </Link>
      </div>
      <div className="sm:flex items-center hidden">
        <Link href="/preSalePage">
          <a className="p-3 rounded-md bg-gradient-to-br from-orangeOne to-orangeTwo mr-4 shadow-4xl cursor-pointer">
            <FaShoppingCart
              style={{ color: "white", width: "18px", height: "18px" }}
            />
          </a>
        </Link>
        {userInfo?.token ? (
          <Link href="">
            <a className="cursor-pointer flex items-end">
              <Image src="/man.svg" alt="" width="42" height="42" />
            </a>
          </Link>
        ) : (
          <Link href="">
            <a
              className="p-3 rounded-md bg-gradient-to-br from-blueOne to-blueTwo shadow-3xl cursor-pointer"
              onClick={handleLoginModal}
            >
              <RiUserFill
                style={{ color: "white", width: "18px", height: "18px" }}
              />
            </a>
          </Link>
        )}
      </div>
      <div
        className="p-3 rounded-md bg-gradient-to-r from-blueOne to-blueTwo shadow-3xl sm:hidden block cursor-pointer"
        onClick={handleSidebar}
      >
        <BsList style={{ color: "white", width: "18px", height: "15.5px" }} />
      </div>
      <div
        className={`absolute hidden top-24 lg:left-1/4 md:left-40 sm:left-28 z-20 ease-out duration-700 sm:${proDis}`}
      >
        <DropDownProduct />
      </div>
      <div
        className={`absolute hidden top-24 lg:left-1/4 md:left-40 sm:left-28 z-20 ease-out duration-700 sm:${serDis}`}
      >
        <DropDownService />
      </div>
      <div
        className={`fixed top-0 left-0 right-0 h-screen ${loginModal} bg-black opacity-80 z-40`}
      />
      <div
        className={`fixed top-0 left-0 right-0 h-screen z-50 ${loginModal} items-center justify-center`}
      >
        <ToastProvider>
          <Login
            handleLoginModal={handleLoginModal}
            handleRegModal={handleRegModal}
            handelForgetPassModal={handelForgetPassModal}
            handleUserImageShow={handleUserImageShow}
          />
        </ToastProvider>
      </div>
      <div
        className={`fixed top-0 left-0 right-0 h-screen ${signUpModal} bg-black opacity-80 z-40`}
      />
      <div
        className={`fixed top-0 left-0 right-0 h-screen z-50 ${signUpModal} items-center justify-center`}
      >
        <Registration
          handleLoginModal={handleLoginModal}
          handleRegModal={handleRegModal}
        />
      </div>
      <div
        className={`fixed top-0 left-0 right-0 h-screen ${forgetPassModal} bg-black opacity-80 z-40`}
      />
      <div
        className={`fixed top-0 left-0 right-0 h-screen z-50 ${forgetPassModal} items-center justify-center`}
      >
        <ForgetPassword handelForgetPassModal={handelForgetPassModal} />
      </div>
      <div
        className={`fixed ${sideBar} ease-in duration-300 z-20 top-0 w-full h-screen bg-gray-800 p-10 overflow-auto`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-100">Brand Logo</h1>
          <ImCross className="text-xl text-gray-100" onClick={handleSidebar} />
        </div>
        <div className="mt-12">
          <div>
            <div
              className="flex justify-between items-center"
              onClick={handleSidebarContent}
            >
              <h3 className="text-base text-gray-300">Product</h3>
              {sideBarContent === "hidden" ? (
                <MdKeyboardArrowDown className="text-base text-gray-300 cursor-pointer" />
              ) : (
                <MdKeyboardArrowUp className="text-base text-gray-300 cursor-pointer" />
              )}
            </div>
            <div className={`mt-4 ${sideBarContent} ease-in-out`}>
              <div className="p-3 rounded-lg bg-gray-900 flex items-center">
                <div className="px-3 pt-3 pb-2 rounded-lg bg-gray-800 mr-4">
                  <Image src="/sidebarCart.svg" width="18" height="18" alt="" />
                </div>
                <h3 className="text-gray-300 font-semibold text-sm">
                  MetaJobs- Job Board Theme
                </h3>
              </div>
              <div className="p-3 rounded-lg bg-gray-900 flex items-center mt-1.5">
                <div className="px-3 pt-3 pb-2 rounded-lg bg-gray-800 mr-4">
                  <Image src="/sidebarCart.svg" width="18" height="18" alt="" />
                </div>
                <h3 className="text-gray-300 font-semibold text-sm">
                  MetaJobs- Job Board Theme
                </h3>
              </div>
              <div className="p-3 rounded-lg bg-gray-900 flex items-center mt-1.5">
                <div className="px-3 pt-3 pb-2 rounded-lg bg-gray-800 mr-4">
                  <Image src="/sidebarCart.svg" width="18" height="18" alt="" />
                </div>
                <h3 className="text-gray-300 font-semibold text-sm">
                  MetaJobs- Job Board Theme
                </h3>
              </div>
              <div className="p-3 rounded-lg bg-gray-900 flex items-center mt-1.5">
                <div className="px-3 pt-3 pb-2 rounded-lg bg-gray-800 mr-4">
                  <Image src="/sidebarCart.svg" width="18" height="18" alt="" />
                </div>
                <h3 className="text-gray-300 font-semibold text-sm">
                  MetaJobs- Job Board Theme
                </h3>
              </div>
              <div className="p-3 rounded-lg bg-gray-900 flex items-center mt-1.5">
                <div className="px-3 pt-3 pb-2 rounded-lg bg-gray-800 mr-4">
                  <Image src="/sidebarCart.svg" width="18" height="18" alt="" />
                </div>
                <h3 className="text-gray-300 font-semibold text-sm">
                  MetaJobs- Job Board Theme
                </h3>
              </div>
              <button className="w-full py-4 rounded-lg bg-gray-900 text-[#0BB55C] mt-1.5 flex items-center justify-center">
                <span>View All Solution</span>
                <HiOutlineArrowNarrowRight className="text-[#0BB55C] ml-2" />
              </button>
            </div>
            <hr className="w-full text-gray-700 opacity-20 mt-5" />
          </div>
          <div className="mt-5">
            <div
              className="flex justify-between items-center"
              onClick={handleServiceSidebarContent}
            >
              <h3 className="text-base text-gray-300">Product</h3>
              {sideBarServiceContent === "hidden" ? (
                <MdKeyboardArrowDown className="text-base text-gray-300 cursor-pointer" />
              ) : (
                <MdKeyboardArrowUp className="text-base text-gray-300 cursor-pointer" />
              )}
            </div>
            <div
              className={`mt-4 ${sideBarServiceContent} duration-1000 transition ease-in-out`}
            >
              <div className="p-3 rounded-lg bg-gray-900 flex items-center">
                <div className="px-3 pt-3 pb-2 rounded-lg bg-gray-800 mr-4">
                  <Image src="/sidebarCart.svg" width="18" height="18" alt="" />
                </div>
                <h3 className="text-gray-300 font-semibold text-sm">
                  MetaJobs- Job Board Theme
                </h3>
              </div>
              <div className="p-3 rounded-lg bg-gray-900 flex items-center mt-1.5">
                <div className="px-3 pt-3 pb-2 rounded-lg bg-gray-800 mr-4">
                  <Image src="/sidebarCart.svg" width="18" height="18" alt="" />
                </div>
                <h3 className="text-gray-300 font-semibold text-sm">
                  MetaJobs- Job Board Theme
                </h3>
              </div>
              <div className="p-3 rounded-lg bg-gray-900 flex items-center mt-1.5">
                <div className="px-3 pt-3 pb-2 rounded-lg bg-gray-800 mr-4">
                  <Image src="/sidebarCart.svg" width="18" height="18" alt="" />
                </div>
                <h3 className="text-gray-300 font-semibold text-sm">
                  MetaJobs- Job Board Theme
                </h3>
              </div>
              <div className="p-3 rounded-lg bg-gray-900 flex items-center mt-1.5">
                <div className="px-3 pt-3 pb-2 rounded-lg bg-gray-800 mr-4">
                  <Image src="/sidebarCart.svg" width="18" height="18" alt="" />
                </div>
                <h3 className="text-gray-300 font-semibold text-sm">
                  MetaJobs- Job Board Theme
                </h3>
              </div>
              <div className="p-3 rounded-lg bg-gray-900 flex items-center mt-1.5">
                <div className="px-3 pt-3 pb-2 rounded-lg bg-gray-800 mr-4">
                  <Image src="/sidebarCart.svg" width="18" height="18" alt="" />
                </div>
                <h3 className="text-gray-300 font-semibold text-sm">
                  MetaJobs- Job Board Theme
                </h3>
              </div>
              <button className="w-full py-4 rounded-lg bg-gray-900 text-[#0BB55C] mt-1.5 flex items-center justify-center">
                <span>View All Solution</span>
                <HiOutlineArrowNarrowRight className="text-[#0BB55C] ml-2" />
              </button>
            </div>
            <hr className="w-full text-gray-700 opacity-20 mt-5" />
          </div>
          <div className="mt-5 cursor-pointer">
            <button className="text-base text-gray-300">About</button>
            <hr className="w-full text-gray-700 opacity-20 mt-5" />
          </div>
          <div className="mt-5 cursor-pointer">
            <button className="text-base text-gray-300">Contact Us</button>
            <hr className="w-full text-gray-700 opacity-20 mt-5" />
          </div>
          <div className="mt-5 cursor-pointer">
            <button className="text-base text-gray-300">My Cart</button>
            <hr className="w-full text-gray-700 opacity-20 mt-5" />
          </div>
          <div className="mt-5 cursor-pointer">
            <button className="text-base text-gray-300">
              Login or Registration
            </button>
            <hr className="w-full text-gray-700 opacity-20 mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultNavbar;
