import React from "react";
import { RiPhoneLine } from "react-icons/ri";
import FooterWithoutSolution from "../src/components/FooterWithoutSolution";
import Navbar from "../src/components/Navbar";

const ContactUs = () => {
  return (
    <>
      <div className="shadow-md">
        <Navbar.SecondaryDefaultNavbar />
      </div>
      <section className="bg-backgroundGrayOne ">
        <div className="container mx-auto">
          <div className="py-20 px-6 sm:px-0">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-7 lg:w-10/12 mx-auto">
              <div className="col-span-2 md:col-span-2 bg-blueTwo rounded-2xl shadow p-12 w-full space-y-7">
                <div>
                  <h1 className="text-3xl font-bold text-white">
                    Get in Touch
                  </h1>
                  <p className="text-lg font-normal text-white pt-2">
                    We&acute; love to hear from you. Our friendly team is always
                    here to chat.
                  </p>
                </div>
                <div className="flex gap-5">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8.63184V26.55H29V8.63184H3ZM7.3125 10.6227H24.6875L16 16.3777L7.3125 10.6227ZM5 11.4938L15.4375 18.4308L16 18.773L16.5625 18.4308L27 11.4938V24.5591H5V11.4938Z"
                      fill="white"
                    />
                  </svg>
                  <div>
                    <h3 className="text-xl text-white font-normal">
                      Mail To Us
                    </h3>
                    <p className="text-base font-normal text-[#EAECEE]">
                      info@example.com
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <RiPhoneLine className="text-3xl text-white" />
                  <div>
                    <h3 className="text-xl text-white font-normal">Call Us</h3>
                    <p className="text-base font-normal text-[#EAECEE]">
                      +1 123 456 789
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 3C11.043 3 7 7.04297 7 12C7 13.4062 7.57031 15.0195 8.34375 16.7812C9.11719 18.543 10.1133 20.4141 11.125 22.1562C13.1484 25.6445 15.1875 28.5625 15.1875 28.5625L16 29.75L16.8125 28.5625C16.8125 28.5625 18.8516 25.6445 20.875 22.1562C21.8867 20.4141 22.8828 18.543 23.6562 16.7812C24.4297 15.0195 25 13.4062 25 12C25 7.04297 20.957 3 16 3ZM16 5C19.8789 5 23 8.12109 23 12C23 12.8008 22.5703 14.3164 21.8438 15.9688C21.1172 17.6211 20.1133 19.4531 19.125 21.1562C17.5547 23.8672 16.5781 25.3008 16 26.1562C15.4219 25.3008 14.4453 23.8672 12.875 21.1562C11.8867 19.4531 10.8828 17.6211 10.1562 15.9688C9.42969 14.3164 9 12.8008 9 12C9 8.12109 12.1211 5 16 5ZM16 10C14.8945 10 14 10.8945 14 12C14 13.1055 14.8945 14 16 14C17.1055 14 18 13.1055 18 12C18 10.8945 17.1055 10 16 10Z"
                      fill="white"
                    />
                  </svg>
                  <div>
                    <h3 className="text-xl text-white font-normal">
                      Office Location
                    </h3>
                    <p className="text-base font-normal text-[#EAECEE] lg:w-8/12">
                      1294 Longview Avenue, Forest Hills, New York
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-2 md:col-span-3 bg-white rounded-2xl shadow px-12 md:px-24 2xl:px-36  py-12 w-full text-center">
                <h1 className="text-2xl font-bold text-[#001324] m-0">
                  Level Up Your Work
                </h1>
                <p className="text-base font-normal text-[#001324] pt-2">
                  You can reach us any time via
                </p>
                <strong className="text-[#001324]">info@example.com</strong>
                <div className="pt-6">
                  <form className="grid">
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
                        type="text"
                        placeholder="How can we help you ..."
                        // {...register("message", {
                        //   required: "This field is required",
                        // })}
                      />
                    </div>
                    <button
                      type="submit"
                      //   disabled={isSubmitting}
                      className="flex gap-2 items-center justify-center  w-full py-4 bg-blueTwo rounded-md text-base font-normal text-white"
                    >
                      {/* {isSubmitting ? "Please wait..." : "Send Message"} */}
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterWithoutSolution />
    </>
  );
};

export default ContactUs;
