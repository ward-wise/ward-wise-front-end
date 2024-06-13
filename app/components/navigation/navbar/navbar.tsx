import Link from "next/link";
import Logo from "./logo";
import { MenuItem } from "../navigation";
import { MenuIcon } from "../../ui/SVGIcons";


export default function Navbar({ toggle, menuItems }: { toggle: () => void, menuItems: MenuItem[] }){
  return (
    <>
      <div className="w-full h-20 bg-slate-800 fixed top-0 z-40">
        <div className="lg:container mx-auto px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/" className="flex align-middle">
              <Logo />
              <div className="flex items-center">
                <p className="text-white text-2xl ml-1">Ward Wise</p>
              </div>
            </Link>
            <button className="md:hidden cursor-pointer" onClick={toggle}>
              <MenuIcon />
            </button>
            <ul className="hidden md:flex gap-x-8 lg:gap-x-20 mx-4 text-white">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>
                    <p>{item.label}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
