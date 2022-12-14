import Link from 'next/link';

export default function Header() {
  return (
    <div className="header-main">
      <h1>&#9917; AFC Guide</h1>
      <nav className="navbar">
        <Link href="/" className="navbar-content">
          Home
        </Link>
        <Link href="/fixtures" className="navbar-content">
          Fixtures
        </Link>
        <Link href="/aboutUs" className="navbar-content">
          About
        </Link>
      </nav>
    </div>
  );
}
