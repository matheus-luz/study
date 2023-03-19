import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Principal</title>
        <meta name='keyworkds' content="Roupas, Calçados, Boné"></meta>
        <meta
          name='description'
          content="Encontre as melhores roupas e calçados para você"
        ></meta>
      </Head>
      <div>
        <h1>Hello world</h1>
      </div>
    </>
  )
}
