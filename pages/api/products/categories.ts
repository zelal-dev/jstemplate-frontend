import _ from 'lodash'
import { NextApiRequest, NextApiResponse } from 'next'
import { Woocommerce } from '../../../src/utils/woocommerce'

export default async function (req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET')
		return res.status(400).json({ message: 'Method not allowed' })

	const categoryData = await Woocommerce.get('products/categories')
		.then((res) => res.data)
		.catch((error) => error.response.data)

	if (categoryData) {
		const categories = _.map(categoryData, (category) => {
			return {
				id: category.id,
				name: category.name,
				slug: category.slug,
				description: category.description,
				// count: category.count,
				// parent: category.parent,
				// link: category.link,
				// image: category.image,
				// menu_order: category.menu_order,
				// meta: category.meta,
				// _links: category._links,
			}
		})
		return res.status(200).json({
			message: 'Success',
			data: categories,
		})
	}
}
