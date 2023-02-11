const ACCESS_Admin_TOKEN = "ACCESS_TOKEN"

const ACCESS_CUSTOMER_TOKEN = "ACCESS_TOKEN"

export const getAdminAccessToken = () =>
  localStorage.getItem(ACCESS_Admin_TOKEN)
export const setAccessAdminToken = accessAdminToken =>
  localStorage.setItem(ACCESS_Admin_TOKEN, accessAdminToken)
export const removeAccessAdminToken = () =>
  localStorage.removeItem(ACCESS_Admin_TOKEN)

export const getCustomerAccessToken = () =>
  localStorage.getItem(ACCESS_CUSTOMER_TOKEN)
export const setAccessCustomerToken = accessCustomerToken =>
  localStorage.setItem(ACCESS_CUSTOMER_TOKEN, accessCustomerToken)
export const removeAccessCustomerToken = () =>
  localStorage.removeItem(ACCESS_CUSTOMER_TOKEN)
