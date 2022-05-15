import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ImCross } from "react-icons/im";
import { useToasts } from "react-toast-notifications";
import { Axios } from "../../utils/axiosKits";
import { localGet, localRemove, localSave } from "./../../utils/localStorage";

type Inputs = {
  email: string;
  password: string;
  remember: boolean;
};

const Login = ({
  handleLoginModal,
  handleRegModal,
  handelForgetPassModal,
  handleUserImageShow,
}: {
  handleLoginModal: any;
  handleRegModal: any;
  handelForgetPassModal: any;
  handleUserImageShow:any;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [loading, setLoading] = useState<boolean>(false);

  const { addToast } = useToasts();

  useEffect(() => {
    const local = localGet("jst_l_info");
    console.log("hello");
    if (local) {
      const { email, password } = local;
      setValue("email", email);
      setValue("password", password);
      setValue("remember", true);
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const local = localGet("jst_l_info");
    await Axios({
      method: "post",
      url: `/api/v1/user/login`,
      data: {
        email: data.email,
        password: data.password,
      },
    })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          console.log(res.data);
          localSave("jst_u_info", {
            ...res.data,
            login_at: new Date(),
            // expires one day after login
            expires_in: new Date(new Date().getTime() + 86400000),
          });
          addToast(res.data.message, {
            appearance: "success",
            autoDismiss: true,
          });
          handleUserImageShow()
          setLoading(false);
          reset();
          handleLoginModal();
        }
      })
      .catch((error) => {
        if (error?.response?.data) {
          addToast(error.response.data.message, {
            appearance: "error",
            autoDismiss: true,
          });
        } else {
          addToast(error.message, {
            appearance: "error",
            autoDismiss: true,
          });
        }
        setLoading(false);
      });
    setTimeout(() => {
      setLoading(false);
    }, 10000);
    if (data.remember) {
      console.log("dhukeche")
      localSave("jst_l_info", data);
    }
    if (data.remember === false && local) {
      localRemove("jst_l_info");
    }
  };

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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label className="md:text-base text-sm text-gray-600 font-medium md:mb-2 mb-1">
            Email
          </label>
          <input
            type="text"
            className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md w-full md:text-base text-sm"
            placeholder="abc"
            {...register("email", { required: true })}
          />
          {errors?.email && (
            <span className="text-xss italic text-red-500">
              This field is required
            </span>
          )}
          <label className="md:text-base text-sm text-gray-600 font-medium md:mb-2 mb-1 xl:mt-6 md:mt-4 mt-3">
            Password
          </label>
          <input
            type="password"
            className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md w-full md:text-base text-sm"
            placeholder="******"
            {...register("password", { required: true })}
          />
          {errors?.password && (
            <span className="text-xss italic text-red-500">
              This field is required
            </span>
          )}
          <div className="xl:mt-6 md:mt-4 mt-3 flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" {...register("remember")} />
              <h1 className="md:text-sm text-xs text-gray-600 ml-3">
                Remember me
              </h1>
            </div>
            <button
              onClick={handelForgetPassModal}
              className="md:text-sm text-xs text-blueTwo hover:underline"
            >
              Forget Password?
            </button>
          </div>
          <button
            type="submit"
            className="md:py-3 py-2 rounded-md bg-gradient-to-br from-blueOne to-blueTwo md:text-base text-sm font-semibold text-white mt-8"
          >
            {loading ? "Please Wait..." : "Login"}
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
