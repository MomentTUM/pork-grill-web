import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RedirectifAuthenticate from "../features/auth/RedirectifAuthenticate"
import ProtectedRouteAdmin from "../features/auth/ProtectedRouteAdmin"
import AdminPage from "../pages/AdminPage"
import LoginPage from "../pages/LoginPage"
import CustomerPage from "../pages/Customer"
import { Navigate } from "react-router-dom"
import ProtectedRouteCustomer from "../features/auth/ProtectedRouteCustomer"
// import OrderPage from "../pages/Order"
import PaymentPage from "../pages/Payment"

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectifAuthenticate>
        <LoginPage />
      </RedirectifAuthenticate>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRouteAdmin>
        <AdminPage />
      </ProtectedRouteAdmin>
    ),
  },
  {
    path: "/Customer",
    element: (
      <ProtectedRouteCustomer>
        <CustomerPage />
      </ProtectedRouteCustomer>
    ),
  },
  // {
  //   path: "/Order",
  //   element: (
  //     <ProtectedRouteCustomer>
  //       <OrderPage />
  //     </ProtectedRouteCustomer>
  //   ),
  // },
  {
    path: "/Payment",
    element: (
      <ProtectedRouteCustomer>
        <PaymentPage />
      </ProtectedRouteCustomer>
    ),
  },
  {
    path: "*",
    element: <Navigate to={"/login"} />,
  },
])
export default function Router() {
  return <RouterProvider router={router} />
}
