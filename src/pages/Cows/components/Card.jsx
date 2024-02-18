import cowImg from '@/assets/images/cow1.webp'
import { Link } from 'react-router-dom'

function Card () {
  return (
    <Link to='/cow/1'>
      <div className='bg-white shadow-sm rounded-lg p-3'>
        <div className='flex items-center gap-6'>
          <img
            src={cowImg}
            alt='cow'
            className='inline-block object-cover object-center rounded-lg shadow-lg w-16 h-16'
          />
          <div>
            <h5 className='text-xl font-semibold leading-snug'>Lolaasdas</h5>
            <p className='text-sm'>Id: 1</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
