import React from "react";
import Link from "next/link";
import Logo from "../navbar/logo";

const Navbar = () => {
  return (
    <>
      <footer className="w-full bg-slate-800 sticky-bottom">
        <div className="container mx-auto px-4 py-8 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="flex-col text-white">
              <li>
                <p>
                  Ward Wise is a collaborative project built by volunteer
                  members of&nbsp;&nbsp;
                  <Link href="https://chihacknight.org/">
                    Chicago Hack Night
                  </Link>
                  , a civic tech group based in Chicago.
                </p>
              </li>
              <li>
                <Link href="https://github.com/ward-wise">
                  <p>Github</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Navbar;
