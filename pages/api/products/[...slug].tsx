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
    const response = await fetch(
      `${process.env.API_ENDPOINT}/wp-json/wc/v3/products/?slug=${slug}`,
      {
        headers: {
          Authorization: `Basic ${process.env.CONSUMER_TOKEN}`,
        },
      }
    )
    const data = await response.json()

    // pick only few fields from the response object
    const filteredData = _.filter(data, (item: any) => {
      return item.status === 'publish'
    }).map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        slug: item.slug,
        image: item.images[0].src,
        short_description: item.short_description,
        price: {
          standard: item.price,
          standardPlus: item.price,
          extended: item.price,
        },
      }
    })

    return res.status(200).send({
      message: 'Successfully fetched products',
      data: filteredData[0],
    })
  } catch (error: any) {
    return res.status(500).send({ message: error.message })
  }
}
