import React from 'react';

import Header from './Components/Header';
import Cart from './Cart/Cart';
import Menu from './Menu/Menu';

export default function App() {
  return (
    <div className="grid max-w-[1400px] flex-col gap-10   px-6 py-8 md:h-[100vh] md:grid-cols-[1fr_35%]  ">
      <div>
        <Header />
        <Menu />
      </div>
      <div>
        <Cart />
      </div>
    </div>
  );
}
