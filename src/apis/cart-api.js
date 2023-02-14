import axios from "../config/axios"

export const addFoodCart = input => axios.post("/cart/addCart", input)