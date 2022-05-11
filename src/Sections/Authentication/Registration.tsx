import React, { useState } from "react";
import { ImCross } from "react-icons/im";

const Registration = ({
  handleLoginModal,
  handleRegModal,
}: {
  handleLoginModal: any;
  handleRegModal: any;
}) => {
  const [toggle, setToggle] = useState(0);

  const handleToggle = () =>{
    if(toggle === 0){
      setToggle(1)
    }
    else{
      setToggle(0)
    }
  }
  return (
    <div className="bg-white rounded-lg">
      <div className=" xl:p-8 lg:p-7 md:p-6 sm:p-5 p-4 flex items-center justify-between">
        <h3 className="xl:text-3xl md:text-2xl text-xl font-bold">
          {toggle === 0 ? "Registration" : "Confirm Password"}
        </h3>
        <button
          className="md:p-2.5 p-1.5 rounded-lg bg-black hover:bg-blueTwo"
          onClick={handleRegModal}
        >
          <ImCross className="md:text-base text-sm text-gray-100" />
        </button>
      </div>
      <hr className="xl:w-[35rem] lg:w-[32rem] md:w-[28rem] sm:w-96 w-72" />
      <div className="xl:p-8 lg:p-7 md:p-6 sm:p-5 p-4">
        <form action="" className="flex flex-col">
          {toggle === 0 ? (
            <>
              <label className="md:text-base text-sm text-gray-600 font-medium md:mb-2 mb-1">
                First Name
              </label>
              <input
                type="text"
                className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md w-full md:text-base text-sm"
                placeholder="abc"
              />
              <label className="md:text-base text-sm text-gray-600 font-medium md:mb-2 mb-1 xl:mt-6 md:mt-4 mt-3">
                Last Name
              </label>
              <input
                type="text"
                className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md  w-full md:text-base text-sm"
                placeholder="xyz"
              />
              <label className="md:text-base text-sm text-gray-600 font-medium md:mb-2 mb-1 xl:mt-6 md:mt-4 mt-3">
                Email
              </label>
              <input
                type="email"
                className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md w-full md:text-base text-sm"
                placeholder="abc@xyz.com"
              />
            </>
          ) : (
            <>
              <label className="md:text-base text-sm text-gray-600 font-medium md:mb-2 mb-1">
                Password
              </label>
              <input
                type="password"
                className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md w-full md:text-base text-sm"
                placeholder="******"
              />
              <label className="md:text-base text-sm text-gray-600 font-medium md:mb-2 mb-1 xl:mt-6 md:mt-4 mt-3">
                Confirm Password
              </label>
              <input
                type="password"
                className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md  w-full md:text-base text-sm"
                placeholder="******"
              />
            </>
          )}
          {toggle === 0 ? (
            <button onClick={handleToggle} className="md:py-3 py-2 rounded-md bg-gradient-to-br from-blueOne to-blueTwo md:text-base text-sm font-semibold text-white mt-8">
              Next
            </button>
          ) : (
            <div className="grid grid-cols-2 gap-8">
              <button onClick={handleToggle} className="md:py-3 w-full py-2 rounded-md bg-gradient-to-br from-blueOne to-blueTwo md:text-base text-sm font-semibold text-white mt-8">
                Previous
              </button>
              <button className="md:py-3 w-full py-2 rounded-md bg-gradient-to-br from-blueOne to-blueTwo md:text-base text-sm font-semibold text-white mt-8">
                Registration
              </button>
            </div>
          )}
        </form>
        <div className="flex items-center justify-center xl:mt-6 md:mt-4 mt-3">
          <h5 className="md:text-sm text-xs text-gray-600 mr-3">
            Already have an account
          </h5>
          <button
            className="md:text-sm text-xs text-blueTwo cursor-pointer"
            onClick={handleLoginModal}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
