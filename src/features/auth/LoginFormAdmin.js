import { useState } from "react"
import { toast } from "react-toastify"
import useLoading from "../../hooks/useLoading"
import useAuth from "../../hooks/useAuth"

export default function LoginFormAdmin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { startLoading, stopLoading } = useLoading()
  const { loginAdmin } = useAuth()

  const handleSubmitAdminForm = async e => {
    try {
      e.preventDefault()
      startLoading()
      await loginAdmin(username, password)
      toast.success("success Admin login")
    } catch (err) {
      console.log(err)
      toast.error(err.response?.data.message)
    } finally {
      stopLoading()
    }
  }
  return (
    <form onSubmit={handleSubmitAdminForm}>
      <div>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          ชื่อผู้ใช้ :
        </label>
        <input
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
          className='bg-gray-50 border my-3 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='ชื่อผู้ใช้'
        />
      </div>

      <div>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          รหัสผ่าน :
        </label>
        <input
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          className='bg-gray-50 border my-3 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='รหัสผ่าน'
        />
      </div>

      <hr className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700' />
      <button
        type='submit'
        className='w-full text-white bg-rose-600 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:dark:bg-rose-700 dark:focus:ring-rose-800'
      >
        เข้าสู่ระบบ
      </button>
    </form>
  )
}
