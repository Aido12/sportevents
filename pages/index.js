import Link from 'next/link';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="main-page">
        <div className="main-page-content">
          <h2>&#9917; Welcome to AFC Guide</h2>
          <p>A guide to AFC Champions League Fixtures</p>
          <Link href="/fixtures" className="main-page-content-link">
            Fixtures
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
