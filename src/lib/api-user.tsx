/* eslint-disable @typescript-eslint/no-explicit-any */
import { authAxios } from '../utils/axiosKits'

authAxios.interceptors.request.use( ( config: any ) => {
	const localData: any = localStorage.getItem( 'jst_u_info' )
	const token = JSON.parse( localData )
	config.headers.Authorization = `Bearer ${token}`
	return config
} )

export default async function fetcher () {
	//sleep 400ms
	await new Promise( ( resolve ) => setTimeout( resolve, 400 ) )

	const localData = localStorage.getItem( 'jst_u_info' )


	if ( localData ) {
		// user logged in fetch user data

		const { data } = await authAxios.get( '/api/user/self' )

		return {
			user: data.data,
		}
	} else {
		return {
			user: null,
			error: {
				message: 'User not logged in',
			},
		}
	}
}
