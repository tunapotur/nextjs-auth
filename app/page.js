import Link from "next/link";

export default function Home() {
  return (
    <main className="main">
      <div className="flex flex-col space-y-10">
        <h1 className="page-name">Home Page</h1>

        <div className="flex flex-col space-y-10 self-center text-center text-3xl font-semibold tracking-wide text-indigo-600 underline">
          <Link href="/dashboard/admin">Admin Dashboard</Link>
          <Link href="/dashboard/user">User Dashboard</Link>
        </div>
      </div>
    </main>
  );
}
