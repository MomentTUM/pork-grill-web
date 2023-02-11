import { Navigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

export default function ProtectedRouteAdmin({ children }) {
  const { authenticatedAdmin } = useAuth()
  if (!authenticatedAdmin) {
    return <Navigate to={"/login"} />
  }
  return children
}
