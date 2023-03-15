import React from 'react';
import {useRef, useState, useEffect } from 'react';
import { toast } from "react-toastify";
import * as PaymentApi from '../apis/payment-api'
import Button from '../components/Button';
import coverImage from '../assets/cover-upload-image.png';
import usePayment from '../hooks/usePayment'
import useLoading from "../hooks/useLoading";

export default function PaymentCustomerForm(AllTotal) {
  const inputEl = useRef()
  const { startLoading, stopLoading } = useLoading();
  const [slipImage, setSlipImage] = useState(null)
  
  const handleSubmitPaymentTranfer = async e => {
    try {
      e.preventDefault();
      const formData = new FormData()
        formData.append("paymentType","TRANSFER")
        formData.append("totalPrice", AllTotal.AllTotal)
        formData.append("status", "PENDING")
        formData.append("slipImage", slipImage)
      if (formData.error) {
        throw new Error("Payment fail")
      }
        startLoading();
        await PaymentApi.Createpayment(formData);
        toast.success("success Payment, please wait to admin confirm Slip... ");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <form>
      <div className='d-flex justify-content-between align-items-center'>
        <h5 className='mb-0 text-gray-400'>เลือกไฟล์</h5>
        <input type='file'
        ref={inputEl}
        className='d-none text-gray-400' 
        onChange={e => {
          if (e.target.files[0]) {
            setSlipImage(e.target.files[0])
          }
        }}
        />
        <div className='flex justify-end gap-1'>
          <Button
            onClick={handleSubmitPaymentTranfer}
            type='submit'
            title='ส่งสลิป'
            size='h-4 w-24'
            className='btn btn-link text-decoration-none hover-bg-gray-100'
          />
          <Button
            type='reset'
            title='แก้ไข'
            size='h-4 w-20'
            className='btn btn-link text-decoration-none hover-bg-gray-100'
          />
        </div>
      </div>
      <div className=' h-[400px] mt-3'>
        <img src={slipImage ? slipImage : coverImage} alt='slip' className='w-full h-full object-cover' />
      </div>
    </form>
  );
}
