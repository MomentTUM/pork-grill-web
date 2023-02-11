import axios from 'axios'
import { getAdminAccessToken } from "../utils/local-storage"
axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT

axios.interceptors.request.use(
    config => {
      if (getAdminAccessToken()) {
        config.headers.authorization = `Bearer ${getAdminAccessToken()}`
      }
      return config
    },
    err => {
      return Promise.reject(err)
    }
  )

export default axios