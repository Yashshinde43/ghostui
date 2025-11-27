// import Footer from '@/components/landingpage/Footer'
import Header from '@/components/landingpage/Header'
import { Metadata } from 'next'
import React from 'react'
import Navbar from './landingpage/Navbar'
import Footer from './landingpage/Footer'
export const metadata: Metadata = {
    title: 'Home',
    description: 'Home page',
}


export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* <Header /> */}
            <Navbar />
            <main className='relative w-full pt-0 md:pt-0'>
                {children}
            </main>
            {/* <Footer /> */}
            <Footer />
        </>
    )
}