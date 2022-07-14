/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCookie } from 'cookies-next'
import useSWR from 'swr'
import { authAxios } from '../utils/axiosKits'

export default async function fetcher () {
	//sleep 400ms
	await new Promise( ( resolve ) => setTimeout( resolve, 400 ) )

	const token = getCookie( 'token' )

	if ( token ) {
		// user logged in fetch user data
		const { data } = useSWR( '/api/user/self', ( url: string ) => authAxios.get( url ).then(
			( res ) => res.data
		) )
		console.log( "data", data )
		return {
			user: data,
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
