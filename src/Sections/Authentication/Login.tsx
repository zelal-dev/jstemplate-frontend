import React from "react";
import { ImCross } from "react-icons/im";

const Login = ({
  handleLoginModal,
  handleRegModal,
  handelForgetPassModal,
}: {
  handleLoginModal: any;
  handleRegModal: any;
  handelForgetPassModal:any
}) => {
  return (
    <div className="bg-white rounded-lg">
      <div className=" xl:p-8 lg:p-7 md:p-6 sm:p-5 p-4 flex items-center justify-between">
        <h3 className="xl:text-3xl md:text-2xl text-xl font-bold">Login</h3>
        <button
          className=" md:p-2.5 p-1.5 rounded-lg bg-black hover:bg-blueTwo"
          onClick={handleLoginModal}
        >
          <ImCross className=" md:text-base text-sm text-gray-100" />
        </button>
      </div>
      <hr className="xl:w-[35rem] lg:w-[32rem] md:w-[28rem] sm:w-96 w-72" />
      <div className=" xl:p-8 lg:p-7 md:p-6 sm:p-5 p-4">
        <form action="" className="flex flex-col">
          <label className="md:text-base text-sm text-gray-600 font-medium md:mb-2 mb-1">
            Username
          </label>
          <input
            type="text"
            className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md w-full md:text-base text-sm"
            placeholder="abc"
          />
          <label className="md:text-base text-sm text-gray-600 font-medium md:mb-2 mb-1 xl:mt-6 md:mt-4 mt-3">
            Password
          </label>
          <input
            type="password"
            className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md w-full md:text-base text-sm"
            placeholder="******"
          />
          <div className="xl:mt-6 md:mt-4 mt-3 flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" />
              <h1 className="md:text-sm text-xs text-gray-600 ml-3">
                Remember me
              </h1>
            </div>
            <button onClick={handelForgetPassModal} className="md:text-sm text-xs text-blueTwo hover:underline">
              Forget Password?
            </button>
          </div>
          <button className="md:py-3 py-2 rounded-md bg-gradient-to-br from-blueOne to-blueTwo md:text-base text-sm font-semibold text-white mt-8">
            Login
          </button>
        </form>
        <div className="flex items-center justify-center xl:mt-6 md:mt-4 mt-3">
          <h5 className="md:text-sm text-xs text-gray-600 mr-3">
            Not a member
          </h5>
          <button
            className="md:text-sm text-xs text-blueTwo cursor-pointer"
            onClick={handleRegModal}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
