import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";


export default function page({params}: {
    params:{postid: string}
}) {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <Header/>
            <h1 className="text-blue-700">Blog Page with the id: <span className="text-yellow-400">
                 {params.postid}</span>
            </h1>
            <Link href="/blog" className="flex flex-col items-center p-10 text-red-300">Back to Blog Page</Link>
            <Link href="/" className="flex flex-col items-center p-10 text-red-300">Back to Home</Link>
            <Footer/>
        </main>
    )
}