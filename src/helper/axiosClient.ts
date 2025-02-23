import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { envSettings } from '~/constants/enviroment'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: envSettings.public_api,
  timeout: 10000
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  <T>(response: AxiosResponse<T>) => {
    return response
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
