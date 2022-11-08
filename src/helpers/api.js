import axios from "axios"

export const getData = async () => {
  const response = await axios.get(
    'https://63682e03d1d09a8fa621f12a.mockapi.io/contacts'
  )
  return response.data
}

export const setData = async (data) => {
  const response = await axios.post(
    `https://63682e03d1d09a8fa621f12a.mockapi.io/contacts`, data
  )
  return response.data
}

export const deleteData = async (id) => {
  const response = await axios.delete(
    `https://63682e03d1d09a8fa621f12a.mockapi.io/contacts/${id}`
  )
  return response.data
}