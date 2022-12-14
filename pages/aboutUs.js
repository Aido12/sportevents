import Link from 'next/link';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="about-page">
        <div className="about-page-content">
          <h2>About Us</h2>
          <p>Info to come!</p>
          <Link href="/fixtures" className="main-page-content-link">
            Fixtures
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
