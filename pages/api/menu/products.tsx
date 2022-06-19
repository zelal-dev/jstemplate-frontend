import _ from 'lodash'
import { NextApiRequest, NextApiResponse } from 'next'
import { Woocommerce } from '../../../src/utils/woocommerce'
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(400).json({ message: 'Method not allowed' })
  }

  try {
    const response = await fetch(
      `${process.env.API_ENDPOINT}/wp-json/menus/v1/menus/144/?nested=1`,
      {
        headers: {
          Authorization: `Basic ${process.env.CONSUMER_TOKEN}`,
        },
      }
    )

    const data = await response.json()
    //   filder parent menu items and child menu items
    const categoryMenu = _.filter(data, (item: any) => {
      return item.post_type === 'nav_menu_item'
    }).map((item: any) => {
      return {
        id: item.ID,
        title: item.title,
        menu_order: item.menu_order,
        attr_title: item.attr_title,
        // slice url to get only the slug
        url: item.url,

        children: item.children?.map((child: any) => {
          return {
            id: child.ID,
            title: child.title,
            description: child.post_content,
            url: child.url,
            iconClass: child.classes[0],
          }
        }),
      }
    })

    return res.status(200).send({
      message: 'Successfully fetched menus',
      data: categoryMenu,
    })
  } catch (error: any) {
    return res.status(500).send({ message: error.message })
  }
}
