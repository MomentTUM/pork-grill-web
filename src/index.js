import React from "react"
import ReactDOM from "react-dom/client"
import "react-toastify/dist/ReactToastify.css"
import "./index.css"
import 'tw-elements';
import App from "./App"
import AuthContextProvider from "./contexts/AuthContext"
import LoadingContextProvider from "./contexts/LoadingContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // <React.StrictMode>
    <LoadingContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </LoadingContextProvider>
  // </React.StrictMode>
)
