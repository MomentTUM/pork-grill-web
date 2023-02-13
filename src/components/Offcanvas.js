export default function Offcavas(props) {
  const { children, title } = props
  return (
    <div className='flex space-x-2'>
      <div>
        <div
          className='offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full dark:bg-gray-900 invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-auto'
          tabIndex='-1'
          id='offcanvas'
          aria-labelledby='offcanvasExampleLabel'
        >
          <div className='offcanvas-header flex items-center justify-between p-4'>
            <div
              className='offcanvas-title text-2xl mb-0 leading-normal font-thin text-white'
              id='offcanvasExampleLabel'
            >
              {title}
            </div>
            <button
              type='button'
              className='btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black bg-slate-600 border-none rounded-3xl opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            ></button>
          </div>
          <div className='offcanvas-body flex-grow p-4 overflow-y-auto'>
            <div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
