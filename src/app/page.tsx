import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <Header />
        <h1 className="flex flex-col items-center p-24 text-yellow-400">Home Page</h1>
        <div>
            <Link href="blog" className="text-blue-500 p-5">Blog</Link>
            <Link href="articles" className="text-blue-500 p-5">Articles</Link>
        </div>
        <Footer/>
    </main>
  );
}
