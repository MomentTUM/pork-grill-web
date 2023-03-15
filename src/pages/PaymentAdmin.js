import React from 'react';
import axios from '../config/axios-customer';
import { toast } from "react-toastify";
import BoxItem from '../Layouts/BoxItem';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import * as PaymentApi from '../apis/payment-api'

export default function PaymentAdmin() {
  const user = useAuth();
  const [paymentCustomer, setPaymentCustomer] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/admin');
  };

  const handleClickSubmit = async e => {
    try {
      e.preventDefault();
      const formData = new FormData()
      formData.append("status", "COMPLETED")
      if (formData.error) {
        throw new Error("Payment fail")
      }
        await PaymentApi.updatePayment(paymentCustomer.payment[0].Payment.CustomerId);
        toast.success("success Payment,");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
    }
  };

  useEffect(() => {
    const fetchPaymentCustomer = async () => {
      try {
        const res = await axios.get('/payment/getPaymentCustomer');
        setPaymentCustomer(res.data);
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPaymentCustomer();
  }, []);

  const sumProduct = paymentCustomer?.payment?.[0]?.Orders?.[0]?.OrderItems.map( el => (el.price * el.amount))
  const filterSumProduct = sumProduct.filter(num => num !== 0)
  const sumTotal = filterSumProduct.reduce((partialSum, a) => partialSum + a, 0)
  const AllTotal = sumTotal
  return (
    <>
      <BoxItem>
        <div className='relative flex justify-center text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white'>
          สรุปรายการอาหาร
          <div className='absolute h-8 w-32 top-0 right-5'>
            <span className='text-rose-500'>
              โต๊ะที่: {paymentCustomer?.payment?.[0]?.Table?.numberTable}
            </span>
          </div>
        </div>
        <div className='absolute top-2 cursor-pointer'>
          <Button onClick={handleClick} title='ย้อนกลับ' size='h-8 w-32' />
        </div>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3 text-center text-gray-900 dark:text-white'>
                  สินค้า
                </th>
                <th scope='col' className='px-6 py-3 text-right text-gray-900 dark:text-white'>
                  จำนวน
                </th>
                <th scope='col' className='px-6 py-3 text-right text-gray-900 dark:text-white'>
                  ราคา
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}
              >
                <td className='px-6 py-4 font-semibold'>สรุปรายการอาหาร</td>
                <td className='relative px-6 py-4 text-right'>1</td>
                <td className='px-6 py-4 text-right'>{AllTotal}</td>
              </tr>
              <tr
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}
              >
                <td className='px-6 py-4 font-semibold'>ผู้ใหญ่</td>
                <td className='relative px-6 py-4 text-right'>
                  {paymentCustomer?.payment?.[0]?.adult}
                  <span className='text-gray-600 absolute w-10 -right-7 bottom-3 text-xs text-left'>
                    /299 -
                  </span>
                </td>
                <td className='px-6 py-4 text-right'>
                  {paymentCustomer?.payment?.[0]?.adult * 299}
                </td>
              </tr>
              <tr
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}
              >
                <td className='px-6 py-4 font-semibold'>เด็ก</td>
                <td className='relative px-6 py-4 text-right'>
                  {paymentCustomer?.payment?.[0]?.kid}
                  <span className='text-gray-600 absolute w-10 -right-7 bottom-3 text-xs text-left'>
                    /99 -
                  </span>
                </td>
                <td className='px-6 py-4 text-right'>
                  {paymentCustomer?.payment?.[0]?.kid * 99}
                </td>
              </tr>
              <tr
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}
              >
                <td className='px-6 py-4 font-semibold'>สรุปรายการอาหาร</td>
                <td className='relative px-6 py-4 text-right'></td>
                <td className='text-rose-400 px-6 py-4 text-right'>
                  {paymentCustomer?.payment?.[0]?.Payment?.totalPrice}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <span className='absolute bottom-1 text-rose-400 px-1 py-1 text-right'>
          สถานะ :
          <span className='absolute bottom-1 left-16 text-rose-500 text-sm bg-slate-600 px-1 rounded-sm py-1 text-right'>
            {paymentCustomer?.payment?.[0]?.Payment?.status}
          </span>
          <div className='absolute bottom-1 left-52 cursor-pointer'>
          <Button onClick={handleClickSubmit} title='ยืนยันชำระ' size='h-8 w-32'/>
        </div>
        </span>

        
      </BoxItem>
    </>
  );
}
