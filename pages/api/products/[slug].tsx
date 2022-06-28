import _ from 'lodash'
import { NextApiRequest, NextApiResponse } from 'next'
import { Woocommerce } from '../../../src/utils/woocommerce'

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query
  console.log('slug', slug)
  // allow only get request for this endpoint
  if (req.method !== 'GET')
    return res.status(400).json({ message: 'Method not allowed' })

  try {
    const data = await Woocommerce.get('products', {
      slug,
      status: 'publish',
    }).then((response) => response.data)

    // only return few fields
    const filteredData = data.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        slug: item.slug,
        image: item.images[0].src,
        short_description: item.short_description,
      }
    })

    const finalData = Object.assign(filteredData[0], {})

    // fetch again the variations to get the price
    // const variationsData = await Woocommerce.get(
    //   `products/${data[0].id}/variations`,
    //   {
    //     status: 'publish',
    //   }
    // ).then((response) => response.data)

    // pick only the price from the variations
    // const variationsPrice = variationsData.map((variation: any) => {
    //   return {
    //     id: variation.id,
    //     price: variation.price,
    //     sales_price: variation.sale_price,
    //     regular_price: variation.regular_price,
    //   }
    // })

    // pick some field and return as objcect
    // const filteredData = data.map((item: any) => {
    //   const price =
    //     item.type === 'simple'
    //       ? [
    //           {
    //             price: item.price,
    //             regular_price: item.regular_price,
    //             sale_price: item.sale_price,
    //           },
    //         ]
    //       : variationsPrice
    //   return {
    //     id: item.id,
    //     name: item.name,
    //     slug: item.slug,
    //     image: item.images[0].src,
    //     short_description: item.short_description,
    //     date_created: item.date_created,
    //     date_modified: item.date_modified,
    //     featured: item.featured,
    //     sku: item.sku,
    //     type: item.type === 'simple' ? 'simple' : 'variable',
    //     price,
    //     categories: item.categories.map((category: any) => {
    //       return {
    //         id: category.id,
    //         name: category.name,
    //         slug: category.slug,
    //       }
    //     }),
    //   }
    // })

    return res.status(200).send({
      message: 'Successfully fetched product',
      data: finalData,
    })
  } catch (error: any) {
    return res.status(500).send({ message: error })
  }
}
