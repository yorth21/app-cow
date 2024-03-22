import axios from 'axios'

const URL_API = import.meta.env.VITE_URL_API

export async function login (data) {
  return axios.post(`${URL_API}/auth/login/`, data)
}
