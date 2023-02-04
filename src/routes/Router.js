import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AdminPage from "../pages/AdminPage"
import CategoryPage from "../pages/CategoryPage"
import FoodPage from "../pages/FoodPage"
import LoginPage from "../pages/LoginPage"
import OrderPage from "../pages/Order"
import PaymentPage from "../pages/Payment"

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/", element: <CategoryPage /> },
  { path: "/food", element: <FoodPage /> },
  { path: "/order", element: <OrderPage /> },
  { path: "/payment", element: <PaymentPage /> },
  { path: "/admin", element: <AdminPage /> },
  { path: "/admin/order", element: <OrderPage /> },
  { path: "/admin/payment", element: <PaymentPage /> },
])
export default function Router() {
  return <RouterProvider router={router} />
}
