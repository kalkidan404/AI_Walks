import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">AI Learning</Link>

      <div>
        <Link href="/roadmap">Roadmap</Link>
        <Link href="/learn">Learn</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}