'use client';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <CacheProvider>
          <ChakraProvider>
            <Navbar />
            {children}
          </ChakraProvider>
        </CacheProvider>

      </body>
    </html>
  )
}
