import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Portfolio</title>
        <meta name="description" content="About me" />
      </Head>
      
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">About</h1>
          <p className="text-lg text-gray-600">Coming soon...</p>
        </main>
      </div>
    </>
  );
}
