import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'
import Card from './components/Card'
import CardObject from './components/CardObject'

function Cow () {
  const { id } = useParams()

  const [dataCollar, setDataCollar] = useState(null)

  useEffect(() => {
    const socket = io(import.meta.env.VITE_URL_API_SOCKET)

    socket.on(`collar${id}DataUpdated`, (data) => {
      setDataCollar(data)
    })
  }, [])

  if (!dataCollar) {
    return (
      <div>
        <h1 className='text-xl font-semibold mb-2'>Cow {id}</h1>

        <p>No hay datos para mostrar</p>
      </div>
    )
  }

  return (
    <div>
      <h1 className='text-xl font-semibold mb-2'>Cow {id}</h1>

      <div className='grid grid-cols-4 gap-4'>
        {Object.entries(dataCollar).map(([key, value]) => {
          if (key.includes('received_at')) return null
          if (typeof value !== 'object') {
            return <Card key={key} name={key} value={value} receivedAt={dataCollar.received_at} />
          } else {
            return <CardObject key={key} name={key} value={value} receivedAt={dataCollar.received_at} />
          }
        })}
      </div>
    </div>
  )
}

export default Cow
