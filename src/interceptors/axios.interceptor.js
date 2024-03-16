import axios from 'axios'

function AxiosInterceptor () {
  const updateHeader = (request) => {
    const token = JSON.parse(window.localStorage.getItem('token'))

    const newHeader = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }

    request.headers = newHeader
    return request
  }

  const logout = () => {
    window.localStorage.removeItem('token')
    window.location.href = '/login'
  }

  axios.interceptors.request.use((request) => {
    if (request.url.includes(import.meta.env.VITE_URL_API)) {
      return updateHeader(request)
    }

    return request
  })

  axios.interceptors.response.use(
    (response) => {
      return response
    }, (error) => {
      if (error.response.status === 401) {
        logout()
      }

      return Promise.reject(error.response.data)
    }
  )
}

export { AxiosInterceptor }
