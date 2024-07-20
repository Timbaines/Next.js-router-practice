import React from "react";
import Link from 'next/link';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";


export default function page() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <Header/>
            <h1 className="flex flex-col items-center p-24 text-yellow-400">Blog Page</h1>
            <p className="flex flex-col items-center p-5 text-blue-300">
                <Link href='/blog/1'>
                    Blog 1
                </Link>
            </p>
            <p className="flex flex-col items-center p-5 text-blue-300">
                <Link href='/blog/2'>
                    Blog 2
                </Link>
            </p>
            <p className="flex flex-col items-center p-5 text-blue-300">
                <Link href='/blog/3'>
                    Blog 3
                </Link>
            </p>
            <Link href="/" className="flex flex-col items-center p-10 text-red-300">Back to Home</Link>
            <Footer/>
        </main>
    )
}