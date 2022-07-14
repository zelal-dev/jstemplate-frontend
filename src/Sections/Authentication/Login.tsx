import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useToasts } from 'react-toast-notifications'
import { useSWRConfig } from 'swr'
import PopupModule from '../../components/PopupModal'
import { authAxios } from '../../utils/axiosKits'

const fetcher = async ( url: string ) => authAxios.get( url ).then( ( res ) => res.data )

type Inputs = {
	email: string
	password: string
	remember: boolean
}

const Login = ( {
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
} ) => {
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		reset,
		formState: { errors },
	} = useForm<Inputs>()
	const [loading, setLoading] = useState<boolean>( false )
	const { mutate } = useSWRConfig()
	const { addToast } = useToasts()

	// useEffect( () => {
	//  const token = getCookie('token')
	//  if ( token ) {
	//    const { email, password } = localGet('jst_u_info')
	//    setValue( 'email', email )
	//    setValue( 'password', password )
	//    setValue( 'remember', true )
	//  }
	// }, [setValue] )

	const onSubmit: SubmitHandler<Inputs> = async ( data ) => {
		setLoading( true )

		// fetch the token from the server and save it in localStorage
		// Show a toast message
		// use try catch to handle the error
		try {

			// call login api with user email and password
			await authAxios.post( '/api/user/login', {
				username: data.email,
				password: data.password,
			} )

			// mutate the user data instantly
			mutate( '/api/user/self', null, false )


			addToast( 'Login Successful', {
				appearance: 'success',
				autoDismiss: true,
				autoDismissTimeout: 3000,
			} )
		} catch ( error: any ) {
			addToast( 'Login Failed', {
				appearance: 'error',
				autoDismiss: true,
				autoDismissTimeout: 3000,
			} )
		}
		setLoading( false )

		// reset the form
		reset()

		// close the modal
		handleLoginModal()
	}

	// // call api to login using axios
	// const response = await Axios.post(
	//   `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/login`,
	//   {
	//     username: data.email,
	//     password: data.password,
	//   }
	// )
	// const resData = await response.data
	//
	// // extract token from resData

	// // show toast if login success
	// if (resData.success) {
	//   const token = resData.data.data.token
	//   // SAVE TOKEN TO LOCAL STORAGE
	//   localSave('jst_l_info', {
	//     token,
	//   })
	//   addToast('Login success', {
	//     appearance: 'success',
	//     autoDismiss: true,
	//     autoDismissTimeout: 3000,
	//   })
	// }
	// // show toast if login failed
	// if (!resData.success) {
	//   addToast('Login failed', {
	//     appearance: 'error',
	//     autoDismiss: true,
	//     autoDismissTimeout: 3000,
	//   })
	// }
	// // reset form
	// reset()
	// setLoading(false)
	// // close login modal
	// handleLoginModal()

	return (
		<PopupModule title='Login' show={loginShow} onClose={handleLoginModal}>
			<form onSubmit={handleSubmit( onSubmit )} className='flex flex-col'>
				<label className='md:text-base text-sm text-gray-600 font-medium md:mb-2 mb-1'>
					Email
				</label>
				<input
					type='text'
					className='lg:p-3 md:p-2.5 p-2 border outline-none rounded-md w-full md:text-base text-sm'
					placeholder='abc'
					{...register( 'email', { required: true } )}
				/>
				{errors?.email && (
					<span className='text-xss italic text-red-500'>
						This field is required
					</span>
				)}
				<label className='md:text-base text-sm text-gray-600 font-medium md:mb-2 mb-1 xl:mt-6 md:mt-4 mt-3'>
					Password
				</label>
				<input
					type='password'
					className='lg:p-3 md:p-2.5 p-2 border outline-none rounded-md w-full md:text-base text-sm'
					placeholder='******'
					{...register( 'password', { required: true } )}
				/>
				{errors?.password && (
					<span className='text-xss italic text-red-500'>
						This field is required
					</span>
				)}
				<div className='xl:mt-6 md:mt-4 mt-3 flex items-center justify-between'>
					<div className='flex items-center'>
						<input id='remember_me' type='checkbox' {...register( 'remember' )} />
						<label
							htmlFor='remember_me'
							className='md:text-sm text-xs text-gray-600 ml-3'>
							Remember me
						</label>
					</div>
					<button
						type='button'
						onClick={() => {
							handleLoginModal()
							setTimeout( () => {
								handelForgetPassModal()
							}, 200 )
						}}
						className='md:text-sm text-xs text-blueTwo hover:underline'>
						Forget Password?
					</button>
				</div>
				<button
					type='submit'
					className='md:py-3 py-2 rounded-md bg-gradient-to-br from-blueOne to-blueTwo md:text-base text-sm font-semibold text-white mt-8'>
					{loading ? 'Please Wait...' : 'Login'}
				</button>
			</form>
			<div className='flex items-center justify-center xl:mt-6 md:mt-4 mt-3'>
				<h5 className='md:text-sm text-xs text-gray-600 mr-3'>Not a member</h5>
				<button
					type='button'
					className='md:text-sm text-xs text-blueTwo cursor-pointer'
					onClick={() => {
						handleLoginModal()
						setTimeout( () => {
							handleRegModal()
						}, 200 )
					}}>
					Create Account
				</button>
			</div>
		</PopupModule>
	)
}

export default Login
