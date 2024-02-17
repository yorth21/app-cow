import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Card from './Card'
import CardObject from './CardObject'
import axios from 'axios'

function Home () {
  const [decodedPayload, setDecodedPayload] = useState(null)

  useEffect(() => {
    console.log(import.meta.env.VITE_URL_API_SOCKET)
    const socket = io(import.meta.env.VITE_URL_API_SOCKET)

    fetchData()

    socket.on('newDataCollar', (data) => {
      setDecodedPayload(data)
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  async function fetchData () {
    const response = await axios.get('http://localhost:3002/api/cows')
    console.log(response.data)
  }

  if (!decodedPayload) {
    return (
      <div className='flex-1 flex flex-col gap-4'>
        <section className='flex flex-col p-6'>
          <h1 className='text-3xl font-bold mb-4'>Dashboard</h1>

          <p>No hay datos para mostrar</p>
        </section>
      </div>
    )
  }

  return (
    <div className='flex-1 flex flex-col gap-4'>
      <section className='flex flex-col p-6'>
        <h1 className='text-3xl font-bold mb-4'>Dashboard</h1>

        <div className='grid grid-cols-4 gap-4'>
          {Object.entries(decodedPayload).map(([key, value]) => {
            if (key.includes('received_at')) return null
            if (typeof value !== 'object') {
              return <Card key={key} name={key} value={value} receivedAt={decodedPayload.received_at} />
            } else {
              return <CardObject key={key} name={key} value={value} receivedAt={decodedPayload.received_at} />
            }
          })}
        </div>
      </section>
    </div>
  )
}

export default Home
