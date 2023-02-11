import { useState, useEffect } from "react"
import { toast } from "react-toastify"
// import Input from "../../components/Input"
import * as authApi from "../../apis/auth-api"
import useLoading from "../../hooks/useLoading"
import useAuth from "../../hooks/useAuth"
import CounterInput from "../../components/CounterInput"
import axios from "../../config/axios"
import SelectItem from "../../components/SelectItem"
import validateRegister from "../../validators/validate-register"

export default function RegisterCustomer() {
  const { authenticatedAdmin } = useAuth()
  const [inputAdult, setInputAdult] = useState(0)
  const [inputKid, setInputKid] = useState(0)
  const { startLoading, stopLoading } = useLoading()
  const [table, setTable] = useState([])
  const [selectTable, setselectTable] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  useEffect(() => {
    const fetchTable = async () => {
      try {
        const res = await axios.get("table/available")
        setTable(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchTable()
  }, [table.length])

  const handleSubmitCustomerForm = async e => {
    try {
      e.preventDefault()
      const result = validateRegister({
        adult: inputAdult,
        kid: inputKid,
        phone: phoneNumber,
        tableId: selectTable,
        checkin: new Date(),
        adminId: authenticatedAdmin.id,
      })
      if (result.error) {
        throw new Error("phone number invalid")
      }
      startLoading()
      await authApi.register(result.value)
      toast.success("success Register")
    } catch (err) {
      toast.error(err.message)
    } finally {
      setInputAdult(0)
      setInputKid(0)
      setPhoneNumber("")
      setselectTable("")
      stopLoading()
    }
  }
  return (
    <form onSubmit={handleSubmitCustomerForm}>
      <div>
        <div className='flex text-mo mb-2 font-medium text-gray-900 dark:text-white text-'>
          Your Table :
          <SelectItem
            table={table}
            selectTable={selectTable}
            setselectTable={setselectTable}
          />
        </div>
      </div>
      <div>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Adult :
        </label>
        <CounterInput
          inputNumber={inputAdult}
          setInputNumber={setInputAdult}
        />

        <label className='mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Kid :
        </label>
        <CounterInput
          inputNumber={inputKid}
          setInputNumber={setInputKid}
        />

        <label className='mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Phone :
          <input
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            className='bg-gray-50 border my-3 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Phone'
          />
        </label>
      </div>

      <hr className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700' />
      <button
        type='submit'
        className='w-full text-white bg-rose-600 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:dark:bg-rose-700 dark:focus:ring-rose-800'
      >
        Register
      </button>
    </form>
  )
}
