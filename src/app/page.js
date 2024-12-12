import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold">Welcome to Our App</h1>
        
        <div className="flex gap-4">
          <Link
            href="/signin"
            className="rounded-full bg-foreground text-background px-6 py-3 hover:bg-[#383838]"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="rounded-full border border-black/[.08] px-6 py-3 hover:bg-[#f2f2f2]"
          >
            Sign Up
          </Link>
        </div>
      </main>
    </div>
  );
}
