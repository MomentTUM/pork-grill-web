import React from "react"

export default function Button(props) {
  const { title,onClick } = props
  return (
    <div 
    onClick={onClick}
    className='w-full inline-block px-6 py-2.5 text-center mt-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
      {title}
    </div>
  )
}
