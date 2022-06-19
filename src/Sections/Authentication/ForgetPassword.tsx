import React from "react";
import { ImCross } from "react-icons/im";
import PopupModule from "../../components/PopupModal";

const ForgetPassword = ({
  handelForgetPassModal,
  modalShow,
}: {
  handelForgetPassModal: any;
  modalShow: boolean;
}) => {
  return (
    <PopupModule
      title="Forget Password"
      show={modalShow}
      onClose={handelForgetPassModal}
    >
      <form action="" className="flex flex-col">
        <label className="md:text-base text-sm text-gray-600 font-medium md:mb-2 mb-1">
          Email
        </label>
        <input
          type="email"
          className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md w-full md:text-base text-sm"
          placeholder="abc@xyx.com"
        />

        <button
          type="button"
          className="w-1/2 md:py-3 py-2 rounded-md bg-gradient-to-br from-blueOne to-blueTwo md:text-base text-sm font-semibold text-white mt-8"
        >
          Reset Password
        </button>
      </form>
    </PopupModule>
  );
};

export default ForgetPassword;
