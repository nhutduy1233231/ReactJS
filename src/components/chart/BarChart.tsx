import {
  BarElement,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from 'chart.js'
import { useMemo } from 'react'
import { Bar } from 'react-chartjs-2'
import { chartConfig } from '~/components/chart/chartConfig'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface statisticalType {
  date: string
  total_products: number
  revenue: number
  average_price: number
}

interface BarChartProps {
  labels?: string[]
  datasets: { label: string; data: statisticalType[] }[]
}

const BarChart = (props: BarChartProps) => {
  const datasets = useMemo(() => {
    if (props.datasets.length > 0) {
      return props.datasets.map((el) => {
        return {
          label: el.label,
          data: el.data.map((ele) => ele.revenue),
          backgroundColor: chartConfig.backgroundColor,
          borderColor: chartConfig.borderColor,
          borderWidth: chartConfig.borderWidth
        }
      })
    }

    return [
      {
        label: '',
        data: [],
        backgroundColor: chartConfig.backgroundColor,
        borderColor: chartConfig.borderColor,
        borderWidth: chartConfig.borderWidth
      }
    ]
  }, [props.datasets])

  const data: ChartData<'bar'> = {
    labels: props.labels,
    datasets: datasets
  }

  const options: ChartOptions<'bar'> = {
    responsive: true,
    layout: {
      padding: 10
    },
    plugins: {
      legend: {
        position: undefined
      },
      tooltip: {
        enabled: false,
        external: function (context) {
          let tooltipEl = document.getElementById('chartjs-tooltip')

          if (!tooltipEl) {
            tooltipEl = document.createElement('div')
            tooltipEl.id = 'chartjs-tooltip'
            tooltipEl.style.display = 'none' // Ban đầu ẩn tooltip
            tooltipEl.style.position = 'absolute'
            tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)'
            tooltipEl.style.color = 'white'
            tooltipEl.style.padding = '8px'
            tooltipEl.style.borderRadius = '4px'
            tooltipEl.style.pointerEvents = 'none'
            tooltipEl.style.transition = 'all 0.2s ease'
            document.body.appendChild(tooltipEl)
          }

          const tooltipModel = context.tooltip
          if (!tooltipModel || tooltipModel.opacity === 0) {
            tooltipEl.style.display = 'none' // Ẩn tooltip khi không hover
            return
          }

          const current = tooltipModel.dataPoints[0]
          const dataIndex = current.dataIndex
          const datasetIndex = current.datasetIndex

          const item: statisticalType | undefined = getData(dataIndex, datasetIndex, props.datasets)

          tooltipEl.innerHTML = `<strong>${current.label}</strong> 
          <p>Revenue: ${item?.revenue}</p>
          <p>Average Price: ${item?.average_price}</p>
          <p>Products: ${item?.total_products}</p>`

          const chartRect = context.chart.canvas.getBoundingClientRect()

          let left = chartRect.left + window.scrollX + tooltipModel.caretX
          const top = chartRect.top + window.scrollY + tooltipModel.caretY

          const tooltipWidth = tooltipEl.offsetWidth
          const screenWidth = window.innerWidth

          if (left + tooltipWidth > screenWidth) {
            left -= tooltipWidth + 10 // Đẩy tooltip sang trái
          }
          if (left < 0) {
            left = 10 // Giữ tooltip không bị lệch trái
          }

          tooltipEl.style.display = 'block' // Chỉ hiển thị khi hover
          tooltipEl.style.left = `${left}px`
          tooltipEl.style.top = `${top}px`
        }
      }
    }
  }

  const getData = (dataIndex: number, datasetIndex: number, data: { label: string; data: statisticalType[] }[]) => {
    try {
      if (data.length == 0) {
        return undefined
      }

      return data[datasetIndex].data[dataIndex]
    } catch {
      return undefined
    }
  }

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  )
}

export default BarChart
