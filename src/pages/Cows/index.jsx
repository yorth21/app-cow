import Card from './components/Card'

const COWS = [
  {
    id: 1,
    name: 'Lola',
    img: 'https://images.unsplash.com/photo-1595365691689-6b7b4e1970cf?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    name: 'Betsy',
    img: 'https://images.unsplash.com/photo-1593768697824-f31b967e6c55?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

function Cows () {
  return (
    <div>
      <h2 className='text-xl font-semibold mb-2'>Cows</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        {COWS.map((cow) => (
          <Card key={cow.id} cow={cow} />
        ))}
      </div>
    </div>
  )
}

export default Cows
