export default function LoginFormAdmin() {
  return (
    <form>
      <div className='flex flex-col px-6 py-8 mx-auto lg:py-0'>
        <div className='flex flex-col items-center px-6 py-8 mx-auto lg:py-0'>
          <h1 className='text-3xl font-bold text-rose-800'>
            Admin Login
          </h1>
          <p>Please fill in this form to system</p>
        </div>
        <hr className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700' />

        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Username :
          </label>
          <input
            type='text'
            name='username'
            id='username'
            className='bg-gray-50 border my-3 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='username'
            required=''
          />
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Password :
          </label>
          <input
            type='password'
            name='password'
            id='password'
            className='bg-gray-50 border my-3 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='password'
            required=''
          />
        </div>

        <hr className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700' />
        <button
          type='submit'
          className='w-full text-white bg-rose-600 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:dark:bg-rose-700 dark:focus:ring-rose-800'
        >
          Sign in
        </button>
      </div>
    </form>
  )
}
