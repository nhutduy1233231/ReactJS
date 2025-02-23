import { useEffect } from 'react'
import axiosInstance from '~/helper/axiosClient'
import { useSelector } from '~/hook/Selector'

export const Example = () => {
  const data = useSelector((state) => state.siderSlice) ?? ''

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      // Sử dụng axiosInstance với kiểu ApiResponse
      const response = await axiosInstance.get<{ data: 'success' }>('/mockup')
      console.log(response.data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return <div className=''>{JSON.stringify(data)}</div>
}
