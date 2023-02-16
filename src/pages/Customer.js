import { useState, useEffect } from "react"
import axios from "../config/axios"
// import useAuth from "../hooks/useAuth"
import BoxItem from "../Layouts/BoxItem"
import Button from "../components/Button"
import Card from "../components/Card"
import Offcavas from "../components/Offcanvas"
import ListFoodItem from "../features/ListFoodItem"
import ModalForm from "../components/ModalForm"
import OrderPage from "./Order"
import { useNavigate } from "react-router-dom";

export default function CategoryPage() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  // const { logoutCustomer } = useAuth()
  const [category, setCategory] = useState([])
  const [showCategory, setShowCategory] = useState("")
  const [foodList, setFoodList] = useState([])

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get("/product/category")
        setCategory(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchCategory()
  }, [])

  useEffect(() => {
    const fetchFoodList = async () => {
      try {
        const res = await axios.get("/product/food/" + showCategory)
        setFoodList(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchFoodList()
  }, [showCategory])

  return (
    <>
      <BoxItem>
        <div className=' flex justify-end text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white'>
          รายการอาหาร
          <div className='w-32 ml-96 mb-1'>
            <Button
              onClick={() => setOpen(true)}
              title='สรุปรายการอาหาร'
            />
            <ModalForm
              open={open}
              title='สรุปรายการ'
              doClose={() => setOpen(false)}
            >
              <OrderPage />
            </ModalForm>
          </div>
        </div>
        <Offcavas fbutton='Button' title='เลือกรายการ'>
          <ListFoodItem
            foodList={foodList}
            showCategory={showCategory}
          />
        </Offcavas>
        <Card
          category={category}
          showCategory={showCategory}
          setShowCategory={setShowCategory}
        />
        {/* <Button title='Sign out' onClick={logoutCustomer} /> */}
        <Button title='Payment' onClick={()=>{navigate("/Payment")}} />
      </BoxItem>
    </>
  )
}
