import CartItem from './CartItem';

export default function ActiveCart({ cart }) {
  return (
    <ul className=" space-y-4 rounded-xl bg-white px-6 py-9">
      {cart.map((item) => (
        <CartItem item={item} key={item.name} />
      ))}
    </ul>
  );
}
