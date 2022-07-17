import axios from 'axios'

import { getCookies } from 'cookies-next'
import { NextApiRequest, NextApiResponse } from 'next'
import { Woocommerce } from '../../../src/utils/woocommerce'


export default async function ( req: NextApiRequest, res: NextApiResponse ) {

	if ( req.method !== 'GET' )
		return res.status( 400 ).json( { message: 'You are not allowed' } )

	// get token from cookie
	const { token } = getCookies( { req, res } )

	try {
		// if no token found, return error
		if ( !token )
			return res.status( 400 ).json( { message: 'Please Log in' } )

		// call wordpress login api and get token using axios
		const response = await axios.get(
			`${process.env.API_ENDPOINT}/wp-json/wp/v2/users/me`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			}
		)
		const data = response.data

		const { id } = data

		Woocommerce.get( `customers/${id}` )
			.then( ( response ) => {

				const { data } = response
				if ( data.role !== 'customer' ) {
					return res.status( 200 ).send( {
						message: 'You are not allowed',
					} )
				}
				// return response
				return res.status( 200 ).send( {
					message: 'Successfully fetched user',
					data: response.data,
				} )
			} )
			.catch( ( error ) => {

				return res.status( 500 ).send( {
					message: 'Failed to fetch user',
				} )
			} );

	} catch ( error: any ) {
		// if login failed return error message
		return res.status( 500 ).send( {
			message: 'Login failed',
			data: error.response.data,
		} )
	}
}
