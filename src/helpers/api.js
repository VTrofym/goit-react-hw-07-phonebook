import axios from "axios"

export const getData = async () => {
  const response = await axios.get(
    'https://63682e03d1d09a8fa621f12a.mockapi.io/contacts'
  )
  return response.data
}