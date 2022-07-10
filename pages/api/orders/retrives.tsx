import { NextApiRequest, NextApiResponse } from 'next'
import { Woocommerce } from '../../../src/utils/woocommerce'

export default async function ( req: NextApiRequest, res: NextApiResponse ) {
	if ( req.method !== 'GET' ) {
		return res.status( 400 ).json( { message: 'You are not allowed' } )
	}

	// list of single customer orders
	const data = await Woocommerce.get( 'orders', {
		customer: 1,
	} )
		.then( ( res ) => res.data )
		.catch( ( err ) => err.response.data )

	interface OrderDocument {
		id: number,
		parent_id: number,
		status: string,
		currency: string,
		date_created: string,
		date_modified: string,
		customer_id: number,
		payment_method: string,
		payment_method_title: string
		transaction_id: string
		customer_ip_address: string,
		created_via: string,
		customer_note: string,
		date_completed: string,
		date_paid: string,
		cart_hash: string,
		number: number,
		// array of object
		line_items: {
			id: number,
			name: string,
			product_id: number,
			variation_id: number,
			quantity: number,
			tax_class: string,
			subtotal: string,
			subtotal_tax: string,
			total: string,
			total_tax: string,
			taxes: [],
			meta_data: [],
			sku: string,
			price: string,
			image: {
				id: number,
				src: string,
			},
			parent_name: string,

		}[],

	}

	// map the line_items to an array of objects
	const filteredData = data.map( ( item: OrderDocument ) => {
		return {
			id: item.id,
			parent_id: item.parent_id,
			status: item.status,
			currency: item.currency,
			date_created: item.date_created,
			date_modified: item.date_modified,
			customer_id: item.customer_id,
			payment_method: item.payment_method,
			payment_method_title: item.payment_method_title,
			transaction_id: item.transaction_id,
			customer_ip_address: item.customer_ip_address,
			created_via: item.created_via,
			customer_note: item.customer_note,
			date_completed: item.date_completed,
			date_paid: item.date_paid,
			cart_hash: item.cart_hash,
			number: item.number,
			line_items: item.line_items.map( ( line_item: any ) => {
				return {
					id: line_item.id,
					name: line_item.name,
					product_id: line_item.product_id,
					variation_id: line_item.variation_id,
					quantity: line_item.quantity,
					tax_class: line_item.tax_class,
					subtotal: line_item.subtotal,
					subtotal_tax: line_item.subtotal_tax,
					total: line_item.total,
					total_tax: line_item.total_tax,
					taxes: line_item.taxes,
					image: line_item.image,
					parent_name: line_item.parent_name,
				}
			}
			),
		}
	} )

	res.status( 200 ).send( {
		message: 'Successfully fetched orders',
		data: filteredData,

	} )
}
