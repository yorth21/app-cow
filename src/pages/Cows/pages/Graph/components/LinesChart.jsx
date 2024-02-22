import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { io } from 'socket.io-client'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const chartOptions = {
  plugins: {
    legend: {
      display: false
    }
  }
}

function LinesChart ({ id, property }) {
  const [dataPoints, setDataPoints] = useState([])

  useEffect(() => {
    const socket = io(import.meta.env.VITE_URL_API_SOCKET)

    socket.on(`collar${id}DataUpdated`, (data) => {
      console.log(data)
      setDataPoints(prevDataPoints => [...prevDataPoints, data])
    })

    return () => {
      socket.off(`collar${id}DataUpdated`)
    }
  }, [id])

  const chartData = {
    labels: dataPoints.map(point => point.received_at),
    datasets: [
      {
        label: property,
        data: dataPoints.map(point => point[property]),
        tension: 0.3,
        fill: false,
        borderColor: 'rgb(75, 192, 192)'
      }
    ]
  }

  return <Line data={chartData} options={chartOptions} />
}

export default LinesChart
