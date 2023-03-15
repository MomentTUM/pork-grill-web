import React from "react"

export default function BoxItem(props) {
  const { children, title, onClick } = props
  return (
    <div className='w-full h-full relative top-20'>
      <section
        onClick={onClick}
        className='m-auto items-center rounded-lg dark:border md:mt-0 sm:max-w-3xl xl:p-0 dark:bg-gray-800 dark:border-gray-700'
      >
        <div className='p-6 mb-5 space-y-4 md:space-y-6 sm:p-8'>
          {title}
          {children}
        </div>
      </section>
    </div>
  )
}
