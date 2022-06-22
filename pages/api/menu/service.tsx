import _ from 'lodash'
import { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(400).json({ message: 'Method not allowed' })
  }

  try {
    const response = await fetch(
      `${process.env.API_ENDPOINT}/wp-json/menus/v1/menus/145/`,
      {
        headers: {
          Authorization: `Basic ${process.env.CONSUMER_TOKEN}`,
        },
      }
    )

    const data = await response.json()

    //   pick the few fields from array using lodash
    const serviceMenu = _.map(data, (item: any) => {
      return {
        id: item.ID,
        title: item.title,
        menu_order: item.menu_order,
        attr_title: item.attr_title,
        description: item.post_content,
        url: item.url ? item.url : '#',
      }
    })

    return res.status(200).send({
      message: 'Successfully fetched menus',
      data: serviceMenu,
    })
  } catch (error: any) {
    return res.status(500).send({ message: error.message })
  }
}
