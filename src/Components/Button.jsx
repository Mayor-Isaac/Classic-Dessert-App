import React from 'react';

export default function Button({ type, handleClick, children }) {
  if (type === 'delete')
    return (
      <button
        className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-400 text-base text-gray-400"
        onClick={handleClick}
      >
        &times;
      </button>
    );

  if (type === 'round')
    return (
      <button onClick={handleClick}>
        <div className="flex h-4 w-4 items-center justify-center rounded-full border border-white hover:bg-white ">
          {children}
        </div>
      </button>
    );
  if (type === 'confirm')
    return (
      <button
        onClick={handleClick}
        className="w-full rounded-full bg-red-600 py-4 text-base text-white  transition-all duration-200 hover:bg-red-800"
      >
        {children}
      </button>
    );
  return (
    <button
      onClick={handleClick}
      className="absolute -bottom-5 left-[25%] flex w-[50%] items-center justify-center gap-2 rounded-full border border-stone-400 bg-yellow-50 px-6 py-2 text-black transition-all duration-300 hover:border-orange-400 hover:text-orange-500 lg:left-[10%] lg:w-[80%] "
    >
      <img src="./images/icon-add-to-cart.svg" alt="Add to cart icon" />
      <p className="font-semibold ">Add to Cart</p>
    </button>
  );
}
