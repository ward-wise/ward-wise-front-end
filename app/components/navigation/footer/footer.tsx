import React from "react";
import Link from "next/link";
import Logo from "../navbar/logo";
import { GitHubLogo } from "../../ui/SVGIcons";
import { Hyperlink } from "../../ui/Hyperlink";

const Navbar = () => {
  return (
    <>
      <footer className="w-full bg-slate-800 sticky-bottom">
        <div className="container mx-auto px-4 py-8 h-full">
          <div className="flex justify-between items-center h-full text-sm text-white mx-4">
            <div>
              <p>
                Ward Wise is a volunteer project under&nbsp;
                <Hyperlink href="https://chihacknight.org/">
                  Chi Hack Night
                </Hyperlink>
                , a civic tech group based in Chicago.
              </p>
            </div>
            <div>
              <ul>
                <li>
                  <Link href="https://github.com/ward-wise" className="fill-white">
                    <GitHubLogo />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer >
    </>
  );
};

export default Navbar;
