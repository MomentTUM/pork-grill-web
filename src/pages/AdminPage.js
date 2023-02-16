import RegisterCustomer from "../features/auth/RegisterCustomer"
import Offcavas from "../components/Offcanvas"
import { Link } from "react-router-dom"
import Button from "../components/Button"
import useAuth from "../hooks/useAuth"

export default function AdminPage() {
  const { logoutAdmin, authenticatedAdmin } = useAuth()
  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <Link
          to={"/login"}
          className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
        >
          <img
            className='w-40 h-40 mr-2'
            src='https://res.cloudinary.com/dvcwwkqup/image/upload/v1675905267/Grill_qletxw.png'
            alt='Banner-logo'
          />
          พนักงาน:
          <div className="text-rose-500 pl-1">
            {authenticatedAdmin.firstName}{" "}
            {authenticatedAdmin.lastName}
          </div>
        </Link>
        <div className='rounded-lg w-4/5 p-10 pt-4 max-w-sm py-3 mx-auto dark:bg-gray-800'>
          <button
            className='w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvas'
            aria-controls='offcanvas'
          >
            Register Customer
          </button>
          <Offcavas title='Register Customer Form'>
            <RegisterCustomer />
          </Offcavas>
          <Button title='Sign out' onClick={logoutAdmin} />
        </div>
      </div>
    </section>
  )
}
