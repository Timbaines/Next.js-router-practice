import React from "react";
import Link from 'next/link';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";


export default function page() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <Header/>
            <h1 className="flex flex-col items-center p-24 text-yellow-400">Articles Page</h1>
            <p className="flex flex-col items-center p-5 text-blue-300">
                <Link href='/article/1'>
                    Article 1
                </Link>
            </p>
            <p className="flex flex-col items-center p-5 text-blue-300">
                <Link href='/article/2'>
                    Article 2
                </Link>
            </p>
            <p className="flex flex-col items-center p-5 text-blue-300">
                <Link href='/article/3'>
                    Article 3
                </Link>
            </p>
            <Link href="/" className="flex flex-col items-center p-10 text-red-300">Back to Home</Link>
            <Footer/>
        </main>
    )
}