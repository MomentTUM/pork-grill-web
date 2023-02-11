import React from "react"

export default function CounterInput({
  inputNumber,
  setInputNumber,
}) {
  return (
    <div className='flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1'>
      <button
        data-action='decrement'
        className=' bg-gray-600 text-gray-300 hover:text-gray-700 hover:bg-gray-500 h-full w-20 rounded-l cursor-pointer outline-none'
        onClick={e => {
          e.preventDefault()
          if (inputNumber >= 1) {
            setInputNumber(inputNumber - 1)
          }
        }}
      >
        <span className='m-auto text-2xl font-thin'>−</span>
      </button>

      <input
        className='outline-none focus:outline-none text-center w-full bg-gray-400 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700'
        name='custom-input-number'
        value={inputNumber}
        onChange={e => setInputNumber(e.target.value)}
      ></input>
      <button
        data-action='increment'
        className='bg-gray-600 text-gray-300 hover:text-gray-700 hover:bg-gray-500 h-full w-20 rounded-r cursor-pointer'
        onClick={e => {
          e.preventDefault()
          setInputNumber(inputNumber + 1)
        }}
      >
        <span className='m-auto text-2xl font-thin'>+</span>
      </button>
    </div>
  )
}
