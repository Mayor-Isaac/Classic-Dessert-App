import React from 'react';
import CartItem from '../Cart/CartItem';
import { formatCurrency } from '../Helper/formatCurrency';
import Button from '../Components/Button';
import { useDispatch } from 'react-redux';
import { clearCart } from '../Cart/cartSlice';

export default function Order({ cart, totalCartPrice }) {
  const dispatch = useDispatch();
  function handleClear() {
    dispatch(clearCart());
    document.body.style.overflow = 'scroll';
  }
  return (
    <div className="absolute inset-0 z-20 bg-orange-500/20 backdrop-blur-sm">
      <div className="mx-auto w-[85%] rounded-xl bg-white px-8 py-10 lg:my-auto lg:w-[45%]">
        <img src="./images/icon-order-confirmed.svg" alt="" />
        <p className="py-4 text-4xl font-black">Order Confirmed</p>
        <p className="text-sm font-thin text-orange-800">
          We hope you enjoy your food!
        </p>
        <div className="my-8 rounded-xl bg-orange-50 p-4">
          <ul>
            {cart.map((item) => (
              <CartItem item={item} key={item.name} type="order" />
            ))}
          </ul>

          <div className="flex items-center justify-between">
            <p className="text-sm">Order Total</p>
            <p className="text-3xl font-black text-black">
              {formatCurrency(totalCartPrice)}
            </p>
          </div>
        </div>
        <Button type="confirm" handleClick={handleClear}>
          Start New Order
        </Button>
      </div>
    </div>
  );
}
