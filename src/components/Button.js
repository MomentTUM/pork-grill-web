import React from 'react';

export default function Button(props) {
  const { title, onClick, size } = props;
  return (
    <div
      onClick={onClick}
      className={`${
        size ? size : 'h-8'
      } inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-indigo-100 border border-[#ad4841] rounded-sm shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-[#ad4841] via-rose-700 to-rose-600`}
    >
      <span className='relative'>{title}</span>
    </div>
  );
}
