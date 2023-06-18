"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

const Nav = () => {
  const path = usePathname();

  return (
    <nav className="p-5 border border-red-400 flex justify-between">
      <Link href="/" className="font-bold">
        Logo
      </Link>
      <div className="space-x-3">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/add">New</Link>
      </div>
    </nav>
  );
};

export default Nav;
