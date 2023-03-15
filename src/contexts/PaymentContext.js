import React from 'react';
import { createContext, useEffect, useState } from "react"
import * as paymentApi from '../apis/payment-api';

export const PaymentContext = createContext();

export default function PaymentcontextProvider({ children }) {
  const [Payment, setPayment] = useState();
  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const res = await paymentApi.getPayment();
        setPayment(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    return fetchPayment;
  }, []);

  return <PaymentContext.Provider value={{Payment}}>{children}</PaymentContext.Provider>;
}
