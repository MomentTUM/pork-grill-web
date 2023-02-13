import React from "react"

export default function BoxItem(props) {
  const { children, title, onClick } = props
  return (
    <div className='w-full h-full fixed top-0 left-0'>
      <section
        onClick={onClick}
        className='m-auto relative top-[10%] items-center rounded-lg dark:border md:mt-0 sm:max-w-3xl xl:p-0 dark:bg-gray-800 dark:border-gray-700'
      >
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          {title}
          {children}
        </div>
      </section>
    </div>
  )
}
