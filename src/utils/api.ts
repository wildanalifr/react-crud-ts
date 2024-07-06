import axios from 'axios'

const URL = 'https://api.escuelajs.co/api/v1'

const axiosReq = axios.create({
  baseURL: URL,
})

axiosReq.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    )
)

export default axiosReq

export const getDatas = async () => {
  try {
    const response = await axiosReq.get(`/products/`)
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}

export const deleteData = async (id: number) => {
  try {
    const response = await axiosReq.delete(`/products/${id}`)
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}
