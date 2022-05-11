import React from "react";
import { ImCross } from "react-icons/im";

const ForgetPassword = ({
  handelForgetPassModal,
}: {
  handelForgetPassModal: any;
}) => {
  return (
    <div className="bg-white rounded-lg">
      <div className=" xl:p-8 lg:p-7 md:p-6 sm:p-5 p-4 flex items-center justify-between">
        <h3 className="xl:text-3xl md:text-2xl text-xl font-bold">
          Forget Password
        </h3>
        <button
          className=" md:p-2.5 p-1.5 rounded-lg bg-black hover:bg-blueTwo"
          onClick={handelForgetPassModal}
        >
          <ImCross className=" md:text-base text-sm text-gray-100" />
        </button>
      </div>
      <hr className="xl:w-[35rem] lg:w-[32rem] md:w-[28rem] sm:w-96 w-72" />
      <div className=" xl:p-8 lg:p-7 md:p-6 sm:p-5 p-4">
        <form action="" className="flex flex-col">
          <label className="md:text-base text-sm text-gray-600 font-medium md:mb-2 mb-1">
            Email
          </label>
          <input
            type="email"
            className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md w-full md:text-base text-sm"
            placeholder="abc@xyx.com"
          />

          <button className="w-1/2 md:py-3 py-2 rounded-md bg-gradient-to-br from-blueOne to-blueTwo md:text-base text-sm font-semibold text-white mt-8">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
