"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

function TopNav() {
  const { data, status } = useSession();

  return (
    <nav className="flex h-[3.5rem] flex-row items-center font-semibold shadow-lg">
      <Link href="/" className="pl-4 text-[1.2rem]">
        🗝️ Next Auth
      </Link>

      <div className="ml-auto space-x-4 pr-5">
        {status === "authenticated" ? (
          <div className="flex flex-row items-center space-x-6">
            <p className="text-sm font-normal">
              {data?.user?.name} ({data?.user?.role})
            </p>
            <button onClick={() => signOut({ callbackUrl: "/" })}>
              Logout
            </button>
          </div>
        ) : status === "loading" ? (
          "Loading..."
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default TopNav;
