import { NextApiRequest, NextApiResponse } from 'next'
import { Woocommerce } from '../../../src/utils/woocommerce'


export default async function ( req: NextApiRequest, res: NextApiResponse ) {
	if ( req.method !== 'GET' )
		return res.status( 400 ).json( { message: 'Method not allowed' } )

	const data = await Woocommerce.get( 'products', {
		per_page: 50,
	} )
		.then( ( res ) => res.data )
		.catch( ( err ) => err.response.data )
	console.log( data )

	const filteredData = data.map( ( item: any ) => {
		return {
			id: item.id,
			name: item.name,
			slug: item.slug,
			//show image if it is not empty
			image: item.images.length > 0 ? item.images[0].src : '',
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
