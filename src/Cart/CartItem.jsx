import React from 'react';
import Button from '../Components/Button';
import { formatCurrency } from '../Helper/formatCurrency';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, increaseQuantity } from './cartSlice';

export default function CartItem({ item, type }) {
  //   const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  //   console.log(item);
  const { name, price, image, quantity, totalPrice } = item;

  function deleteSelectedItem() {
    dispatch(deleteItem(name));
  }

  return (
    <li className="grid grid-cols-[auto_1fr_auto] items-center gap-4  py-4">
      <div>
        {type !== 'order' ? (
          <img
            src={image.mobile}
            alt={name}
            className="h-12 w-12 rounded-lg ring-2 ring-orange-600"
          />
        ) : (
          <img src={image.mobile} alt={name} className="h-12 w-12 rounded-lg" />
        )}
      </div>
      <div>
        <p className="font-bold text-black">{name}</p>
        <p className="space-x-2 text-base">
          <span className="text-xl font-bold text-orange-600">{quantity}x</span>{' '}
          <span>@{formatCurrency(price)}</span>{' '}
          {type !== 'order' && (
            <span className="font-bold">{formatCurrency(totalPrice)}</span>
          )}
        </p>
      </div>
      {type === 'order' ? (
        <span className="font-bold">{formatCurrency(totalPrice)}</span>
      ) : (
        <Button type="delete" handleClick={deleteSelectedItem} />
      )}
      {quantity === 0 && deleteSelectedItem()}
    </li>
  );
}
