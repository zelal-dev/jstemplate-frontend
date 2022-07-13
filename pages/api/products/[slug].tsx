
import { NextApiRequest, NextApiResponse } from 'next'

import { Woocommerce } from '../../../src/utils/woocommerce'

export default async function ( req: NextApiRequest, res: NextApiResponse ) {

	// extract slug from url
	const { slug } = req.query


	// allow only get request for this endpoint
	if ( req.method !== 'GET' )
		return res.status( 400 ).json( { message: 'Method not allowed' } )

	try {
		const { data } = await Woocommerce.get( 'products', {
			slug,
		} )

		// only return few fields
		const filteredData = data.map( ( item: any ) => {
			return {
				id: item.id,
				name: item.name,
				slug: item.slug,
				image: item.images[0].src,
				short_description: item.short_description,
				description: item.description,
				sku: item.sku,
				price: item.price,
				regular_price: item.regular_price,
				sale_price: item.sale_price,
				date_on_sale_from: item.date_on_sale_from,
				date_on_sale_from_gmt: item.date_on_sale_from_gmt,
				date_on_sale_to: item.date_on_sale_to,
				date_on_sale_to_gmt: item.date_on_sale_to_gmt,
				on_sale: item.on_sale,
			}
		} )

		const finalData = Object.assign( filteredData[0], {} )

		return res.status( 200 ).send( {
			message: 'Successfully fetched product',
			data: finalData,
		} )
	} catch ( error: any ) {
		console.log( "error", error )
		return res.status( 500 ).send( { message: error } )
	}
}
