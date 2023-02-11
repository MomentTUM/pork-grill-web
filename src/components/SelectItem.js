import React from "react"

export default function SelectItem({
  table,
  selectTable,
  setselectTable,
}) {
  return (
    <>
      <div className='flex justify-center'>
        <div className='relative'>
          <select
            onChange={e => setselectTable(e.target.value)}
            className='px-6 py-2 dark:bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:dark:bg-gray- hover:shadow-lg focus:dark:bg-gray- focus:shadow-lg focus:outline-none focus:ring-0 active:dark:bg-gray-600 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap'
            aria-label='Default select example'
            defaultValue={selectTable}
          >
            <option>select Table</option>
            {table.map(el => (
              <option key={el.id} value={el.id}>Table {el.numberTable}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}
