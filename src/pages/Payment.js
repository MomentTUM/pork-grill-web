import BoxItem from "../Layouts/BoxItem"
import Button from "../components/Button"

export default function PaymentPage() {
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
              {/* {foodList?.map((el, idx) => ( */}
              <tr
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}
                // key={el.id}
              >
                <td className='px-6 py-4 font-semibold'>
                  {/* product */}
                  </td>
                <td className='px-6 py-4 text-right'>
                  {/* amount */}
                  </td>
                <td className='px-6 py-4 text-right'>
                  {/* price */}
                  </td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
        <Button title='อัพโหลดสลิปชำระเงิน' />
      </BoxItem>
    </>
  )
}
