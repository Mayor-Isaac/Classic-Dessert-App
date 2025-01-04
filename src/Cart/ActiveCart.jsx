import { useDispatch, useSelector } from 'react-redux';
import Button from '../Components/Button';
import { formatCurrency } from '../Helper/formatCurrency';
import Order from '../Order/Order';
import CartItem from './CartItem';
import { showOrderedItems } from './cartSlice';

export default function ActiveCart({ cart, totalCartPrice }) {
  const showOrder = useSelector((state) => state.cart.showOrder);
  const dispatch = useDispatch();

  function handleConfirm() {
    dispatch(showOrderedItems());
  }

  return (
    <>
      <ul className=" space-y-4 divide-y divide-gray-200  px-6 py-6">
        {cart.map((item) => (
          <CartItem item={item} key={item.name} />
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <p className="text-sm">Order Total</p>
        <p className="text-3xl font-black text-black">
          {formatCurrency(totalCartPrice)}
        </p>
      </div>
      <div className="bg- my-10 flex items-center justify-center space-x-2 rounded-xl bg-orange-50 py-4">
        <img src="./images/icon-carbon-neutral.svg" alt="carbon-neutral" />
        <p>
          This is{' '}
          <span className="text-center font-semibold text-orange-900">
            carbon-neutral
          </span>{' '}
          delivery
        </p>
      </div>
      <Button type="confirm" handleClick={handleConfirm}>
        Confirm Order
      </Button>

      {showOrder && <Order cart={cart} totalCartPrice={totalCartPrice} />}
    </>
  );
}
