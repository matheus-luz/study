import React from 'react';
import Link from 'next/link';

import styles from '../styles/Navbar.module.css';


export default function NavBar() {
  return (
    <main className={styles.navbar}>
      <Link href="/products">Products</Link>
      <Link href="/todos">Todos</Link>
    </main>
  )
}
