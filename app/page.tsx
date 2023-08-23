import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-page">
      <Link href="/about">Sobre mim</Link>
    </div>
  );
}
