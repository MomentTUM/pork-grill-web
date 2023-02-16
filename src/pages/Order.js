import Button from "../components/Button"
import * as cartApi from "../apis/cart-api"
import useCart from "../hooks/useCart"
import { toast } from "react-toastify"

export default function OrderPage() {
  const { cart,setCart } = useCart()

  const handleSubmitCart = async e => {
    try {
      e.preventDefault()
      await cartApi.addFoodCart(cart)
      toast.success("ส่งรายการอาหารสำเร็จ")
    } catch (err) {
      toast.error(err.message)
    } finally {
      setCart('')
    }
  }
  return (
    <>
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
            {cart.cartsItem?.map((el) => (
            <tr
              className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}
              key={el.id}
            >
              <td className='px-6 py-4 font-semibold'>
                {el.name}
              </td>
              <td className='px-6 py-4 text-right'>{el.amount}</td>
              <td className='px-6 py-4 text-right'>{el.currentPrice}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button onClick={handleSubmitCart} title='ยืนยันรายการ' />
    </>
  )
}
