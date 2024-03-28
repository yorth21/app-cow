import { useParams } from 'react-router-dom'

function Edit () {
  const { username } = useParams()

  return (
    <div>
      {username}
    </div>
  )
}

export default Edit
