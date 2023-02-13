import { createContext, useEffect, useState } from "react"
import JwtDecode from "jwt-decode"
import * as authApi from "../apis/auth-api"

import {
  getAdminAccessToken,
  removeAccessAdminToken,
  setAccessAdminToken,
  getCustomerAccessToken,
  setAccessCustomerToken,
  removeAccessCustomerToken
} from "../utils/local-storage"

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
  const [authenticatedAdmin, setAuthenticatedAdmin] = useState(
    getAdminAccessToken() ? true : null
  )
  useEffect(() => {
    const fetchAuthAdmin = async () => {
      try {
        const res = await authApi.getMe()
        setAuthenticatedAdmin(res.data.user)
      } catch (error) {
        console.log(error)
        removeAccessAdminToken()
      }
    }
    if (getAdminAccessToken()) {
      fetchAuthAdmin()
    }
  }, [])

  const [authenticatedCustomer, setauthenticatedCustomer] = useState(
    getCustomerAccessToken() ? true : null
  )
  useEffect(() => {
    const fetchAuthCustomer = async () => {
      try {
        // const res = await authApi.getMe()
        setauthenticatedCustomer(JwtDecode(getCustomerAccessToken()))
      } catch (error) {
        console.log(error)
        removeAccessCustomerToken()
      }
    }
    if (getCustomerAccessToken()) {
      fetchAuthCustomer()
    }
  }, [])

  const loginAdmin = async (username, password) => {
    const res = await authApi.login({ username, password })
    setAccessAdminToken(res.data.accessToken)
    setAuthenticatedAdmin(JwtDecode(res.data.accessToken))
  }

  const loginCustomer = async (input) => {
    const res = await authApi.loginCustomer( input )
    setAccessCustomerToken(res.data.accessToken)
    setauthenticatedCustomer(JwtDecode(res.data.accessToken))
  }

  const logoutAdmin = () => {
    removeAccessAdminToken()
    setAuthenticatedAdmin(null)
  }

  const logoutCustomer = () => {
    removeAccessCustomerToken()
    setauthenticatedCustomer(null)
  }

  return (
    <AuthContext.Provider
      value={{
        authenticatedAdmin,
        authenticatedCustomer,
        loginAdmin,
        loginCustomer,
        logoutAdmin,
        logoutCustomer
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
