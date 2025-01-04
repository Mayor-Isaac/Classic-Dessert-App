import { useDispatch, useSelector } from 'react-redux';

import Button from '../Components/Button';

import { formatCurrency } from '../Helper/formatCurrency';
import {
  addToCart,
  getCurrentQuantityByName,
  increaseQuantity,
} from '../Cart/cartSlice';
import UpdateItemQuantity from '../Cart/UpdateItemQuantity';

export default function MenuItem({ item }) {
  const dispatch = useDispatch();

  const { category, image, name, price } = item;

  const currentQuantity = useSelector(getCurrentQuantityByName(name));

  const isInCart = currentQuantity > 0;

  function addItem() {
    const newItem = {
      name,
      price,
      image,
      quantity: 1,
      totalPrice: price * 1,
    };
    dispatch(addToCart(newItem));
  }

  return (
    <li className=" py-3">
      <div className="relative h-60 ">
        {isInCart ? (
          <img
            className="h-full w-full rounded-2xl border-[3px] border-red-600"
            src={image.mobile}
            alt={name}
          />
        ) : (
          <img
            className="h-full w-full rounded-2xl"
            src={image.mobile}
            alt={name}
          />
        )}
        {!isInCart ? (
          <Button type="add" handleClick={addItem} />
        ) : (
          <UpdateItemQuantity name={name} currentQuantity={currentQuantity} />
        )}
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
