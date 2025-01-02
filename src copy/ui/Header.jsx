import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../Features/order/SearchOrder";
import UserName from "../Features/user/UserName";

export default function Header() {
  return (
    <header className="bg-yellow-500 uppercase px-4 py-3  border-b border-stone-200 sm:px-6 flex items-center justify-between">
      <Link to="/" className="tracking-widest" > Fast React Pizza Co.</Link>
      <SearchOrder />
      <UserName/>
    </header>
  );
}
