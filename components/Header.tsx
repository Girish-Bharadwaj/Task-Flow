"use client";
import Avatar from "react-avatar";

function Header() {
  return (
    <header className="flex items-center mb-2 bg-[#183D3D] justify-between px-4 py-2">
      <h1 className="text-2xl font-bold p-2">Task Flow</h1>
      <Avatar name="Girish Bharadwaj" size="50" color="#5C8374" round />
    </header>
  );
}

export default Header;
