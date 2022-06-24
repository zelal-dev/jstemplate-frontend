import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ImCross } from 'react-icons/im'
import { useToasts } from 'react-toast-notifications'
import { useSWRConfig } from 'swr'
import PopupModule from '../../components/PopupModal'
import { Axios } from '../../utils/axiosKits'
import { localGet, localRemove, localSave } from './../../utils/localStorage'

type Inputs = {
  email: string
  password: string
  remember: boolean
}

const Login = ({
  handleLoginModal,
  handleRegModal,
  handelForgetPassModal,
  handleUserImageShow,
  loginShow,
}: {
  handleLoginModal: any
  handleRegModal: any
  handelForgetPassModal: any
  handleUserImageShow: any
  loginShow: boolean
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Inputs>()
  const [loading, setLoading] = useState<boolean>(false)
  const { mutate } = useSWRConfig()
  const { addToast } = useToasts()

  useEffect(() => {
    const local = localGet('jst_l_info')
    if (local) {
      const { email, password } = local
      setValue('email', email)
      setValue('password', password)
      setValue('remember', true)
    }
  }, [setValue])

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true)

    // call api to login using axios
    const response = await Axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/login`,
      {
        username: data.email,
        password: data.password,
      }
    )
    const resData = await response.data.data

    // extract token from resData
    const token = resData.data.token
    const user = {
      email: resData.data.displayName,
    }

    // SAVE TOKEN TO LOCAL STORAGE
    localSave('jst_l_info', {
      token,
      user,
    })
    // show toast if login success
    if (resData.success) {
      addToast('Login success', {
        appearance: 'success',
        autoDismiss: true,
        autoDismissTimeout: 3000,
      })

      setLoading(false)

      // setLoading(true)
      // const local = localGet('jst_l_info')
      // await Axios({
      //   method: 'post',
      //   url: `/api/user/login`,
      //   data: {
      //     email: data.email,
      //     password: data.password,
      //   },
      // })
      //   .then((res) => {
      //     if (res.status === 200 || res.status === 201) {
      //       localSave('jst_u_info', {
      //         ...res.data,
      //         login_at: new Date(),
      //         // expires one day after login
      //         expires_in: new Date(new Date().getTime() + 86400000),
      //       })
      //       mutate('api/v1/user/self').then(() => {
      //         addToast(res.data.message, {
      //           appearance: 'success',
      //           autoDismiss: true,
      //           autoDismissTimeout: 1500,
      //         })
      //         handleUserImageShow()
      //         setLoading(false)
      //         reset()
      //         handleLoginModal()
      //       })
      //     }
      //   })
      //   .catch((error) => {
      //     if (error?.response?.data) {
      //       addToast(error.response.data.message, {
      //         appearance: 'error',
      //         autoDismiss: true,
      //         autoDismissTimeout: 2000,
      //       })
      //     } else {
      //       addToast(error.message, {
      //         appearance: 'error',
      //         autoDismiss: true,
      //         autoDismissTimeout: 2000,
      //       })
      //     }
      //     setLoading(false)
      //   })
      // setTimeout(() => {
      //   setLoading(false)
      // }, 10000)
      // if (data.remember) {
      //   localSave('jst_l_info', data)
      // }
      // if (data.remember === false && local) {
      //   localRemove('jst_l_info')
      // }
    }
  }

  return (
    <PopupModule title="Login" show={loginShow} onClose={handleLoginModal}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label className="md:text-base text-sm text-gray-600 font-medium md:mb-2 mb-1">
          Email
        </label>
        <input
          type="text"
          className="lg:p-3 md:p-2.5 p-2 border outline-none rounded-md w-full md:text-base text-sm"
          placeholder="abc"
          {...register('email', { required: true })}
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
          {...register('password', { required: true })}
        />
        {errors?.password && (
          <span className="text-xss italic text-red-500">
            This field is required
          </span>
        )}
        <div className="xl:mt-6 md:mt-4 mt-3 flex items-center justify-between">
          <div className="flex items-center">
            <input id="remember_me" type="checkbox" {...register('remember')} />
            <label
              htmlFor="remember_me"
              className="md:text-sm text-xs text-gray-600 ml-3"
            >
              Remember me
            </label>
          </div>
          <button
            type="button"
            onClick={() => {
              handleLoginModal()
              setTimeout(() => {
                handelForgetPassModal()
              }, 200)
            }}
            className="md:text-sm text-xs text-blueTwo hover:underline"
          >
            Forget Password?
          </button>
        </div>
        <button
          type="submit"
          className="md:py-3 py-2 rounded-md bg-gradient-to-br from-blueOne to-blueTwo md:text-base text-sm font-semibold text-white mt-8"
        >
          {loading ? 'Please Wait...' : 'Login'}
        </button>
      </form>
      <div className="flex items-center justify-center xl:mt-6 md:mt-4 mt-3">
        <h5 className="md:text-sm text-xs text-gray-600 mr-3">Not a member</h5>
        <button
          type="button"
          className="md:text-sm text-xs text-blueTwo cursor-pointer"
          onClick={() => {
            handleLoginModal()
            setTimeout(() => {
              handleRegModal()
            }, 200)
          }}
        >
          Create Account
        </button>
      </div>
    </PopupModule>
  )
}

export default Login
