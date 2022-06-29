import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BsList } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { HiOutlineArrowNarrowRight, HiOutlineLogout } from 'react-icons/hi'
import { ImCross } from 'react-icons/im'
import { IoIosArrowDown } from 'react-icons/io'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { RiLoginCircleLine, RiSettings3Fill, RiUserFill } from 'react-icons/ri'
import { ToastProvider } from 'react-toast-notifications'
import { useSWRConfig } from 'swr'
import { useUser } from '../../lib/useUser'
import ForgetPassword from '../../Sections/Authentication/ForgetPassword'
import Login from '../../Sections/Authentication/Login'
import Registration from '../../Sections/Authentication/Registration'
import { localGet, localRemove } from '../../utils/localStorage'
import DropDownProduct from '../DropDownProduct'
import DropDownService from '../DropDownService'

const DefaultNavbar = () => {
  const [proDis, setProdDis] = useState<string>('hidden')
  const [serDis, setSerDis] = useState<string>('hidden')
  const [proColor, setProColor] = useState('text-gray-700')
  const [serColor, setSerColor] = useState('text-gray-700')
  const [loginShow, setLoginShow] = useState<boolean>(false)
  const [registerShow, setRegisterShow] = useState<boolean>(false)
  const [forgetPassShow, setForgetPassShow] = useState<boolean>(false)
  const [sideBarContent, setSideBarContent] = useState<string>('hidden')
  const [profileDropdown, setProfileDropdown] = useState<string>('hidden')
  const [sideBarServiceContent, setSideBarServiceContent] =
    useState<string>('hidden')
  const [sideBar, setSideBar] = useState<string>('-left-full')
  const { user, loggedIn } = useUser()
  const { mutate } = useSWRConfig()
  const [toggle, setToggle] = useState<boolean>(false)
  const router = useRouter()
  const styleDash =
    router.asPath === '/dashboard'
      ? 'text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center'
      : 'text-sm text-gray-600 p-4 rounded-lg flex items-center'
  const styleSettings =
    router.asPath === '/dashboard/accounts-settings'
      ? 'text-sm text-white p-4 rounded-lg bg-blueTwo flex items-center'
      : 'text-sm text-gray-600 p-4 rounded-lg flex items-center'

  const handleLogout = () => {
    localRemove('jst_u_info')
    setProfileDropdown('hidden')
    handleUserImageShow()
    router.push('/')
    mutate('api/user/self', null, false)
  }

  const handleProfileDropdown = () => {
    if (profileDropdown === 'hidden') {
      setProfileDropdown('block')
    } else {
      setProfileDropdown('hidden')
    }
  }

  const handleUserImageShow = () => {
    if (toggle) {
      setToggle(false)
    } else {
      setToggle(true)
    }
  }

  // toggle login modal
  const toggleLoginModal = () => {
    setLoginShow(!loginShow)
  }

  // toggle register modal
  const toggleRegModal = () => {
    setRegisterShow(!registerShow)
  }

  const handelForgetPassModal = () => {
    setForgetPassShow(!forgetPassShow)
  }

  const productDropdown = () => {
    setSerDis('hidden')
    setSerColor('text-gray-700')
    if (proColor === 'text-gray-700') {
      setProColor('text-secondary')
    } else {
      setProColor('text-gray-700')
    }
    if (proDis === 'hidden') {
      setProdDis('block')
    } else {
      setProdDis('hidden')
    }
  }
  const serviceDropdown = () => {
    setProdDis('hidden')
    setProColor('text-gray-700')
    if (serColor === 'text-gray-700') {
      setSerColor('text-secondary')
    } else {
      setSerColor('text-gray-700')
    }
    if (serDis === 'hidden') {
      setSerDis('block')
    } else {
      setSerDis('hidden')
    }
  }

  const handleSidebar = () => {
    if (sideBar === '-left-full') {
      setSideBar('left-0')
    } else {
      setSideBar('-left-full')
    }
  }

  const handleSidebarContent = () => {
    if (sideBarContent === 'hidden') {
      setSideBarContent('block')
    } else if (sideBarContent === 'block') {
      setSideBarContent('hidden')
    }
  }
  const handleServiceSidebarContent = () => {
    if (sideBarServiceContent === 'hidden') {
      setSideBarServiceContent('block')
    } else if (sideBarServiceContent === 'block') {
      setSideBarServiceContent('hidden')
    }
  }

  return (
    <div className="flex items-center container mx-auto justify-between xl:py-10 md:py-7 sm:py-6 py-5 px-5 sm:px-0 relative">
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
        <Link href="/resources">
          <a className=" lg:text-base sm:text-sm text-gray-700 cursor-pointer">
            Resources
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
        {/* cart icon hidden */}
        {/* <Link href="/preSalePage">
          <a className="w-10 h-10 grid justify-center items-center rounded-md bg-gradient-to-br from-orangeOne to-orangeTwo mr-4 shadow-4xl cursor-pointer">
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
            className="w-10 h-10 grid justify-center items-center rounded-md bg-gradient-to-br from-blueOne to-blueTwo shadow-3xl cursor-pointer"
            onClick={toggleLoginModal}
          >
            <RiUserFill className="text-white text-2xl" />
          </button>
        )}
      </div>
      <div
        className={`absolute p-2.5 ${profileDropdown} rounded-lg drop-shadow-xl bg-white top-24 right-0 ml-auto z-40`}
      >
        <div>
          <a className={`${styleDash}`}>
            <RiUserFill className="w-5 h-5 mr-4" /> <span>Hi, JS Template</span>
          </a>
        </div>
        <Link href="dashboard/downloads">
          <a className={`${styleDash}`}>
            <RiUserFill className="w-5 h-5 mr-4" /> <span>Downloads</span>
          </a>
        </Link>
        <Link href="/dashboard/accounts-settings">
          <a className={`${styleSettings} mt-1.5`}>
            <RiSettings3Fill className="w-5 h-5 mr-4" />{' '}
            <span>Accounts Settings</span>
          </a>
        </Link>
        <button type="button" onClick={handleLogout}>
          <a
            className={`text-sm text-gray-600 p-4 rounded-lg flex items-center mt-1.5`}
          >
            <HiOutlineLogout className="w-5 h-5 mr-4" /> <span>Logout</span>
          </a>
        </button>
      </div>
      <div
        className="p-3 rounded-md bg-gradient-to-r from-blueOne to-blueTwo shadow-3xl sm:hidden block cursor-pointer"
        onClick={handleSidebar}
      >
        <BsList style={{ color: 'white', width: '18px', height: '15.5px' }} />
      </div>
      <div
        className={`absolute hidden top-24  lg:left-56 sm:left-28 z-20 ease-out duration-700 sm:${proDis}`}
      >
        <DropDownProduct handler={productDropdown} />
      </div>
      <div
        className={`absolute hidden top-24 lg:left-56 sm:left-28 z-20 ease-out duration-700 sm:${serDis}`}
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
      <div
        className={`fixed ${sideBar} ease-in duration-300 z-50 top-0 w-full h-screen bg-gray-800 p-10 overflow-auto`}
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
              {sideBarContent === 'hidden' ? (
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
              {sideBarServiceContent === 'hidden' ? (
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
  )
}

export default DefaultNavbar
