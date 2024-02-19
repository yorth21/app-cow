import { formatHours } from '@/utils/formatHours'

function CardObject ({ name, value, receivedAt }) {
  const date = new Date(receivedAt)
  const { dia, hora } = formatHours(date)

  return (
    <div className='bg-white rounded-xl overflow-hidden shadow-sm'>
      <div className='bg-blue-400 flex justify-between p-3 pb-2 h-24'>
        <div className='flex flex-col justify-end'>
          <p>{name}</p>
        </div>
        <div className='flex flex-col justify-end'>
          {Object.entries(value).map(([key, value]) => (
            <div key={key} className='flex justify-end items-end gap-1'>
              <p className='text-lg font-medium'>{value}</p>
              <p className='mb-0.5'>:{key}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='p-3 pt-2'>
        <p className='text-sm'>Last activity:</p>
        <p className='-mt-1'>{dia} {hora}</p>
      </div>
    </div>
  )
}

export default CardObject
