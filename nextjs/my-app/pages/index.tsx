import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <ul>
        <li>
          <Link href="/products">
            Products
          </Link>
        </li>
      </ul>
    </main>
  )
}
