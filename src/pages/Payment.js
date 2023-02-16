import { useState, useEffect } from "react"
import axios from "../config/axios-customer"
import BoxItem from "../Layouts/BoxItem"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const [orderList, setOrderList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchOrderList = async () => {
      try {
        const res = await axios.get("/cart/getOrder")
        setOrderList(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchOrderList()
  }, [])

  return (
    <>
      <BoxItem>
        <div className=' flex justify-center text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white'>
          สรุปรายการอาหาร
        </div>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 text-center text-gray-900 dark:text-white'
                >
                  สินค้า
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-right text-gray-900 dark:text-white'
                >
                  จำนวน
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-right text-gray-900 dark:text-white'
                >
                  ราคา
                </th>
              </tr>
            </thead>
            <tbody>
              {orderList?.map(el => (
                <tr
                  className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}
                  key={el.id}
                >
                  <td className='px-6 py-4 font-semibold'>
                    {el.name}
                  </td>
                  <td className='px-6 py-4 text-right'>
                    {el.amount}
                  </td>
                  <td className='px-6 py-4 text-right'>{el.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Button 
        onClick={()=>{}}
        title='ชำระเงิน' />
        <Button 
        onClick={()=>{navigate("/Customer")}}
        title='กลับไปหน้าสั่งอาหาร' />
      </BoxItem>
    </>
  )
}
