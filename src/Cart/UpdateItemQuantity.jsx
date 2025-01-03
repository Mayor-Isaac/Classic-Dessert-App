import React from 'react';
import Button from '../Components/Button';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from './cartSlice';

export default function UpdateItemQuantity({ name, currentQuantity }) {
  const dispatch = useDispatch();
  function increaseCurrQuantity() {
    dispatch(increaseQuantity(name));
  }
  function decreaseCurrQuantity() {
    dispatch(decreaseQuantity(name));
  }

  return (
    <div className="absolute -bottom-5 left-[25%] flex w-[50%] items-center justify-between gap-2 rounded-full bg-red-600 px-6 py-2 text-white">
      <Button type="round" handleClick={decreaseCurrQuantity}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 2"
          className="h-5 w-10 fill-current px-[2px] text-white hover:text-red-600"
        >
          <path d="M0 .375h10v1.25H0V.375Z" />
        </svg>
      </Button>
      <p className="font-semibold ">{currentQuantity}</p>
      <Button type="round" handleClick={increaseCurrQuantity}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 10"
          className="h-5 w-8 fill-current p-[1px] text-white
          hover:text-red-600
          "
        >
          <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
        </svg>
      </Button>
    </div>
  );
}
