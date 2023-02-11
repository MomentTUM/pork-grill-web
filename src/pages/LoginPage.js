import LoginForm from "../features/auth/LoginForm"

import { Link } from "react-router-dom"
export default function LoginPage() {
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
          Grill Grill หมูทะ
        </Link>

        <LoginForm />

      </div>
    </section>
  )
}
