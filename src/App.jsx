import React from 'react';

import Header from './Components/Header';
import Cart from './Cart/Cart';
import Menu from './Menu/Menu';

export default function App() {
  return (
    <div className="px-6 py-8">
      <Header />
      <Menu />
      <Cart />
    </div>
  );
}
