import { useState, useEffect } from 'react';
// import { toast } from "react-toastify";
import axios from '../config/axios-customer';
import useAuth from '../hooks/useAuth';
// import * as PaymentApi from '../apis/payment-api'
import ModalForm from '../components/ModalForm';
import BoxItem from '../Layouts/BoxItem';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import PaymentCustomerForm from '../Layouts/PaymentCustomerForm';



export default function PaymentPage() {
  const user = useAuth();
  const [open, setOpen] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderList = async () => {
      try {
        const res = await axios.get('/cart/getOrder');
        setOrderList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrderList();
  }, []);
  const sumProduct = orderList?.map( el => (el.price * el.amount))
  const filterSumProduct = sumProduct.filter(num => num !== 0)
  const sumTotal = filterSumProduct.reduce((partialSum, a) => partialSum + a, 0)
  const sumPerson = user?.authenticatedCustomer?.adult * 299 + user?.authenticatedCustomer?.kid * 99
  const AllTotal = sumTotal + sumPerson
  
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
              {orderList?.map((el, idx) => (
                <tr
                  className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}
                  key={idx}
                >
                  <td className='px-6 py-4 font-semibold'>{el?.name}</td>
                  <td className='relative px-6 py-4 text-right'>{el?.amount}
                  <span className='text-gray-600 absolute w-10 -right-7 bottom-3 text-xs text-left'>/{el?.price} -</span>
                  </td>
                  <td className='px-6 py-4 text-right'>{el?.price * el?.amount}</td>
                </tr>
              ))}
              <tr
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}
              >
                <td className='px-6 py-4 font-semibold'>ผู้ใหญ่</td>
                <td className='relative px-6 py-4 text-right'>{user?.authenticatedCustomer?.adult}
                <span className='text-gray-600 absolute w-10 -right-7 bottom-3 text-xs text-left'>/299 -</span>
                </td>
                <td className='px-6 py-4 text-right'>{user?.authenticatedCustomer?.adult * 299}</td>
              </tr>
              <tr
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}
              >
                <td className='px-6 py-4 font-semibold'>เด็ก</td>
                <td className='relative px-6 py-4 text-right'>{user?.authenticatedCustomer?.kid}
                <span className='text-gray-600 absolute w-10 -right-7 bottom-3 text-xs text-left'>/99 -</span>
                </td>
                <td className='px-6 py-4 text-right'>{user?.authenticatedCustomer?.kid * 99}</td>
              </tr>
              <td />
              <td className='px-6 py-4 text-right'>ราคารวม :</td>
              <td className=' right-1/3 text-rose-400 font-semibold text-right pr-5'>{AllTotal}</td>
            </tbody>
          </table>
        </div>
        <div className='relative flex pt-5'>
          <Button
            onClick={() => {
              navigate('/Customer');
            }}
            title='กลับไปหน้าสั่งอาหาร'
          />
          <div className='absolute right-0 -bottom-2'>
            <div className='text-gray-400 text-sm text-center'>ตัวเลือกการชำระเงิน</div>
            <div className='flex gap-2 mt-3'>
              <Button onClick={() => setOpen(true)} title='โอนเงิน' />
              <Button onClick={() => {}} title='ชำระเงินสด' />
            </div>

            <ModalForm open={open} doClose={() => setOpen(false)} title='กรุณาอัพโหลดสลิป'>
              <PaymentCustomerForm AllTotal={AllTotal}/>
            </ModalForm>
          </div>
        </div>
      </BoxItem>
    </>
  );
}
