import React from "react"
import Button from "../components/Button"
import { useState, useEffect } from "react"

export default function ListFoodItem(props) {
  const { foodList } = props
  // const [amount, setAmount] = useState(555)
  // const [amountList, setAmountList] = useState({1: {amount: 20, currentPrice: 2000}});
  const [amountList, setAmountList] = useState([])
  // useEffect(() => {
  //   setAmountList(foodList.map(el => ({1: {  ...el,amount: 20, currentPrice: 2000}})))
  // }, [foodList])
  useEffect(() => {
    setAmountList(foodList.map(el => ({ ...el, amount: 0 })))
  }, [foodList])

  // const tempAmountList = [...foodList]
  // foodList.forEach(el => {
  //   // console.log(tempAmountList)

  //   tempAmountList.push({id: el.id, amount: 0})
  //   // setAmountList(tempAmountList)
  // });
  // console.log(tempAmountList);

  return (
    <>
      <div className='w-32 mb-1'>
        <Button title='หยิบใส่ตะกร้า' />
      </div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                <span className='sr-only'>Image</span>
              </th>
              <th scope='col' className='px-6 py-3'>
                สินค้า
              </th>
              <th scope='col' className='px-6 py-3 text-center'>
                จำนวน
              </th>
              <th scope='col' className='px-6 py-3'>
                ราคา
              </th>
            </tr>
          </thead>
          <tbody>
            {foodList?.map((el, idx) => (
              <tr
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}
                key={el.id}
              >
                <td className='w-32 p-4'>
                  <img src={el.image} alt={el.name} />
                </td>
                <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  {el.name}
                  <div className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                    {el.detail}
                  </div>
                </td>
                <td className='px-6 py-4'>
                  <div className='flex items-center space-x-3'>
                    <button
                      onClick={() => {
                        setAmountList(prev => {
                          const cloned =[ ...prev]
                          if (cloned[idx].amount <= 0) {
                            return prev
                          }
                          cloned[idx].amount -= 1
                          return cloned
                        })
                      }}
                      className='inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                      type='button'
                    >
                    {/* <button
                      onClick={() => {
                        setAmountList(prev => {
                          // if (prev[el.id].amount >= 1) {
                          //   return prev
                          // }
                          if (prev[el.id]) {
                            return {
                              ...prev,
                              [el.id]: {
                                ...prev[el.id],
                                amount: prev[el.id].amount - 1,
                              },
                            }
                          } else {
                            return { ...prev, [el.id]: { amount: 1 } }
                          }
                        })
                      }}
                      className='inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                      type='button'
                    > */}
                      <span className='sr-only'>Quantity button</span>
                      <svg
                        className='w-4 h-4'
                        aria-hidden='true'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </button>
                    <div
                      className='bg-gray-50 w-14 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    >
                      {amountList[idx]?.amount}
                    </div>
                    <button
                    onClick={() => {
                      setAmountList(prev => {
                        const cloned =[ ...prev]
                        cloned[idx].amount += 1
                        return cloned
                      })
                    }}
                      className='inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                      type='button'
                    >
                      <span className='sr-only'>Quantity button</span>
                      <svg
                        className='w-4 h-4'
                        aria-hidden='true'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
                <td className='px-6 py-4 text-center font-semibold text-gray-900 dark:text-white'>
                  {el.currentPrice}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
