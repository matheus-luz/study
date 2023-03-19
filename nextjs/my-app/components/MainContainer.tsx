import React from 'react'
import Footer from './Footer'
import NavBar from './Navbar'

import styles from '../styles/MainContainer.module.css'

export default function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        {children}
      </div>
      <Footer />
    </div>
  )
}
