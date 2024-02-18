import Card from './components/Card'

function Cows () {
  return (
    <div>
      Cows
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        <Card />
      </div>
    </div>
  )
}

export default Cows
