import axios from 'axios'

const URL_API = import.meta.env.VITE_URL_API

export async function get () {
  return axios.get(`${URL_API}/users`)
}
