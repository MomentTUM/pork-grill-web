// import RegisterCustomer from "../features/auth/RegisterCustomer";
import useAuth from "../hooks/useAuth"
import BoxItem from "../Layouts/BoxItem"
import Button from "../components/Button"
import Card from "../components/Card";

export default function CategoryPage() {
  const { logoutCustomer } = useAuth()
  return (
    <>
      <BoxItem>
        <Card/>
        <Button title='Sign out' onClick={logoutCustomer} />
      </BoxItem>
    </>
  )
}
