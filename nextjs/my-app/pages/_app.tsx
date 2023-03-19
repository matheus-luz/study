import type { AppProps } from 'next/app'
import React from 'react'
import '../styles/globals.css';

import MainContainer from '@/components/MainContainer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}
