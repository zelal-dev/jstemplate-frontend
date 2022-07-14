import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaCamera } from 'react-icons/fa'
import Navbar from '../../../src/components/Navbar'
import { LoaderGrowing } from '../../../src/lib/loader'
import { UserNotLogin, useUser } from '../../../src/lib/useUser'

type Inputs = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirm_pass: string
  phoneNumber: string
  role: string
}

const AccountsSettings = () => {
  const { loggedIn, user } = useUser()

  console.log( 'user logged in ?', loggedIn, user )
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Inputs>()
  const [loading, setLoading] = useState<boolean>( false )


  if ( !user && !loggedIn ) {
    return <UserNotLogin />
  }

  if ( loggedIn && user ) {
    return (
      <div className="bg-backgroundGrayOne min-h-screen">
        <Navbar.DashboardPrimaryNavbar />
        {/* <Navbar.DashboardSecondaryNavbar /> */}
        <div className="container mx-auto py-10 px-5 sm:px-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">My Profile</h2>
          <div className="flex items-center gap-4 rounded-lg bg-white px-4 py-10 shadow">
            <form className="w-full">
              <div className="!mx-5 grid grid-cols-12 items-center justify-center gap-8 xl:mx-10">
                <div className="col-span-12 md:col-span-10 lg:col-span-3">
                  <div className="flex justify-center">
                    <div className="border-3 relative z-0 inline-block h-40 w-40 rounded-full border-gray-300  xl:h-52 xl:w-52">
                      {/* {photoImage && ( */}
                      <div className="relative w-52 h-52 rounded-full overflow-hidden">
                        <Image
                          layout="fill"
                          src="/man.svg"
                          alt="Profile image"
                          objectFit="cover"
                        />
                      </div>
                      {/* )} */}
                      {/* {!photoImage && ( */}
                      {/* <div className="relative w-40 h-40 rounded-full"> */}
                      {/* <Image
                      //   className="rounded-full !p-1"
                      layout="fill"
                      src="https://res.cloudinary.com/dyor9qtzh/image/upload/v1646289332/Meta-jobs/user_biyxrq.png"
                      alt="Profile image"
                      objectFit="cover"
                    /> */}
                      {/* </div> */}
                      {/* )} */}
                      <label htmlFor="image">
                        <span className="absolute xl:bottom-0 -bottom-10 xl:right-0 -right-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-300">
                          <input
                            className="hidden"
                            id="image"
                            aria-label="image"
                            accept="image/*"
                            // {...ImageFile}
                            // defaultValue={photoImage}
                            // ref={ImageFile.ref}
                            // onBlur={ImageFile.onBlur}
                            onChange={( event ) => {
                              //   ImageFile.onChange(event);
                              //   photoPreview(event);
                            }}
                            type="file"
                          />
                          <FaCamera className="text-xl text-planDetails" />
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-12 lg:col-span-9">
                  {/* form  */}
                  <div>
                    <div className="w-full">
                      {/* <form className="w-full" onSubmit={handleSubmit(onSubmit)}> */}
                      <div className="flex flex-wrap">
                        <div className="w-full px-3 md:w-3/6 md:py-2">
                          <label
                            className=" mb-2 block tracking-wide text-planDetails"
                            htmlFor="gridFirstName"
                          >
                            First Name
                          </label>
                          <input
                            aria-label="gridFirstName"
                            className={`block w-full appearance-none border text-planDetails ${errors.firstName
                              ? '!border-red-500'
                              : 'border-gray'
                              } leading-tight rounded border-gray-300  py-2.5 px-3 focus:bg-white focus:outline-none `}
                            id="gridFirstName"
                            {...register( 'firstName', { required: true } )}
                            type="text"
                            placeholder="Jane"
                          />
                          {errors.firstName && (
                            <span className="text-sm italic text-red-400">
                              This field is required
                            </span>
                          )}
                        </div>
                        <div className="w-full px-3 md:w-3/6 md:py-2">
                          <label
                            className=" mb-2 block tracking-wide text-planDetails"
                            htmlFor="gridLastName"
                          >
                            Last Name
                          </label>
                          <input
                            className={`block w-full appearance-none border text-planDetails ${errors.lastName
                              ? '!border-red-500'
                              : 'border-gray'
                              } leading-tight rounded border-gray-300 py-2.5 px-3 focus:bg-white focus:outline-none `}
                            id="gridLastName"
                            {...register( 'lastName', { required: true } )}
                            type="text"
                            placeholder="Ferdinand"
                          />
                          {errors.lastName && (
                            <span className="text-sm italic text-red-400">
                              This field is required
                            </span>
                          )}
                        </div>
                        <div className="w-full px-3 md:w-3/6 md:py-2">
                          <label
                            className=" mb-2 mt-3 block tracking-wide  text-planDetails"
                            htmlFor="grid-last-name"
                          >
                            Email
                          </label>
                          <input
                            className={`block w-full appearance-none border text-planDetails ${errors.email ? '!border-red-500' : 'border-gray'
                              } leading-tight focus:bg-white" id="grid-first-name rounded border-gray-300 py-2.5 px-3 focus:outline-none `}
                            {...register( 'email', { required: true } )}
                            type="text"
                            placeholder="info@gmail.com"
                          />
                          {errors.email && (
                            <span className="text-sm italic text-red-400">
                              This field is required
                            </span>
                          )}
                        </div>
                        <div className="w-full px-3 md:w-3/6 md:py-2">
                          <label
                            className=" mb-2 mt-3 block tracking-wide text-planDetails"
                            htmlFor="phoneNumber"
                          >
                            Phone
                          </label>
                          <input
                            className="leading-tight mb-3 block w-full appearance-none rounded border border-gray-300 py-2.5 px-3 text-planDetails focus:bg-white focus:outline-none "
                            id="phoneNumber"
                            {...register( 'phoneNumber' )}
                            type="text"
                            placeholder="(406) 555-0120"
                          // defaultValue={data?.phoneNumber}
                          />
                        </div>
                      </div>
                    </div>
                    {/* </form> */}
                  </div>
                </div>

                <div className="col-span-12">
                  <p className=" text-planDetails">About Me</p>
                  <textarea
                    className="mt-3 h-36 w-full  rounded border border-gray-300 p-3 focus:bg-white focus:outline-none "
                    placeholder="Type something"
                  // {...register("aboutMe")}
                  />
                  <div className="mt-6">
                    <button
                      type="submit"
                    //   disabled={!isDirty || isSubmitting}
                    //   className={`flex items-center gap-2 py-2.5 px-8 ${
                    //     isSubmitting ? "bg-planDetails" : "bg-primary"
                    //   } rounded-md shadow shadow-primary ${
                    //     isDirty ? "opacity-100" : "opacity-30"
                    //   }  font-medium text-white`}
                    >
                      {/* <Link href="#"> */}
                      {/* {isSubmitting ? "Please wait..." : "Save Changes"}
                  {isSubmitting && <FormLoader />} */}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <form>
            <div className="mt-12 rounded-lg bg-white py-10 shadow dark:bg-planDetails">
              <div className="mx-10">
                <p className="border-b border-gray-200 pb-3 font-medium text-planDetails dark:border-gray-600 ">
                  Change Password
                </p>
                <div className="gap-6 pt-6 md:flex">
                  <div className="w-full md:w-3/6">
                    <label
                      className=" mb-2 block tracking-wide text-planDetails "
                      htmlFor="password"
                    >
                      Current Password
                    </label>
                    <input
                      className={`block w-full appearance-none border border-gray-300 text-planDetails dark:border-gray-500 dark:bg-transparent  border-gray leading-tight rounded py-2.5  px-3 focus:bg-white focus:outline-none`}
                      id="password"
                      type="password"
                      placeholder="********"
                    // {...register2("currentPassword", { required: true })}
                    />
                    {/* {errors2.currentPassword && (
                    <span className="text-sm italic text-red-400">
                      This field is required
                    </span> */}
                    {/* )} */}
                  </div>
                  <div className="w-full md:w-3/6">
                    <label
                      className=" mb-2 block tracking-wide text-planDetails"
                      htmlFor="grid-last-name"
                    >
                      New Password
                    </label>
                    <input
                      className={`block w-full appearance-none border border-gray-300 text-planDetails dark:border-gray-500 dark:bg-transparent
                    leading-tight rounded py-2.5 px-3 focus:bg-white focus:outline-none`}
                      id="grid-first-name"
                      type="password"
                      placeholder="********"
                    // {...register2("newPassword", { required: true })}
                    />
                    {/* {errors2.newPassword && (
                    <span className="block text-sm italic text-red-400">
                      This field is required
                    </span>
                  )} */}

                    <span className="text-sm italic text-themeLight">
                      6 characters or longer. Combine upper and lovercase
                      letters and numbers.
                    </span>
                  </div>
                </div>
                {/* button 2 */}
                <div className="pt-4">
                  <button
                    type="submit"
                    //   disabled={!isDirty2 || isSubmitting2}
                    className={`flex items-center gap-2 py-2.5 px-8 bg-blueTwo
                   rounded shadow shadow-primary "opacity-30"
                 font-medium text-white`}
                  >
                    {/* {isSubmitting2 ? "Please wait..." : "Submit"} */}
                    Submit
                    {/* {isSubmitting2 && <FormLoader />} */}
                    {/* <Link href="#"> */}
                    {/* {!isSubmitting2 && <a className="text-white font-medium ">Save Changes</a>} */}
                    {/* </Link> */}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return <LoaderGrowing />
}

export default AccountsSettings
