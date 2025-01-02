import React from 'react';

export default function EmptyCart() {
  return (
    <>
      <div className="flex w-full items-center justify-center">
        <img
          alt="Empty cart"
          src="/images/illustration-empty-cart.svg"
          className="w-52"
        />
      </div>
      <p className="text-center text-orange-900">
        Your added items will appear here.
      </p>
    </>
  );
}
