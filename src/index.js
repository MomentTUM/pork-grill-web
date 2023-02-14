import React from "react"
import ReactDOM from "react-dom/client"
import "react-toastify/dist/ReactToastify.css"
import "./index.css"
import "tw-elements"
import App from "./App"
import AuthContextProvider from "./contexts/AuthContext"
import LoadingContextProvider from "./contexts/LoadingContext"
import CartContextProvider from "./contexts/CartContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // <React.StrictMode>
  <LoadingContextProvider>
    <AuthContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AuthContextProvider>
  </LoadingContextProvider>
  // </React.StrictMode>
)
