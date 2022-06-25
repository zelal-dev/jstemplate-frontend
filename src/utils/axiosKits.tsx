import axios from 'axios'
import { localGet } from './localStorage'

export const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})
export const Temp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})
//  const productResponse = await Axios.get(`/api/v1/public/products`)

export const authAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ${localGet('jst_l_info')?.token}`,
    Accept: 'application/json',
  },
})
