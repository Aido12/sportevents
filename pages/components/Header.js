import Link from 'next/link';

export default function Header() {
  return (
    <div className="header-main">
      <h1>ACL Guide</h1>
      <nav className="navbar">
        <Link href="/fixtures" className="navbar-content">
          Fixtures
        </Link>
        <Link href="/aboutUs" className="navbar-content">
          About
        </Link>
        <Link href="/" className="navbar-content">
          Home
        </Link>
      </nav>
    </div>
  );
}
