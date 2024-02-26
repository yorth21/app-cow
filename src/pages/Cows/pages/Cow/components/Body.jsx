import CardOneProperty from './CardOneProperty'
import CardThreeProperties from './CardThreeProperties'

function Body ({ dataCollar }) {
  return (
    <div>
      <div className='grid grid-cols-4 gap-4'>
        {Object.entries(dataCollar).map(([key, value]) => {
          if (key.includes('__')) return null

          if (typeof value !== 'object') {
            return <CardOneProperty key={key} name={key} value={value} />
          } else {
            return <CardThreeProperties key={key} name={key} value={value} receivedAt={dataCollar.received_at} />
          }
        })}
      </div>
    </div>
  )
}

export default Body
