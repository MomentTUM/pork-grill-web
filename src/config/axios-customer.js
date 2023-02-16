import axios from 'axios'
import { getCustomerAccessToken } from "../utils/local-storage"
axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT

axios.interceptors.request.use(
    config => {
      if (getCustomerAccessToken()) {
        config.headers.authorization = `Bearer ${getCustomerAccessToken()}`
      }
      return config
    },
    err => {
      return Promise.reject(err)
    }
  )

export default axios