import { Navigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

export default function ProtectedRouteCustomer({ children }) {
  const { authenticatedCustomer } = useAuth()
  if (!authenticatedCustomer) {
    return <Navigate to={"/login"} />
  }
  return children
}
