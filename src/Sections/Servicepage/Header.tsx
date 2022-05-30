import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type uxPlatformDataT = {
  desktop: number;
  mobile: number;
  tablet: number;
};
type uxPageTypeDataT = {
  landing: number;
  dashboard: number;
};

const Header = ({ colors }: { colors: any }) => {
  const [totalCost, setTotalCost] = useState<number>(0);
  const [disUx, setDisUx] = useState("block");
  const [disFront1, setDisFront1] = useState("hidden");
  const [disFront2, setDisFront2] = useState("hidden");
  const [ux, setUx] = useState<boolean>();
  const [uxCost, setUxCost] = useState<number>(0);
  const [uxPageNo, setUxPageNo] = useState<number>(0);
  const [uxPlatform, setUxPlatform] = useState<uxPlatformDataT>({
    desktop: 500,
    mobile: 400,
    tablet: 300,
  });
  const [uxPageType, setUxPageType] = useState<uxPageTypeDataT>({
    landing: 2000,
    dashboard: 2500,
  });

  useEffect(() => {
    handleTotalCost();
  }, [uxCost]);

  const handleTotalCost = () => {
    setTotalCost(uxCost);
  };

  const handleDisplayUx = () => {
    if (disUx === "hidden") {
      setDisUx("block");
    } else {
      setDisUx("hidden");
    }
  };
  const handleDisplayFront1 = () => {
    if (disFront1 === "hidden") {
      setDisFront1("block");
    } else {
      setDisFront1("hidden");
    }
  };
  const handleDisplayFront2 = () => {
    if (disFront2 === "hidden") {
      setDisFront2("block");
    } else {
      setDisFront2("hidden");
    }
  };

  const handleUx = () => {
    const ux = document.getElementById("uxCheck") as HTMLInputElement;
    if (ux.checked === false) {
      setUx(false);
      setTotalCost(0);
    } else {
      setUx(true);
      setTotalCost(uxCost);
    }
  };

  const handleUxPageNoInc = () => {
    if (uxPageNo > 0) {
      const singlePageCost = uxCost / uxPageNo;
      setUxCost(uxCost + singlePageCost);
    }
    setUxPageNo(uxPageNo + 1);
  };

  const handleUxPageNoDec = () => {
    if (uxPageNo > 0) {
      setUxPageNo(uxPageNo - 1);
      const singlePageCost = uxCost / uxPageNo;
      setUxCost(uxCost - singlePageCost);
    }
    if (uxPageNo === 1) {
      const desk = document.getElementById("uxDesk") as HTMLInputElement;
      const mob = document.getElementById("uxMob") as HTMLInputElement;
      const tab = document.getElementById("uxTab") as HTMLInputElement;
      const dash = document.getElementById("uxDash") as HTMLInputElement;
      const landing = document.getElementById("uxLanding") as HTMLInputElement;
      desk.checked = false;
      mob.checked = false;
      tab.checked = false;
      dash.checked = false;
      landing.checked = false;
    }
  };

  const handleUxPlatformDesk = () => {
    const desk = document.getElementById("uxDesk") as HTMLInputElement;
    if (desk !== null) {
      if (desk.checked === true) {
        if (uxPageNo > 0) {
          setUxCost(uxCost + uxPlatform.desktop * uxPageNo);
        } else {
          setUxCost(uxCost + uxPlatform.desktop);
        }
      } else {
        setUxCost(uxCost - uxPlatform.desktop * uxPageNo);
      }
    }
  };
  const handleUxPlatformMob = () => {
    const mob = document.getElementById("uxMob") as HTMLInputElement;
    if (mob !== null) {
      if (mob.checked === true) {
        if (uxPageNo > 0) {
          setUxCost(uxCost + uxPlatform.mobile * uxPageNo);
        } else {
          setUxCost(uxCost + uxPlatform.mobile);
        }
      } else {
        setUxCost(uxCost - uxPlatform.mobile * uxPageNo);
      }
    }
  };
  const handleUxPlatformTab = () => {
    const tab = document.getElementById("uxTab") as HTMLInputElement;
    if (tab !== null) {
      if (tab.checked === true) {
        if (uxPageNo > 0) {
          setUxCost(uxCost + uxPlatform.tablet * uxPageNo);
        } else {
          setUxCost(uxCost + uxPlatform.tablet);
        }
      } else {
        setUxCost(uxCost - uxPlatform.tablet * uxPageNo);
      }
    }
  };

  const handleUxPageLanding = () => {
    const box = document.getElementById("uxLanding") as HTMLInputElement;
    if (box !== null) {
      if (box.checked === true) {
        setUxCost(uxCost + uxPageType.landing * uxPageNo);
      } else {
        setUxCost(uxCost - uxPageType.landing * uxPageNo);
      }
    }
  };

  const handleUxPageDash = () => {
    const box = document.getElementById("uxDash") as HTMLInputElement;
    if (box !== null) {
      if (box.checked === true) {
        setUxCost(uxCost + uxPageType.dashboard * uxPageNo);
      } else {
        setUxCost(uxCost - uxPageType.dashboard * uxPageNo);
      }
    }
  };

  return (
    <div className="xl:py-20 lg:py-28 md:py-24 sm:py-20 py-16 px-5 sm:px-0 flex items-center flex-col lg:flex-row justify-between container mx-auto">
      <div className="lg:w-3/5 sm:w-4/5 w-full m:mr-16 mr-0  lg:pr-20 pr-0">
        <h1
          className="2xl:text-7xxl xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-gray-100 xl:leading-24 lg:leading-16 md:leading-10 sm:leading-9 leading-8 font-bold text-center lg:text-left"
          style={{ textShadow: "8px 8px 0px #191919" }}
        >
          MERN Stack Web Development
        </h1>
        <article className="xL:text-xl lg:text-lg md:text-base text-sm text-gray-100 xl:mt-8 lg:mt-7 md:mt-6 sm:mt-5 mt-4 text-center lg:text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type
        </article>
      </div>
      <div className="xl:p-10 lg:p-8 md:p-7 sm:p-6 p-5 rounded-lg bg-white lg:w-2/5 sm:w-3/4 w-full mt-16 lg:mt-0">
        {/* contact form */}
        <form>
          {/* <form className="grid gap-4" onSubmit={handleSubmit(onSubmitHandler)}> */}
          <div className="mb-4 ">
            <input
              className="w-full px-3 py-3 rounded border border-themeGrayLight focus:outline-none"
              type="text"
              placeholder="Your Name"
              // {...register("name", {
              //   required: "Name is required",
              //   minLength: {
              //     value: 3,
              //     message: "Name must be at least 3 characters",
              //   },
              // })}
            />
          </div>
          <div className="mb-4 ">
            <input
              className="w-full px-3 py-3 rounded border border-themeGrayLight focus:outline-none"
              type="text"
              placeholder="Your Email"
              // {...register("email", {
              //   required: "Email is required",
              //   pattern: {
              //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              //     message: "Invalid email address",
              //   },
              // })}
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-3 py-3 rounded border border-themeGrayLight focus:outline-none"
              type="text"
              placeholder="Your Phone"
              // {...register("mobile", {
              //   required: "Mobile is required",
              //   pattern: {
              //     value: /^[0-9]+$/,
              //     message: "Mobile must be numeric",
              //   },
              // })}
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full h-24 p-3 rounded border border-themeGrayLight focus:outline-none"
              placeholder="How can we help you ..."
              // {...register("message", {
              //   required: "This field is required",
              // })}
            />
          </div>
          <button
            type="submit"
            //   disabled={isSubmitting}
            className={`text-gray-100 text-base font-medium px-10 py-3.5 rounded-lg ${colors.bgPrimary} shadow-secondaryTemplate`}
          >
            {/* {isSubmitting ? "Please wait..." : "Send Message"} */}
            Send Message
          </button>
        </form>
        {/* calculator form  */}
        {/* <div className="flex justify-between items-center">
          <div>
            <h3 className="text-gray-900 font-bold xl:text-xl text-sm">
              Estimate Your Project Budget
            </h3>
          </div>
          <div className="flex items-end">
            <h6 className="xl:text-sm md:text-xs text-xxs md:pb-1 pb-0.5 xl:mr-2 mr-1 text-gray-500">
              Total:
            </h6>
            <h3 className="text-gray-900 font-bold xL:text-2xl  md:text-lg sm:text-base text-sm">
              ${totalCost}
            </h3>
          </div>
        </div>
        <div className="mt-7 p-4 rounded-md border border-grayLight">
          <div className=" flex items-center justify-between">
            <div className=" flex flex-col sm:flex-row sm:items-center justify-between sm:w-3/4 lg:w-4/5 w-auto">
              <div className="flex items-center">
                <input
                  aria-label="uxCheck"
                  type="checkbox"
                  id="uxCheck"
                  onClick={handleUx}
                />
                <h4 className="text-gray-700 font-bold text-sm xl:ml-5 md:ml-3 ml-1.5">
                  I need UI/UX Design in Figma{" "}
                </h4>
              </div>
              <h4 className="text-gray-700 font-bold text-sm mt-2 sm:mt-0 ml-5 sm:ml-0">
                ${uxCost}
              </h4>
            </div>
            <button>
              {disUx === "hidden" ? (
                <IoIosArrowDown
                  className="text-gray-500 w-2.5 h-2.5 cursor-pointer"
                  onClick={handleDisplayUx}
                />
              ) : (
                <IoIosArrowUp
                  className="text-gray-500 w-2.5 h-2.5 cursor-pointer"
                  onClick={handleDisplayUx}
                />
              )}
            </button>
          </div>
          <div className={`${disUx} duration-700`}>
            <div className="mt-5 flex justify-between items-center">
              <h3 className="text-sm text-gray-700">How many page you need</h3>
              <div className="flex items-center border border-grayLight rounded-md">
                <h5 className="text-sm text-gray-700 font-bold px-5">
                  {uxPageNo}
                </h5>
                <div className="flex flex-col">
                  <button
                    type="button"
                    aria-label="uxPageUp"
                    className="py-1 px-1 border border-grayLight"
                    onClick={handleUxPageNoInc}
                    disabled={!ux ? true : false}
                  >
                    <IoIosArrowUp className="text-gray-500 w-2 h-2" />
                  </button>
                  <button
                    type="button"
                    aria-label="uxPageDown"
                    className="py-1 px-1 border border-grayLight"
                    onClick={handleUxPageNoDec}
                    disabled={!ux ? true : false}
                  >
                    <IoIosArrowDown className="text-gray-500 w-2 h-2" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-between flex-col sm:flex-row lg:flex-col xl:flex-row xl:items-center">
              <h3 className="text-sm text-gray-700">Platform</h3>
              <div className="flex items-center mt-3 sm:mt-0 lg:mt-3 xl:mt-0">
                <div className="flex items-center mr-5">
                  <input
                    type="checkbox"
                    id="uxDesk"
                    aria-label="checkbox"
                    onClick={handleUxPlatformDesk}
                    disabled={uxPageNo === 0 || !ux ? true : false}
                  />
                  <h4 className="text-gray-700 text-sm ml-3">Desktop</h4>
                </div>
                <div className="flex items-center mr-5">
                  <input
                    type="checkbox"
                    aria-label="uxMob"
                    id="uxMob"
                    onClick={handleUxPlatformMob}
                    disabled={uxPageNo === 0 || !ux ? true : false}
                  />
                  <h4 className="text-gray-700 text-sm ml-3">Mobile</h4>
                </div>
                <div className="flex items-center">
                  <input
                    aria-label="uxTab"
                    type="checkbox"
                    id="uxTab"
                    onClick={handleUxPlatformTab}
                    disabled={uxPageNo === 0 || !ux ? true : false}
                  />
                  <h4 className="text-gray-700 text-sm ml-3">Tablet</h4>
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-between flex-col xl:flex-row sm:flex-row lg:flex-col xl:items-center">
              <h3 className="text-sm text-gray-700">Page Type</h3>
              <div className="flex items-center mt-3 sm:mt-0 lg:mt-3 xl:mt-0">
                <div className="flex items-center mr-5">
                  <input
                    type="checkbox"
                    aria-label="uxLanding"
                    id="uxLanding"
                    disabled={uxPageNo === 0 || !ux ? true : false}
                    onClick={handleUxPageLanding}
                  />
                  <h4 className="text-gray-700 text-sm ml-3">Landing Page</h4>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="uxDash"
                    aria-label="uxDash"
                    disabled={uxPageNo === 0 || !ux ? true : false}
                    onClick={handleUxPageDash}
                  />
                  <h4 className="text-gray-700 text-sm ml-3">Dashboard Page</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 p-4 rounded-md border border-grayLight">
          <div className=" flex items-center justify-between">
            <div className=" flex flex-col sm:flex-row sm:items-center justify-between sm:w-3/4 lg:w-4/5 w-auto">
              <div className="flex items-center">
                <input type="checkbox" aria-label="checkbox" />
                <h4 className="text-gray-700 font-bold text-sm xl:ml-5 md:ml-3 ml-1.5">
                  Frontend Development
                </h4>
              </div>
              <h4 className="text-gray-700 font-bold text-sm mt-2 sm:mt-0 ml-5 sm:ml-0">
                $234
              </h4>
            </div>
            <button>
              {disFront1 === "hidden" ? (
                <IoIosArrowDown
                  className="text-gray-500 w-2.5 h-2.5 cursor-pointer"
                  onClick={handleDisplayFront1}
                />
              ) : (
                <IoIosArrowUp
                  className="text-gray-500 w-2.5 h-2.5 cursor-pointer"
                  onClick={handleDisplayFront1}
                />
              )}
            </button>
          </div>
          <div className={`${disFront1} duration-700`}>
            <div className="mt-5 flex justify-between items-center">
              <h3 className="text-sm text-gray-700">Will be soon</h3>
            </div>
          </div>
        </div>
        <div className="mt-2 p-4 rounded-md border border-grayLight">
          <div className=" flex items-center justify-between">
            <div className=" flex flex-col sm:flex-row sm:items-center justify-between sm:w-3/4 lg:w-4/5 w-auto">
              <div className="flex items-center">
                <input type="checkbox" aria-label="check" />
                <h4 className="text-gray-700 font-bold text-sm xl:ml-5 md:ml-3 ml-1.5">
                  Frontend Development
                </h4>
              </div>
              <h4 className="text-gray-700 font-bold text-sm mt-2 sm:mt-0 ml-5 sm:ml-0">
                $234
              </h4>
            </div>
            <button>
              {disFront2 === "hidden" ? (
                <IoIosArrowDown
                  className="text-gray-500 w-2.5 h-2.5 cursor-pointer"
                  onClick={handleDisplayFront2}
                />
              ) : (
                <IoIosArrowUp
                  className="text-gray-500 w-2.5 h-2.5 cursor-pointer"
                  onClick={handleDisplayFront2}
                />
              )}
            </button>
          </div>
          <div className={`${disFront2} duration-700`}>
            <div className="mt-5 flex justify-between items-center">
              <h3 className="text-sm text-gray-700">Will be soon</h3>
            </div>
          </div>
        </div>
        <h4 className="text-gray-700 font-bold text-sm mt-5">
          Addional Task - $30/hour
        </h4>
        <div className="mt-6">
          <button className="text-gray-100 mr-2 text-sm font-medium p-4 rounded-lg bg-gradient-to-br from-greenSecondaryLight to-greenSecondaryDark shadow-green">
            Start Your Project Free
          </button>
          <button className="text-greenSecondaryDark text-sm font-medium p-4 rounded-lg ">
            Contact Us
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
