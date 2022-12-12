import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <div className="Navbar">
        <Link href="/fixtures">Fixtures</Link>
        <Link href="/aboutUs">about</Link>
        <Link href="/contact">contact</Link>
      </div>
    </div>
  );
}
