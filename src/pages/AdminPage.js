import RegisterCustomer from "../features/auth/RegisterCustomer"
import Offcavas from "../components/Offcanvas"
import { Link } from "react-router-dom"
import Button from "../components/Button"
import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"

export default function AdminPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(
      "/managePayment"
    );
  };
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
          <div className="flex flex-col gap-1">
          <button
            className='h-8 w-72 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-indigo-100 border border-[#ad4841] rounded-sm shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-[#ad4841] via-rose-700 to-rose-600'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvas'
            aria-controls='offcanvas'
          >
            Register Customer
          </button>
          <Button title='Payment' onClick={handleClick} size='h-8 w-72'/>
          
          <Button title='Sign out' onClick={logoutAdmin} size='h-8 w-72' />
          <Offcavas title='Register Customer Form'>
            <RegisterCustomer />
          </Offcavas>
          </div>
        </div>
      </div>
    </section>
  )
}
