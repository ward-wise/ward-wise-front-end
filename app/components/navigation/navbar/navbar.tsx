'use client';
import React, { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="w-full h-20 bg-slate-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/" className="flex align-middle">
              <Logo />
              <div className="flex items-center">
                <p className="text-white text-2xl ml-1">Ward Wise</p>
              </div>
            </Link>
            <div className="lg:hidden cursor-pointer" onClick={toggleMobileMenu}>
              <MenuIcon/>
            </div>
            <ul className="hidden md:flex flex-wrap gap-x-20 mx-8 text-white">
              <li>
                <Link href="/find-my-ward">
                  <p>Find My Ward</p>
                </Link>
              </li>
              <li>
                <Link href="/ward-spending">
                  <p>Ward Spending</p>
                </Link>
              </li>
              <li>
                <Link href="/maps">
                  <p>Maps</p>
                </Link>
              </li>
              <li>
                <Link href="/alderman-spending-menu">
                  <p>Spending Menu</p>
                </Link>
              </li>
              <li>
                <Link href="/faqs">
                  <p>FAQs</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
function MenuIcon() {
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="h-6 w-6 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16" />
  </svg>;
}

