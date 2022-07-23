import styled from "@emotion/styled";
import { deleteCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsList } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineArrowNarrowRight, HiOutlineLogout } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RiSettings3Fill, RiUserFill } from "react-icons/ri";
import { useSWRConfig } from "swr";
import ImageOpt from "../../lib/Image";
import { useUser } from "../../lib/useUser";
import ForgetPassword from "../../Sections/Authentication/ForgetPassword";
import Login from "../../Sections/Authentication/Login";
import Registration from "../../Sections/Authentication/Registration";
import DropDownProduct from "../DropDownProduct";
import DropDownService from "../DropDownService";
// Resources json file import
import resourcesData from "./resources.json";

const DefaultNavbar = () => {
  const [proDis, setProdDis] = useState<string>("hidden");
  const [serDis, setSerDis] = useState<string>("hidden");
  const [proColor, setProColor] = useState("text-gray-700");
  const [serColor, setSerColor] = useState("text-gray-700");
  const [loginShow, setLoginShow] = useState<boolean>(false);
  const [registerShow, setRegisterShow] = useState<boolean>(false);
  const [forgetPassShow, setForgetPassShow] = useState<boolean>(false);
  const [sideBarContent, setSideBarContent] = useState<string>("hidden");
  const [profileDropdown, setProfileDropdown] = useState<string>("hidden");
  const [sideBarServiceContent, setSideBarServiceContent] =
    useState<string>("hidden");
  const [sideBar, setSideBar] = useState<string>("-left-full");
  const { user, loggedIn } = useUser();
  const { mutate } = useSWRConfig();
  const [toggle, setToggle] = useState<boolean>(false);
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
    deleteCookie("token");
    setProfileDropdown("hidden");
    handleUserImageShow();
    router.push("/");
    mutate("/api/user/self", null, false);
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

  const handelForgetPassModal = () => {
    setForgetPassShow(!forgetPassShow);
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

  console.log("resourcesData", resourcesData);

  return (
    <GlobalStyled className="flex items-center container mx-auto justify-between xl:py-10 md:py-7 sm:py-6 py-5 px-5 sm:px-0 relative">
      {/* <Link href="/"><a className='lg:text-2xl sm:text-xl font-bold'>Brand <span className='text-blue-600'>Logo</span></a></Link> */}
      <Link href="/">
        <a>
          <Image
            src="/brandLogo.svg"
            alt="js Template"
            width="136"
            height="42"
          />
        </a>
      </Link>

      <div className="sm:flex items-center hidden menu__wrapper">
        <Link href="/">
          <a className=" lg:text-base sm:text-sm text-gray-700 cursor-pointer mx-3">
            Home
          </a>
        </Link>
        <div
          onClick={productDropdown}
          className={`flex group items-center lg:text-base sm:text-sm ease-in duration-200 hover:text-secondary text-gray-700 cursor-pointer mx-6`}
        >
          <span className="mr-2 leading-[48px]">Products</span>
          <IoIosArrowDown />
          <div
            className={`absolute hidden top-[5.5rem] group-hover:sm:block lg:left-56 sm:left-28 z-20 ease-out duration-700`}
          >
            <DropDownProduct handler={productDropdown} />
          </div>
        </div>
        {/* <div
          onClick={serviceDropdown}
          className={`mx-7 flex items-center lg:text-base sm:text-sm ease-in duration-200 ${serColor} cursor-pointer`}
        >
          <span className="mr-3">{"UI Kits & Templates"}</span>
          <IoIosArrowDown />
        </div> */}
        <div className="menu__wrapper__item">
          <span className=" lg:text-base sm:text-sm text-gray-700 cursor-pointer flex gap-2.5 items-center">
            Resources
            <IoIosArrowDown />
          </span>
          {/* Resources Sub Menu Items */}
          <div className="menu__wrapper__item__sub">
            <div className="menu__wrapper__item__sub__header flex justify-between">
              {resourcesData.map((item, i) => (
                <>
                  <div className="w-[33.33%] pl-[15px] pr-[15px] relative">
                    {item.name ? (
                      <h3 className="title">{item.name}</h3>
                    ) : (
                      <div className="h-[22px] mb-[10px]" />
                    )}
                  </div>
                </>
              ))}
            </div>
            <div className="menu__wrapper__item__sub__overlay flex justify-between">
              {resourcesData.map((item, i) => (
                <>
                  <div className="w-[33.33%] pl-[15px] pr-[15px] relative">
                    {item.items.length > 0 && (
                      <ul className="list">
                        {item.items.map((subItem) => (
                          <li className="item">
                            <Link href={subItem.url}>
                              <a>
                                <ImageOpt
                                  width={30}
                                  height={30}
                                  src={subItem.icon}
                                  alt="image"
                                  className="icon"
                                  layout={undefined}
                                  noPlaceholder={undefined}
                                />
                                {subItem.name}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                    {
                      // last index of item array to add border to last item
                      i === resourcesData.length - 1 && <hr className="hr" />
                    }
                  </div>
                </>
              ))}
            </div>
            {/* <div className="menu__wrapper__item__sub__footer">
              <div className="flex justify-between gap-2.5">
                <div>
                  <h4>You will love our solution</h4>
                  <p>
                    Lightning fast speed, secure and scale your website as you
                    need
                  </p>
                </div>
                <div>View All Solutions</div>
              </div>
            </div> */}
          </div>
        </div>

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
        <Link href="/cart">
          <a className=" mr-10 w-10 h-10 grid justify-center items-center rounded-md bg-gradient-to-br from-orangeOne to-orangeTwo shadow-4xl cursor-pointer">
            <FaShoppingCart className="text-white text-xl" />
          </a>
        </Link>
        {user && loggedIn ? (
          <button
            type="button"
            aria-label="user"
            onClick={handleProfileDropdown}
          >
            <a className="cursor-pointer flex items-end">
              <Image src={user.avatar_url} alt="user" width="40" height="40" />
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
            <RiUserFill className="w-5 h-5 mr-4" />{" "}
            <span>
              Hi,{" "}
              {user
                ? `${user.first_name} ${user.last_name}`
                : "user not loaded correctly"}
            </span>
          </a>
        </div>
        <Link href="dashboard/downloads">
          <a className={`${styleDash}`}>
            <RiUserFill className="w-5 h-5 mr-4" /> <span>Downloads</span>
          </a>
        </Link>
        <Link href="/dashboard/accounts-settings">
          <a className={`${styleSettings} mt-1.5`}>
            <RiSettings3Fill className="w-5 h-5 mr-4" />{" "}
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
        <BsList style={{ color: "white", width: "18px", height: "15.5px" }} />
      </div>
      {/* <div
        className={`absolute hidden top-24  lg:left-56 sm:left-28 z-20 ease-out duration-700 sm:${proDis}`}
      >
        <DropDownProduct handler={productDropdown} />
      </div> */}
      <div
        className={`absolute hidden top-24 lg:left-56 sm:left-28 z-20 ease-out duration-700 sm:${serDis}`}
      >
        <DropDownService />
      </div>

      {/* ProDis overlay function */}
      {/* <div
        className={`sm:${proDis} hidden fixed w-full h-full left-0 top-0 z-10`}
        onClick={productDropdown}
      /> */}

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
    </GlobalStyled>
  );
};

export default DefaultNavbar;
const GlobalStyled = styled.div`
  & .menu__wrapper {
    &__item {
      line-height: 48px;
      position: relative;
      &:hover {
        & .menu__wrapper__item__sub {
          opacity: 1;
          visibility: visible;
          transform: perspective(999px) rotateX(0deg) translateZ(25px)
            translate3d(-44%, 15px, 5px) !important;
        }
      }
      &__sub {
        position: absolute;
        max-width: 600px;
        background: #fff;
        width: 600px;
        border-radius: 12px;
        /* border: 1px solid rgba(0, 0, 0, 0.2); */
        transform: perspective(999px) rotateX(0deg) translateZ(25px)
          translate3d(-44%, 15px, 5px);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease-in-out;
        box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%),
          0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
        top: 80%;
        &::before {
          /* border-bottom: 11px solid rgba(0, 0, 0, 0.2); */
          border-left: 11px solid transparent;
          border-right: 11px solid transparent;
          content: "";
          display: inline-block;
          position: absolute;
          right: 0;
          left: 0;
          margin-right: auto;
          margin-left: auto;
          width: 1px;
          top: -11px;
        }
        &::after {
          border-bottom: 11px solid #fff;
          border-left: 11px solid transparent;
          border-right: 11px solid transparent;
          content: "";
          display: inline-block;
          position: absolute;
          right: 0;
          left: 0;
          margin-right: auto;
          margin-left: auto;
          width: 1px;
          top: -10px;
        }
        &__overlay {
          padding: 20px;
          & .title {
            font-size: 15px;
            font-weight: 700;
            color: #333;
            margin: 0 0 10px 0;
            line-height: 1.428571429;
          }
          & .list {
            & .item {
              margin-bottom: 7px;
              & a {
                color: #67748e;
                display: flex;
                align-items: center;
                gap: 5px;
                font-size: 14px;
                font-weight: 300;
                line-height: 1.428571429;
                text-decoration: none;
                text-align: left;
                & .icon {
                  width: 30px;
                  height: 30px;
                }
              }
            }
          }
          & .hr {
            position: absolute;
            background-color: transparent;
            height: 100%;
            left: 0;
            top: 0;
            width: 1px;
            background-image: linear-gradient(
              180deg,
              transparent,
              rgba(216, 216, 216, 0.66),
              transparent
            );
          }
        }
        &__header {
          padding: 7px 20px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        }
        &__footer {
          padding: 7px 20px;
          background: #f7f8fc;
        }
      }
    }
  }
`;
