import React from "react"

export default function Card({
  category,
  showCategory,
  setShowCategory,
}) {
  return (
    <div
      onChange={e => setShowCategory(e.target.value)}
      defaultValue={setShowCategory}
      className='flex flex-wrap justify-between scroll-auto h-96 overflow-y-auto'
    >
      {category.map(el => (
        <div
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvas'
          aria-controls='offcanvas'
          key={el.id}
          onMouseDown={()=> setShowCategory(el.id)}
          className='flex flex-col w-80 h-fit mb-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
        >
          <img
            className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
            src={el.image}
            alt=''
          />
          <div className='flex flex-col w-80 justify-between  leading-normal'>
            <div className=' text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white'>
              {el.name}
            </div>
            <div className='mb-3 pl-2 font-normal text-gray-700 dark:text-gray-400'>
              {el.detail}
            </div>
            <div className='mb-3 pl-2 font-normal text-gray-700 dark:text-gray-400'>
              {el.currentPrice}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
