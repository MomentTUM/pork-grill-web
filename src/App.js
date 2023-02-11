import { ToastContainer, Flip } from "react-toastify" /*Flip, Slide, Zoom, Bounce */
import Spinner from "./components/spinner"
import useLoading from "./hooks/useLoading"
import Router from "./routes/Router"

function App() {
  const { loading } = useLoading()
  return (
    <>
      {loading && <Spinner />}
      <Router />
      <ToastContainer
        position="bottom-center"
        transition={Flip}
        autoClose={300}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
