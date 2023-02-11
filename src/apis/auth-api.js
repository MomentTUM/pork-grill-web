import axios from '../config/axios'

export const register = input => axios.post("/auth/register/customer", input);
export const login = input => axios.post('/auth/login/admin', input)
export const loginCustomer = input => axios.post('/auth/login/customer', input)
export const getMe = () => axios.get('/auth/me')