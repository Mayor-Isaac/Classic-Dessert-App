import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../Components/Button';

import { formatCurrency } from '../Helper/formatCurrency';
import { addToCart } from '../Cart/cartSlice';

export default function MenuItem({ item }) {
  const dispatch = useDispatch();

  const { category, image, name, price } = item;

  function addItem() {
    const newItem = {
      name,
      price,
      image,
    };
    dispatch(addToCart(newItem));
  }

  return (
    <li className="py-3">
      <div className="relative h-60">
        <img
          className="h-full w-full rounded-2xl"
          src={image.mobile}
          alt={name}
        />
        <Button type="add" handleClick={addItem} />
      </div>
      <div className="mt-10">
        <p className="text-sm text-stone-400 ">{category}</p>
        <p className="text-base font-semibold text-black">{name}</p>
        <p className="font-extrabold text-orange-500">
          {formatCurrency(price)}
        </p>
      </div>
    </li>
  );
}
