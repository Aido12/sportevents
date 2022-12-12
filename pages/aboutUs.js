import Link from 'next/link';
import { useState } from 'react';

const name = [
  {
    name: 'aidan',
    last: 'ryan',
  },
  {
    name: 'john',
    last: 'ryan',
  },
];

export default function Home() {
  const [newName, setNewName] = '';

  function handleValidation(e) {
    setNewName({ ...name, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/fixtures">Fixtures</Link>
      <Link href="/addEvent">addEvent</Link>
    </div>
  );
}
