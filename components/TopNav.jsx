"use client";

import Link from "next/link";

function TopNav() {
  return (
    <nav className="flex h-[3.5rem] flex-row items-center font-semibold shadow-lg">
      <Link href="/" className="pl-4 text-[1.2rem]">
        🗝️ Next Auth
      </Link>

      <div className="ml-auto space-x-4 pr-5">
        <Link href="/dashboard/admin">Admin</Link>
        <Link href="/dashboard/user">User</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </nav>
  );
}

export default TopNav;
