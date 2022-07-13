
import { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/router'
import { Woocommerce } from '../../../src/utils/woocommerce'

export default async function ( req: NextApiRequest, res: NextApiResponse ) {

	const router = useRouter()
	const { slug } = router.query

	console.log( "Slug is: from ssr ", slug )

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
