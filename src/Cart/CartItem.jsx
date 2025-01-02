import React from 'react';
import Button from '../Components/Button';
import { formatCurrency } from '../Helper/formatCurrency';

export default function CartItem({ item }) {
  // console.log(item);
  const { name, price, image } = item;
  console.log(image);

  return (
    <li className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
      <div>
        <img
          src={image.mobile}
          alt={name}
          className="h-12 w-12 rounded-lg ring-2 ring-orange-600"
        />
      </div>
      <div>
        <p className="font-bold text-black">{name}</p>
        <p className="space-x-2 text-base">
          <span className="text-xl font-bold text-orange-600">1x</span>{' '}
          <span>@{formatCurrency(price)}</span>{' '}
          <span className="font-bold">{formatCurrency(price)}</span>
        </p>
      </div>
      <Button type="delete" />
    </li>
  );
}
