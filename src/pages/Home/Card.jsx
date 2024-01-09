import { obtenerFormatoFecha } from '../../utils/formatoFecha'

function Card ({ name, value, receivedAt }) {
  const date = new Date(receivedAt)
  const { dia, hora } = obtenerFormatoFecha(date)

  return (
    <div className='bg-white rounded-xl overflow-hidden shadow-sm'>
      <div className='bg-amber-400 p-3 pb-2 h-24 flex flex-col justify-end'>
        <h2 className='text-2xl'>{value}</h2>
        <p className='-mt-1.5 '>{name}</p>
      </div>
      <div className='p-3 pt-2'>
        <p className='text-sm'>Last activity:</p>
        <p className='-mt-1'>{dia} {hora}</p>
      </div>
    </div>
  )
}

export default Card
