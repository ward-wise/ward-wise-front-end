"use client";
import { useState } from "react";
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";

export type MenuItem = {
  label: string;
  path: string;
}

const menuItems: MenuItem[] = [
  {
    label: "Find My Ward",
    path: "/find-my-ward",
  },
  {
    label: "Ward Spending",
    path: "/ward-spending",
  },
  {
    label: "Spending Map",
    path: "/spending-map",
  },
  {
    label: "Infrastructure Menu",
    path: "/infrastructure-menu",
  },
  {
    label: "FAQs",
    path: "/faqs",
  },
  {
    label: "About",
    path: "/about",
  },
];

export default function Navigation(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} menuItems={menuItems} />
      <Navbar toggle={toggle} menuItems={menuItems} />
    </>
  );
};
