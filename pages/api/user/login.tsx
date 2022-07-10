import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'


export default async function ( req: NextApiRequest, res: NextApiResponse ) {
  if ( req.method !== 'POST' )
    return res.status( 400 ).json( { message: 'You are not allowed' } )

  try {
    // call wordpress login api and get token using axios
    const { data } = await axios.post(
      `${ process.env.API_ENDPOINT }/wp-json/jwt-auth/v1/token`,
      {
        username: req.body.username,
        password: req.body.password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    // return response
    return res.status( 200 ).send( {
      message: 'Successfully logged in',
      data,
    } )
  } catch ( error: any ) {
    return res.status( 500 ).send( {
      message: 'Login failed',
      data: error.response.data,
    } )
  }
}
