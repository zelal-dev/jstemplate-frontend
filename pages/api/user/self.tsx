import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET')
    return res.status(400).json({ message: 'You are not allowed' })

  try {
    const userId = req.query.userId
    // call wordpress login api and get token using axios
    const response = await axios.get(
      `${process.env.API_ENDPOINT}/wp-json/wp/v2/users/1`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      }
    )
    const data = response.data

    console.log('data from wordpress', data)
    // return response
    return res.status(200).send({
      message: 'Successfully logged in',
      data,
    })
  } catch (error: any) {
    // if login failed return error message

    return res.status(500).send({
      message: 'Login failed',
      data: error.response.data,
    })
  }
}
