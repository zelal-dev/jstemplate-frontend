import { deleteCookie } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function ( req: NextApiRequest, res: NextApiResponse ) {
  if ( req.method !== 'POST' )
    return res.status( 400 ).json( { message: 'You are not allowed' } )

  try {
    deleteCookie( 'token', { req, res } );

    // return response
    return res.status( 200 ).send( {
      message: 'Successfully logged out',
    } )
  } catch ( error: any ) {
    return res.status( 500 ).send( {
      message: 'logout failed',
    } )
  }
}
