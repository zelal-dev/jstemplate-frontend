import React from "react";
import { ImCross } from "react-icons/im";

const Registration = ({
  handleLoginModal,
  handleRegModal,
}: {
  handleLoginModal: any;
  handleRegModal: any;
}) => {
  return (
    <div className="bg-white rounded-lg">
      <div className=" xl:p-8 lg:p-7 md:p-6 sm:p-5 p-4 flex items-center justify-between">
        <h3 className="xl:text-3xl md:text-2xl text-xl font-bold">
          Registration
        </h3>
        <button
          className="xl:p-3.5 md:p-3 p-2 rounded-lg bg-black hover:bg-blueTwo"
          onClick={handleRegModal}
        >
          <ImCross className="xl:text-xl md:text-lg text-base text-gray-100" />
        </button>
      </div>
      <hr className="xl:w-[35rem] lg:w-[32rem] md:w-[28rem] sm:w-96 w-72" />
      <div className="xl:p-8 lg:p-7 md:p-6 sm:p-5 p-4">
        <form action="" className="flex flex-col">
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-start">
            <div className="flex flex-col">
              <label className="md:text-base text-sm text-gray-600 font-medium md:mb-2 mb-1">
                First Name
              </label>
              <input
                type="text"
                className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md w-full md:text-base text-sm"
                placeholder="abc"
              />
            </div>
            <div className="flex flex-col lg:mt-0 md:mt-4 mt-3">
              <label className="md:text-base text-sm text-gray-600 font-medium md:mb-2 mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md  w-full md:text-base text-sm"
                placeholder="xyz"
              />
            </div>
          </div>
          <label className="md:text-base text-sm text-gray-600 font-medium md:mb-2 mb-1 xl:mt-6 md:mt-4 mt-3">
            Email
          </label>
          <input
            type="email"
            className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md w-full md:text-base text-sm"
            placeholder="abc@xyz.com"
          />
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-start xl:mt-6 md:mt-4 mt-3">
            <div className="flex flex-col">
              <label className="md:text-base text-sm text-gray-600 font-medium md:mb-2 mb-1">
                Password
              </label>
              <input
                type="password"
                className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md w-full md:text-base text-sm"
                placeholder="******"
              />
            </div>
            <div className="flex flex-col lg:mt-0 md:mt-4 mt-3">
              <label className="md:text-base text-sm text-gray-600 font-medium md:mb-2 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md  w-full md:text-base text-sm"
                placeholder="******"
              />
            </div>
          </div>

          <button className="md:py-3 py-2 rounded-md bg-gradient-to-br from-blueOne to-blueTwo md:text-base text-sm font-semibold text-white mt-8">
            Registration
          </button>
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
