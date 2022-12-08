import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

// import Fixtures from './fixtures';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello World</h1>
      <Link href="/fixtures">Fixtures</Link>
    </div>
  );
}
