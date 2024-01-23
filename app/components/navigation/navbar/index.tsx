import React from "react";
import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-slate-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/">
              <Logo />
            </Link>
            <ul className="flex gap-x-20 text-white">
              <li>
                <Link href="/find-my-ward">
                  <p>Find My Ward</p>
                </Link>
              </li>
              <li>
                <Link href="/ward-spending">
                  <p>View Ward Spending</p>
                </Link>
              </li>
              <li>
                <Link href="/maps">
                  <p>Maps</p>
                </Link>
              </li>
              <li>
                <Link href="/alderman-spending-menu">
                  <p>View Spending Menu</p>
                </Link>
              </li>
              <li>
                <Link href="/faqs">
                  <p>FAQs</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>About the Project</p>
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
