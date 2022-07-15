import axios from 'axios'
import { getCookie } from 'cookies-next'

// get the token from cookie
const token = getCookie( 'token' )

export const Axios = axios.create( {
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
} )

export const SeoAxios = axios.create( {
	baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
} )
export const authAxios = axios.create( {
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
	headers: {
		Authorization: `Bearer ${token}`,
		Accept: 'application/json',
	},
} )
