import LoginForm from "../features/auth/LoginForm"
import image from "../assets/presentation-of-thai-cooking1.jpg"

import { Link } from "react-router-dom"
export default function LoginPage() {
  return (
    <section className=''>
      <div className="fixed -z-10 h-screen w-screen ">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt=""
          />
        </div>
      <div className='flex flex-col z-10 absolute inset-x-5 -inset-y-10 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 backdrop-blur-sm'>
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
