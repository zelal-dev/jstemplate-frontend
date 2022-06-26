import { authAxios } from '../utils/axiosKits'
import { localGet } from '../utils/localStorage'

authAxios.interceptors.request.use((config: any) => {
  const localData: any = localStorage.getItem('jst_u_info')
  const token = JSON.parse(localData)
  config.headers.Authorization = `Bearer ${token?.token}`
  return config
})

export default async function fetcher() {
  //sleep 400ms
  await new Promise((resolve) => setTimeout(resolve, 400))

  const localData = localStorage.getItem('jst_l_info')
  console.log('localData', localData)

  if (localData) {
    // user logged in fetch user data
    //@ts-ignore
    const { data, error } = await authAxios.get('/api/user/self')
    console.log('data from API', data, 'error', error)
    return {
      user: data.data,
      error: error,
    }
  } else {
    return {
      user: null,
      error: {
        message: 'User not logged in',
      },
    }
  }
}