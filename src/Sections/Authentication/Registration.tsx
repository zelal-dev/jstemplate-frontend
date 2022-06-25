import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ImCross } from 'react-icons/im'
import { useToasts } from 'react-toast-notifications'
import PopupModule from '../../components/PopupModal'
import { Axios } from '../../utils/axiosKits'

type Inputs = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirm_pass: string
  phoneNumber: string
  role: string
}

const Registration = ({
  handleLoginModal,
  handleRegModal,
  regShow,
}: {
  handleLoginModal: any
  handleRegModal: any
  regShow: boolean
}) => {
  const [toggle, setToggle] = useState(0)
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Inputs>()
  const [loading, setLoading] = useState<boolean>(false)
  const { addToast } = useToasts()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await Axios({
        method: 'post',
        url: `/api/user/signup`,
        data: {
          fullName: {
            firstName: data.firstName,
            lastName: data.lastName,
          },
          email: data.email,
          password: data.password,
          phoneNumber: data.phoneNumber,
          role: {
            isSubscriber: data.role === 'subscriber' ? true : false,
            isCustomer: data.role === 'customer' ? true : false,
          },
        },
      }).then((res) => {
        if (res.status === 200 || res.status === 201) {
          addToast(res.data.message, {
            appearance: 'success',
            autoDismiss: true,
          })
          handleRegModal()
          handleLoginModal()
          reset()
        }
      })
    } catch (error: any) {
      if (error?.response?.data) {
        addToast(error.response.data.message, {
          appearance: 'error',
          autoDismiss: true,
        })
      } else {
        addToast(error.message, {
          appearance: 'error',
          autoDismiss: true,
        })
      }
    }
  }

  const handleToggle = () => {
    if (toggle === 0) {
      setToggle(1)
    } else {
      setToggle(0)
    }
  }
  return (
    <PopupModule
      show={regShow}
      title={toggle === 0 ? 'Registration' : 'Confirm Password'}
      onClose={handleRegModal}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {toggle === 0 && (
          <>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 items-center">
              <div>
                <label className="md:text-base text-sm text-gray-600 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md w-full md:text-base text-sm  md:mt-2 mt-1"
                  placeholder="abc"
                  {...register('firstName', { required: true })}
                />
                {errors?.firstName && (
                  <span className="text-xss italic text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label className="md:text-base text-sm text-gray-600 font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md  w-full md:text-base text-sm  md:mt-2 mt-1"
                  placeholder="xyz"
                  {...register('lastName', { required: true })}
                />
                {errors?.lastName && (
                  <span className="text-xss italic text-red-500">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 items-center">
              <div>
                <label className="md:text-base text-sm text-gray-600 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md w-full md:text-base text-sm  md:mt-2 mt-1"
                  placeholder="abc@xyz.com"
                  {...register('email', { required: true })}
                />
                {errors?.email && (
                  <span className="text-xss italic text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label className="md:text-base text-sm text-gray-600 font-medium">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md  w-full md:text-base text-sm  md:mt-2 mt-1"
                  placeholder="01XXXXXXXXX"
                  {...register('phoneNumber', { required: true })}
                />
                {errors?.phoneNumber && (
                  <span className="text-xss italic text-red-500">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col md:mt-4 mt-3">
              <label className="md:text-base text-sm text-gray-600 font-medium">
                Role
              </label>
              <div className="pt-3">
                <label htmlFor="subscriber-radio md:mt-3 mt-2 ">
                  <input
                    type="radio"
                    id="subscriber-radio"
                    defaultValue="subscriber"
                    {...register('role')}
                    className="mr-3"
                  />
                  Subscriber
                </label>
                <label htmlFor="customer-radio md:mt-3 mt-2">
                  <input
                    type="radio"
                    id="customer-radio"
                    defaultValue="customer"
                    {...register('role')}
                    className="ml-6 mr-3"
                  />
                  Customer
                </label>
              </div>
            </div>
          </>
        )}
        {toggle === 1 && (
          <>
            <label className="md:text-base text-sm text-gray-600 font-medium md:mb-2 mb-1">
              Password
            </label>
            <input
              type="password"
              className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md w-full md:text-base text-sm"
              placeholder="******"
              {...register('password', { required: true })}
            />
            {errors?.password && (
              <span className="text-xss italic text-red-500">
                This field is required
              </span>
            )}
            <span className="py-4 block" />
            <label className="md:text-base text-sm text-gray-600 font-medium md:mb-2 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md  w-full md:text-base text-sm"
              placeholder="******"
              {...register('confirm_pass', {
                required: {
                  value: true,
                  message: 'This field is required',
                },
                validate: (value) =>
                  value === watch('password') || 'Passwords do not match',
              })}
            />
            {errors?.confirm_pass && (
              <span className="text-xss italic text-red-600">
                {errors?.confirm_pass?.message}
              </span>
            )}
          </>
        )}
        {toggle === 0 ? (
          <button
            onClick={handleToggle}
            className="md:py-3 py-2 px-10 rounded-md bg-gradient-to-br from-blueOne to-blueTwo md:text-base text-sm font-semibold text-white mt-8"
          >
            Next
          </button>
        ) : (
          <div className="grid grid-cols-2 gap-8">
            <button
              onClick={handleToggle}
              className="md:py-3 w-full py-2 px-10 rounded-md bg-gradient-to-br from-blueOne to-blueTwo md:text-base text-sm font-semibold text-white mt-8"
            >
              Previous
            </button>
            <button
              type="submit"
              className="md:py-3 w-full py-2 rounded-md bg-gradient-to-br from-blueOne to-blueTwo md:text-base text-sm font-semibold text-white mt-8"
            >
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
          type="button"
          className="md:text-sm text-xs text-blueTwo cursor-pointer"
          onClick={() => {
            handleRegModal()
            setTimeout(() => {
              handleLoginModal()
            }, 200)
          }}
        >
          Login
        </button>
      </div>
    </PopupModule>
  )
}

export default Registration

{
  /* <div className="flex  w-full gap-6 pt-2 pb-8">
  <label className="w-6/12">
    <input
      type="radio"
      name="user_role"
      id="buyer-radio"
      defaultValue="buyer"
      className="absolute hidden"
      // {...register("freelancer_role")}
      defaultChecked
    />
    <label
      htmlFor="buyer-radio"
      className="block w-full cursor-pointer rounded bg-green-100 px-3 py-2.5 text-center text-planDes duration-300 ease-in-out hover:bg-planDes hover:text-primary "
    >
      Buyer
    </label>
  </label>
  <label className="w-6/12">
    <input
      type="radio"
      name="user_role"
      id="freelancer-radio"
      defaultValue="freelancer"
      // {...register("freelancer_role")}
      className="absolute hidden"
    />
    <label
      htmlFor="freelancer-radio"
      className="block w-full cursor-pointer rounded bg-green-100 px-3 py-2.5 text-center text-planDes duration-300 ease-in-out hover:bg-planDes hover:text-primary"
    >
      Freelancer
    </label>
  </label>
</div>; */
}
