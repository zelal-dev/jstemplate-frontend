import { NextApiRequest, NextApiResponse } from 'next'
import { Woocommerce } from '../../../src/utils/woocommerce'

export default async function ( req: NextApiRequest, res: NextApiResponse ) {
	if ( req.method !== 'GET' )
		return res.status( 400 ).json( { message: 'Method not allowed' } )

	const data = await Woocommerce.get( 'products', {
		per_page: 6,
		featured: true,
	} )
		.then( ( res ) => res.data )
		.catch( ( err ) => err.response.data )

	const filteredData = data.map( ( item: any ) => {
		return {
			id: item.id,
			name: item.name,
			slug: item.slug,
			image: item.images[ 0 ].src,
			short_description: item.short_description,
			categories: item.categories.map( ( category: any ) => {
				return {
					id: category.id,
					name: category.name,
					slug: category.slug,
				}
			} ),
		}
	} )

	return res.status( 200 ).send( {
		message: 'Successfully fetched products',
		data: filteredData,
	} )
}
