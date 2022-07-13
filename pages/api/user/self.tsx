import axios from 'axios'
import { getCookie } from 'cookies-next'
import { NextApiRequest, NextApiResponse } from 'next'


export default async function ( req: NextApiRequest, res: NextApiResponse ) {

	if ( req.method !== 'GET' )
		return res.status( 400 ).json( { message: 'You are not allowed' } )

	// get token from cookie
	const returnToken = getCookie( 'token', {
		req, res
	} )
	try {

		// call wordpress login api and get token using axios
		const response = await axios.get(
			`${process.env.API_ENDPOINT}/wp-json/wp/v2/users/1`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${returnToken}`,
				},
			}
		)
		const data = response.data

		// return response
		return res.status( 200 ).send( {
			message: 'Successfully logged in',
			data
		} )
	} catch ( error: any ) {
		// if login failed return error message

		return res.status( 500 ).send( {
			message: 'Login failed',
			data: error.response.data,
		} )
	}
}
