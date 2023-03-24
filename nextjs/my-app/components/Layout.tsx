import Head from 'next/head';
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

interface LayoutProps {
  children: React.ReactNode;
}


export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="" />
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
