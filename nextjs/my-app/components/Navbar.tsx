import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <div>
        <p>Logo</p>
        <h1>PokeNext</h1>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/about'>Sobre</Link></li>
        </ul>
      </div>
    </nav>
  )
}
