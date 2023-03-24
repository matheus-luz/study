import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemom & Next</title>
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
