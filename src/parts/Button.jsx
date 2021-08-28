import React from 'react';

export default function Button({ title }) {
  return (
    <div>
      <button
        className="text-gray-light mt-8 bg-transparent border border-solid  border-gray-light hover:bg-gray-light hover:text-violet-dark active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        {title}
      </button>
    </div>
  );
}
