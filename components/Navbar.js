"use client";
import Image from "next/image";
import Link from "next/link";
import react from "react";

const Navbar = () => {
  const navButtonStyling = "text-md hover:opacity-50 p-1 rounded-lg font-bold";
  return (
    <div className="navbar w-full md:w-4/5 rounded-b-lg flex items-center justify-between border-2 p-4 text-black sticky bg-white shadow-lg top-0 z-50">
      <div className="flex flex-row md:w-1/3 ">
        <p className="text-2xl font-bold">Worksheet Wiz</p>
      </div>

      <div className="flex w-full h-full justify-end">
        <div className="flex w-4/12 justify-between items-center">
          <Link className={navButtonStyling} href="">
            About
          </Link>
          <Link className={navButtonStyling} href="">
            Pricing
          </Link>
          <Link className={navButtonStyling} href="">
            Mission
          </Link>
        </div>
      </div>

      <div className="w-fit md:w-1/3 flex flex-row items-center justify-center">
        <Link
          href="/login"
          className="p-2 rounded-md text-xl font-bold text-white bg-blue-500"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
