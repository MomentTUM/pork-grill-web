import axios from "../config/axios"

export const Createpayment = input => axios.post("/payment/createPayment", input)
export const getPayment = () => axios.get("/payment/getPaymentCustomer")
export const updatePayment = CustomerId => axios.patch('/payment/paymentSuccese/' + CustomerId)