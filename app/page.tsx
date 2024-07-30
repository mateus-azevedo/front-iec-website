import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IEC • Página Inicial",
};

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
