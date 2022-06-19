import _ from 'lodash'
import { NextApiRequest, NextApiResponse } from 'next'
import { Woocommerce } from '../../../src/utils/woocommerce'

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET')
    return res.status(400).json({ message: 'Method not allowed' })
  // const response = await fetch(
  //   `${process.env.API_ENDPOINT}/wp-json/wc/v3/products`,
  //   {
  //     headers: {
  //       Authorization: `Basic ${process.env.CONSUMER_TOKEN}`,
  //     },
  //   }
  // )
  // const data = await response.json()

  const data = await Woocommerce.get('products').then((res) => res.data)

  const filteredData = _.filter(data, (item: any) => {
    return item.status === 'publish'
  }).map((item: any) => {
    return {
      id: item.id,
      name: item.name,
      slug: item.slug,
      image: item.images[0].src,
      short_description: item.short_description,
      categories: item.categories.map((category: any) => {
        return {
          id: category.id,
          name: category.name,
          slug: category.slug,
        }
      }),
    }
  })

  return res.status(200).send({
    message: 'Successfully fetched products',
    data: filteredData,
  })
}
