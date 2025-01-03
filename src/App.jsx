import React from 'react';

import Header from './Components/Header';
import Cart from './Cart/Cart';
import Menu from './Menu/Menu';

export default function App() {
  return (
    <div className="flex max-w-[1400px] flex-col gap-10 px-6 py-8  md:mx-auto lg:flex-row ">
      <div>
        <Header />
        <Menu />
      </div>
      <Cart />
    </div>
  );
}
