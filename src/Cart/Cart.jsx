import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import ActiveCart from './ActiveCart';

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className=" space-y-4 rounded-xl bg-white px-6 py-9">
      <p className="text-3xl font-bold text-orange-600">
        Your Cart ({cart.length}){' '}
      </p>
      {cart.length === 0 ? <EmptyCart /> : <ActiveCart cart={cart} />}
    </div>
  );
}
