import React from 'react';

export default function Button({ type, handleClick }) {
  if (type === 'delete')
    return (
      <button
        className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-400 text-base text-gray-400"
        onClick={handleClick}
      >
        &times;
      </button>
    );

  return (
    <button
      onClick={handleClick}
      className="absolute -bottom-5 left-[38%] flex items-center justify-center gap-2 rounded-full border border-stone-400 bg-yellow-50 px-6 py-2 text-black transition-all duration-300 hover:border-orange-400 hover:text-orange-500 "
    >
      <img src="./images/icon-add-to-cart.svg" alt="Add to cart icon" />
      <p className="font-semibold ">Add to Cart</p>
    </button>
  );
}
