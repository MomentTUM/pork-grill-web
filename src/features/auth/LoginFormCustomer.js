import React from "react"
import { useState } from "react"
import { toast } from "react-toastify"
import useLoading from "../../hooks/useLoading"
import useAuth from "../../hooks/useAuth"

const initialInput = {
  phone: "",
}
export default function LoginFormCustomer() {
  const { startLoading, stopLoading } = useLoading()
  const { loginCustomer } = useAuth()
  const [input, setInput] = useState(initialInput)

  const handleChangInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSubmitCustomerForm = async e => {
    try {
      e.preventDefault()
      startLoading()
      await loginCustomer(input)
      toast.success("success Customer login")
    } catch (err) {
      console.log(err)
      toast.error(err.response?.data.message)
    } finally {
      stopLoading()
    }
  }
  return (
    <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
      <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
          เข้าสู่ระบบด้วยเบอร์โทร
        </h1>
        <form
          className='space-y-4 md:space-y-6'
          action='#'
          onSubmit={handleSubmitCustomerForm}
        >
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              ลงชื่อเข้าใช้ :
            </label>
            <input
              type='tel'
              name='phone'
              value={input.phone}
              onChange={handleChangInput}
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='เบอร์โทรศัพท์'
            />
          </div>
          <button
            type='submit'
            className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
          >
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </div>
  )
}
