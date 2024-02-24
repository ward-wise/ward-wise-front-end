import React from "react";
import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {
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
            <ul className="flex gap-x-20 mx-8 text-white">
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
