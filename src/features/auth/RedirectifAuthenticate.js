import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function RedirectifAuthenticate({ children }) {
  const { authenticatedAdmin,authenticatedCustomer } = useAuth();
  if (authenticatedAdmin) {
    return <Navigate to={"/admin"} />;
  } if (authenticatedCustomer) {
    return <Navigate to={"/customer"} />;
  }
  return children;
}
