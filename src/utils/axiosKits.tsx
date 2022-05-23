import axios from 'axios'
import { localGet } from './localStorage'

export const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export const authAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ${localGet('jst_u_info')?.token}`,
    Accept: 'application/json',
  },
})
