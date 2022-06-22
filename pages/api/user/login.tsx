import { result } from 'lodash'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function name(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(400).json({ message: 'You are not allowed' })

  // var formdata = new FormData()
  // formdata.append('username', 'jstemplate')
  // formdata.append('password', 'VtQbxn9Rz$Bt^fDsGm')

  var requestOptions = {
    method: 'POST',
  }

  fetch(
    'https://api-blog.jstemplate.net/wp-json/jwt-auth/v1/token?username=jstemplate&password=VtQbxn9Rz$Bt^fDsGm',
    requestOptions as any
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error))

  // // request login access to wordpress route /wp-json/jwt-auth/v1/token
  // const response = await fetch(
  //   `${process.env.API_ENDPOINT}/wp-json/jwt-auth/v1/token?username=jstemplate&password=VtQbxn9Rz$Bt^fDsGm`,
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Basic ${process.env.CONSUMER_TOKEN}`,
  //     },
  //   }
  // )
  console.log(`${process.env.API_ENDPOINT}/wp-json/jwt-auth/v1/token`)
  console.log('req.body ', JSON.stringify(req.body))
  // const data = await response.json()
  // if (data.status === 'error') {
  //   return res.status(400).json({ message: data.message })
  // }

  // return token to client
  return res.status(200).send({
    message: 'Successfully fetched token',
    accessToken: result,
  })
}
