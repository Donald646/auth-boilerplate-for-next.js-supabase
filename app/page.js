import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-3 p-24">
      <Link className="border-2 rounded p-4" href="/login">
        Login
      </Link>
      <Link className="border-2 rounded p-4" href="/signout">
        Signup
      </Link>
    </main>
  );
}
