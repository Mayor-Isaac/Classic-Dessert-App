import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import ActiveCart from './ActiveCart';

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  // console.log(cart);
  const totalCartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  // console.log(totalCartQuantity);

  return (
    <div className=" h-auto space-y-4 rounded-xl  bg-white px-6 py-9">
      <p className="text-3xl font-bold text-orange-600">
        Your Cart ({totalCartQuantity}){' '}
      </p>
      {totalCartQuantity === 0 ? (
        <EmptyCart />
      ) : (
        <ActiveCart cart={cart} totalCartPrice={totalCartPrice} />
      )}
    </div>
  );
}
