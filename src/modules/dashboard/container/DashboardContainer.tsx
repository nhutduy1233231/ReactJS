import { useEffect } from 'react'
import BarChart from '~/components/chart/BarChart'
import { dateUltils } from '~/utils/dateUltils'
import { numberUtils } from '~/utils/numberUltils'

interface statisticalType {
  date: string
  total_products: number
  revenue: number
  average_price: number
}

const generateData = () => {
  const newData = dateUltils.getAllDatesInMonth('2025/01')

  const initValues: statisticalType[] = []

  const val = newData.reduce((prev: statisticalType[], current) => {
    const newEntry = {
      date: current,
      total_products: numberUtils.getRandomNumber(0, 100),
      revenue: numberUtils.getRandomNumber(0, 100),
      average_price: numberUtils.getRandomNumber(0, 100)
    }

    return [...prev, newEntry]
  }, initValues)

  return {
    label: 'name1',
    data: val
  }
}

const DashBoardContainer = () => {
  useEffect(() => {
    generateData()
  }, [])

  return (
    <div style={{ maxWidth: '880px', margin: 'auto' }}>
      <BarChart labels={dateUltils.getAllDatesInMonth('2025/01')} datasets={[generateData()]} />
    </div>
  )
}

export default DashBoardContainer
