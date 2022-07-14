import { NextApiRequest, NextApiResponse } from 'next';
import { CoCart } from '../../../src/utils/cocart';

export default async function ( req: NextApiRequest, res: NextApiResponse ) {

  // only accept get request
  if ( req.method !== 'GET' )
    return res.status( 400 ).json( { message: 'You are not allowed' } )


  CoCart.get( "cart" )
    .then( ( response ) => {

      res.status( 200 ).json( {

        status: response.status,
        message: 'success',
        items: response.data.items

      } )
    } )
    .catch( ( error ) => {

      res.status( error.status ).json( {

        status: error.status,
        message: error.message,
        data: error.data

      } )
    } )

}