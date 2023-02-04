import React from "react"

export default function ModalForm(props) {
  const { children, open, doClose } = props
  return (
    <div
      className={`modal fixed top-0 left-0 w-full h-full bg-[#00000090] z-10 ${
        open ? "scale-100" : "scale-0"
      }`}
      onClick={doClose}
    >
      <div
        className={`modal-content relative top-20
         rounded-lg w-4/5 max-w-sm py-3 mx-auto dark:bg-gray-800 transition-transform duration-1000 z-20 ${
           open ? "scale-100" : "scale-0"
         }`}
        onClick={e => e.stopPropagation()}
      >
        <span className='close absolute top-0 right-1 w-min text-3xl font-bold cursor-pointer text-rose-900'onClick={doClose}> &times;
        </span>
        <div>{children}</div>
      </div>
    </div>
  )
}
