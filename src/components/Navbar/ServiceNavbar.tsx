import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsList } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { RiLoginCircleLine, RiSettings3Fill, RiUserFill } from "react-icons/ri";
import { ToastProvider } from "react-toast-notifications";
import { useSWRConfig } from "swr";
import { useUser } from "../../lib/useUser";
import ForgetPassword from "../../Sections/Authentication/ForgetPassword";
import Login from "../../Sections/Authentication/Login";
import Registration from "../../Sections/Authentication/Registration";
import { localGet, localRemove } from "../../utils/localStorage";
import DropDownProduct from "../DropDownProduct";
import DropDownService from "../DropDownService";

const ServiceNavbar = () => {
  const [proDis, setProdDis] = useState<string>("hidden");
  const [serDis, setSerDis] = useState<string>("hidden");
  const [proColor, setProColor] = useState("text-gray-100");
  const [serColor, setSerColor] = useState("text-gray-100");
  const [loginShow, setLoginShow] = useState<boolean>(false);
  const [registerShow, setRegisterShow] = useState<boolean>(false);
  const [forgetPassShow, setForgetPassShow] = useState<boolean>(false);
  const { user, loggedIn } = useUser();
  const { mutate } = useSWRConfig();
  const [toggle, setToggle] = useState<boolean>(false);
  const [profileDropdown, setProfileDropdown] = useState<string>("hidden");
  const router = useRouter();

  const styleDash =
    router.asPath === "/dashboard"
      ? "text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center"
      : "text-sm text-gray-600 p-4 rounded-lg flex items-center";
  const styleSettings =
    router.asPath === "/dashboard/accounts-settings"
      ? "text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center"
      : "text-sm text-gray-600 p-4 rounded-lg flex items-center";

  const handleLogout = () => {
    localRemove("jst_u_info");
    router.push("/");
    mutate("api/v1/user/self", null, false);
  };

  const handleProfileDropdown = () => {
    if (profileDropdown === "hidden") {
      setProfileDropdown("block");
    } else {
      setProfileDropdown("hidden");
    }
  };

  const handleUserImageShow = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  // toggle login modal
  const toggleLoginModal = () => {
    setLoginShow(!loginShow);
  };

  // toggle register modal
  const toggleRegModal = () => {
    setRegisterShow(!registerShow);
  };

  // forget password modal
  const handelForgetPassModal = () => {
    setForgetPassShow(!forgetPassShow);
  };

  const productDropdown = () => {
    setSerDis("hidden");
    setSerColor("text-gray-100");
    if (proColor === "text-gray-100") {
      setProColor("text-secondary");
    } else {
      setProColor("text-gray-100");
    }
    if (proDis === "hidden") {
      setProdDis("block");
    } else {
      setProdDis("hidden");
    }
  };
  const serviceDropdown = () => {
    setProdDis("hidden");
    setProColor("text-gray-100");
    if (serColor === "text-gray-100") {
      setSerColor("text-secondary");
    } else {
      setSerColor("text-gray-100");
    }
    if (serDis === "hidden") {
      setSerDis("block");
    } else {
      setSerDis("hidden");
    }
  };
  return (
    <div className="flex items-center justify-between container mx-auto px-5 sm:px-0 xl:py-6 md:py-7 sm:py-6 py-5 relative">
      {/* <Link href="/"><a className='lg:text-2xl sm:text-xl font-bold text-gray-100'>Brand <span>Logo</span></a></Link> */}
      <Link href="/">
        <a>
          <Image
            src="/serviceBrandLogo.svg"
            alt="logo"
            width="136"
            height="42"
          />
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
        <Link href="/resources">
          <a className=" lg:text-base sm:text-sm text-gray-100 cursor-pointer">
            Resources
          </a>
        </Link>
        <Link href="/blog">
          <a className="mx-7 lg:text-base sm:text-sm text-gray-100 cursor-pointer">
            Blog
          </a>
        </Link>
        <Link href="/contact-us">
          <a className=" lg:text-base sm:text-sm text-gray-100 cursor-pointer">
            Contact us
          </a>
        </Link>
      </div>
      <div className="sm:flex items-center hidden">
        {/* cart icon hidden */}
        {/* <Link href="/preSalePage">
          <a className="w-10 h-10 grid justify-center items-center rounded-md bg-gray-100 mr-4 drop-shadow-4xl cursor-pointer">
            <FaShoppingCart className="text-white text-xl" />
          </a>
        </Link> */}
        {user && loggedIn ? (
          <button
            type="button"
            aria-label="user"
            onClick={handleProfileDropdown}
          >
            <a className="cursor-pointer flex items-end">
              <Image src="/man.svg" alt="" width="40" height="40" />
            </a>
          </button>
        ) : (
          <button
            type="button"
            aria-label="Login"
            className="w-10 h-10 grid justify-center items-center rounded-md bg-gray-100 drop-shadow-3xl cursor-pointer"
            onClick={toggleLoginModal}
          >
            <RiUserFill className="text-gray-700 text-2xl" />
          </button>
        )}
      </div>
      <div
        className={`absolute p-2.5 ${profileDropdown} rounded-lg drop-shadow-xl bg-white top-24 right-0 ml-auto z-40`}
      >
        <Link href="/dashboard">
          <a className={`${styleDash}`}>
            <RiUserFill className="w-5 h-5 mr-4" /> <span>My Dashboard</span>
          </a>
        </Link>
        <Link href="/dashboard/accounts-settings">
          <a className={`${styleSettings} mt-1.5`}>
            <RiSettings3Fill className="w-5 h-5 mr-4" />{" "}
            <span>Accounts Settings</span>
          </a>
        </Link>
        <button onClick={handleLogout}>
          <a
            className={`text-sm text-gray-600 p-4 rounded-lg flex items-center mt-1.5`}
          >
            <HiOutlineLogout className="w-5 h-5 mr-4" /> <span>Logout</span>
          </a>
        </button>
      </div>
      <div className="p-3 rounded-md bg-gray-100 drop-shadow-3xl sm:hidden block cursor-pointer">
        <BsList style={{ color: "#3E9645", width: "18px", height: "15.5px" }} />
      </div>
      <div
        className={`absolute hidden top-28 lg:left-56 sm:left-28 z-20 ease-out duration-700 sm:${proDis}`}
      >
        <DropDownProduct handler={productDropdown} />
      </div>
      <div
        className={`absolute hidden top-28 lg:left-56 sm:left-28 z-20 ease-out duration-700 sm:${serDis}`}
      >
        <DropDownService />
      </div>

      {/* ProDis overlay function */}
      <div
        className={`sm:${proDis} hidden fixed w-full h-full left-0 top-0 z-10`}
        onClick={productDropdown}
      />

      {/* SerDis overlay function */}
      <div
        className={`sm:${serDis} hidden fixed w-full h-full left-0 top-0 z-10`}
        onClick={serviceDropdown}
      />

      <Login
        handleLoginModal={toggleLoginModal}
        handleRegModal={toggleRegModal}
        handelForgetPassModal={handelForgetPassModal}
        handleUserImageShow={handleUserImageShow}
        loginShow={loginShow}
      />

      <Registration
        handleLoginModal={toggleLoginModal}
        handleRegModal={toggleRegModal}
        regShow={registerShow}
      />
      <ForgetPassword
        handelForgetPassModal={handelForgetPassModal}
        modalShow={forgetPassShow}
      />
    </div>
  );
};

export default ServiceNavbar;
