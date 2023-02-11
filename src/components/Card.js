import React from "react"

export default function Card() {
  return (
    <div className="flex flex-row">
      <div className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
        <img
          className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
          src='https://res.cloudinary.com/dvcwwkqup/image/upload/v1676022139/beef_mjlv7k.jpg'
          alt=''
        />
        <div className='flex flex-col justify-between p-4 leading-normal'>
          <div className=' text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white'>
            Beef (วัว)
          </div>
          <div className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            text
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
        <img
          className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
          src='https://res.cloudinary.com/dvcwwkqup/image/upload/v1676022139/beef_mjlv7k.jpg'
          alt=''
        />
        <div className='flex flex-col justify-between p-4 leading-normal'>
          <div className=' text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white'>
            Beef (วัว)
          </div>
          <div className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            text
          </div>
        </div>
      </div>

      

    </div>
  )
}
