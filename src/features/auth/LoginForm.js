import { useState } from "react"
import ModalForm from "../../components/ModalForm"
import LoginFormAdmin from "./LoginFormAdmin"
import LoginFormCustomer from "./LoginFormCustomer"

export default function LoginForm() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <LoginFormCustomer />
      <div className='text-sm font-light text-gray-700 dark:text-gray-600'>
        พนักงาน{" : "}
        <span
          className='font-medium text-primary-900 hover:underline dark:text-primary-800'
          onClick={() => setOpen(true)}
        >
          เข้าสู่ระบบ
        </span>
        <ModalForm
          open={open}
          doClose={() => setOpen(false)}
          title='Admin'
        >
          <LoginFormAdmin />
        </ModalForm>
      </div>
    </>
  )
}
