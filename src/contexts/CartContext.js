import React from "react"
import { createContext, useState } from "react"

export const CartContext = createContext()

export default function CartContextProvider({ children }) {

  // const initCart = {
  //   userId: "",
  //   dateOrder: "",
  //   cartsItem: [
  //     {
  //       foodId: "",
  //       name: "",
  //       detail: "",
  //       currentPrice: "",
  //       categoryId: "",
  //       amount: "",
  //     },
  //   ],
  // }
  const [cart, setCart] = useState({})

  const addCart = async () => {}

  return (
    <CartContext.Provider value={{cart,setCart,addCart}}>
      {children}
    </CartContext.Provider>
  )
}
