import React from "react"

export default function ModalForm(props) {
  const { children, open, doClose, title } = props
  return (
    <div
      className={`modal fixed top-0 left-0 w-full h-full bg-[#00000090] z-10 ${
        open ? "scale-100" : "scale-0"
      }`}
      onClick={doClose}
    >
      <div
        className={`modal-content relative top-20
         rounded-lg w-4/5 max-w-sm py-3 mx-auto dark:bg-gray-800 transition-transform duration-300 z-20 ${
           open ? "scale-100" : "scale-0"
         }`}
        onClick={e => e.stopPropagation()}
      >
        <div className='flex flex-col px-6 py-8 mx-auto lg:py-0'>
          <div className='flex flex-col items-center px-6 py-8 mx-auto lg:py-0'>
            <h1 className='text-3xl font-bold text-rose-700'>
              {title}
            </h1>
            {/* <div className="text-rose-900">{`กรุณากรอกแบบฟอร์มนี้ ${title}`}</div> */}
          </div>
          <hr className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700' />

          <button
            type='button'
            data-drawer-hide='drawer-navigation'
            aria-controls='drawer-navigation'
            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
            onMouseDown={doClose}
          >
            <svg
              aria-hidden='true'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}
