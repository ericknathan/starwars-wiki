import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://sevencoders-starwars-wiki.herokuapp.com',
})

export const authApi = axios.create({
  baseURL: 'https://discord.com/api',
})
