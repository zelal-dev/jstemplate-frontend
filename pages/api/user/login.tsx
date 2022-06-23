import axios from 'axios'
import { result } from 'lodash'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function name(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(400).json({ message: 'You are not allowed' })

  // call wordpress login api and get token using axios
  const { data } = await axios.post(
    `${process.env.API_ENDPOINT}/wp-json/jwt-auth/v1/token`,
    {
      username: req.body.username,
      password: req.body.password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  console.log(`${process.env.API_ENDPOINT}/wp-json/jwt-auth/v1/token`)
  console.log('req.body ', data)
  // return token to client
  return res.status(200).send({
    message: 'Successfully fetched token',
    data,
  })
}
