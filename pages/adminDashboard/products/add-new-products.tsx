import Link from "next/link";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
// import { toast, ToastContainer } from "react-nextjs-toast";
import Layout from "../../../src/components/Layout";
import { authAxios } from "../../../src/utils/axiosKits";
import { useRouter } from "next/router";

type Inputs = {
  title: string;
  status: string;
  description: string;
  expectedDelivery: string;
  category: string;
  standard: number;
  standardPlus: number;
  business: number;
};

const AddNewProducts = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { addToast } = useToasts();

  const onSubmit: SubmitHandler<Inputs> = async (data) =>{
      console.log(data)
      setLoading(true)
      await authAxios({
        method: "POST",
        url: `/api/v1/product`,
        data: {
          status: {
            isPublished: data.status === "pre-sale" ? true : false,
            isReady: data.status === "ready" ? true : false,
          },
          title: data.title,
          description: data.description,
          price: {
            standart: data.standard,
            standartPlus: data.standardPlus,
            extended: data.business,
          },
          category:[
              data.category
          ]
        },
      })
        .then((res) => {
            console.log(res.data);
            addToast(res.data.message, {
              appearance: "success",
              autoDismiss: true,
              autoDismissTimeout: 3000,
            });
          setLoading(false);
          router.push("/adminDashboard/products");
        })
        .catch((err) => {
          setLoading(false);
            err
              ? addToast(err.response.data.message, {
                  appearance: "error",
                  autoDismiss: true,
                  autoDismissTimeout: 3000,
                })
              : addToast("Something went wrong", {
                  appearance: "error",
                  autoDismiss: true,
                  autoDismissTimeout: 3000,
                });
        });
  };
  return (
    <div>
      <Layout.AdminDashboard>
        <div
          className="py-7 lg:px-12 md:px-10 sm:px-8 px-7 bg-backgroundGrayOne overflow-y-auto"
          style={{ height: "calc(100vh - 75px)" }}
        >
          {/* <ToastContainer /> */}
          <div className="flex items-center justify-center">
            <div className=" lg:w-auto w-full md:p-10 sm:p-7 p-5 rounded-lg bg-white">
              <div className="flex items-center justify-between">
                <h1 className="md:text-2xl sm:text-xl text-base text-gray-900 font-bold">
                  Add New Products
                </h1>
                <Link href="/adminDashboard/products">
                  <a className="py-2.5 px-4 rounded-md bg-gray-500 text-gray-100 md:text-sm text-xs">
                    Back
                  </a>
                </Link>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-12 gap-5 mt-10"
              >
                <div className="sm:col-span-8 col-span-12">
                  <input
                    {...register("title", { required: true })}
                    className="border border-[#DDE6F5] p-4 rounded-md w-full text-sm outline-none"
                    placeholder="Product Title"
                  />
                  {errors?.title && (
                    <span className="text-xss italic text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="sm:col-span-4 col-span-12">
                  <div className="border border-[#DDE6F5] p-4 rounded-md ">
                    <select
                      {...register("status", { required: true })}
                      className="w-full text-sm outline-none"
                    >
                      <option value="pre-sale" className="text-sm">
                        Pre-Sale
                      </option>
                      <option value="ready" className="text-sm">
                        Ready
                      </option>
                    </select>
                  </div>
                  {errors?.status && (
                    <span className="text-xss italic text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="col-span-12">
                  <textarea
                    {...register("description", { required: true })}
                    className="border border-[#DDE6F5] p-4 rounded-md w-full text-sm outline-none h-24 resize-none"
                    placeholder="Product Description"
                  />
                  {errors?.description && (
                    <span className="text-xss italic text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="sm:col-span-6 col-span-12">
                  <div className="border border-[#DDE6F5] p-4 rounded-md ">
                    <input
                      type="date"
                      {...register("expectedDelivery", { required: true })}
                      className="w-full text-sm outline-none"
                    />
                  </div>
                  {errors?.expectedDelivery && (
                    <span className="text-xss italic text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="sm:col-span-6 col-span-12">
                  <div className="border border-[#DDE6F5] p-4 rounded-md ">
                    <select
                      {...register("category", { required: true })}
                      className="w-full text-sm outline-none"
                    >
                      <option value="MERN" className="text-sm">
                        MERN
                      </option>
                      <option value="Headless" className="text-sm">
                        Headless
                      </option>
                      <option value="React" className="text-sm">
                        React
                      </option>
                      <option value="Figma" className="text-sm">
                        Figma
                      </option>
                    </select>
                  </div>
                </div>
                <h1 className="text-sm text-gray-900 col-span-12 mt-3">
                  PRICING PLAN
                </h1>
                <div className="md:col-span-4 sm:col-span-6 col-span-12">
                  <input
                    type="number"
                    {...register("standard", { required: true })}
                    className="border border-[#DDE6F5] p-4 rounded-md w-full text-sm outline-none"
                    placeholder="Standard"
                  />
                  {errors?.standard && (
                    <span className="text-xss italic text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="md:col-span-4 sm:col-span-6 col-span-12">
                  <input
                    type="number"
                    {...register("standardPlus", { required: true })}
                    className="border border-[#DDE6F5] p-4 rounded-md w-full text-sm outline-none"
                    placeholder="Standard Plus"
                  />
                  {errors?.standardPlus && (
                    <span className="text-xss italic text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="md:col-span-4 sm:col-span-6 col-span-12">
                  <input
                    type="number"
                    {...register("business", { required: true })}
                    className="border border-[#DDE6F5] p-4 rounded-md w-full text-sm outline-none"
                    placeholder="Business"
                  />
                  {errors?.business && (
                    <span className="text-xss italic text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className="md:text-sm text-xs py-3 px-5 rounded-md bg-blueTwo md:col-span-3 sm:col-span-4 col-span-8 text-gray-100"
                >
                  {loading ? "Please Wait..." : "Add Product"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout.AdminDashboard>
    </div>
  );
};

export default AddNewProducts;
