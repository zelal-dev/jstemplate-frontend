import { NextApiRequest, NextApiResponse } from 'next'

export default async function name(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(400).json({ message: 'You are not allowed' })

  // request login access to wordpress route /wp-json/jwt-auth/v1/token
  const response = await fetch(
    `${process.env.API_ENDPOINT}/wp-json/jwt-auth/v1/token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${process.env.CONSUMER_TOKEN}`,
      },
      body: JSON.stringify({
        username: req.body.email,
        password: req.body.password,
      }),
    }
  )
  const data = await response.json()
  if (data.status === 'error') {
    return res.status(400).json({ message: data.message })
  }

  // return token to client
  return res.status(200).send({
    message: 'Successfully fetched token',
    accessToken: data,
  })
}
