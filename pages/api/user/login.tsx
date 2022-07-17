import axios from 'axios';
import { setCookie } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function ( req: NextApiRequest, res: NextApiResponse ) {
  if ( req.method !== 'POST' )
    return res.status( 400 ).json( { message: 'You are not allowed' } )

  try {
    // call wordpress login api and get token using axios
    const { data } = await axios.post(
      `${process.env.API_ENDPOINT}/wp-json/api/v1/token`,
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

    const { jwt_token, expires_in }: { jwt_token: string, expires_in: string } = data;

    // // set token to cookie

    setCookie( 'token', jwt_token, {
      req, res,
      maxAge: parseInt( expires_in ),

    } );

    // return response
    return res.status( 200 ).send( {
      message: 'Successfully logged in',
    } )
  } catch ( error: any ) {

    return res.status( 500 ).send( {

      message: 'Login failed',

    } )
  }
}
