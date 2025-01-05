//import type { Metadata } from 'next'
//import { Geist, Geist_Mono } from "next/font/google";
import Image from 'next/image'
import './globals.css'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src="/icons/auth-image.svg"
            alt="Auth image"
            width={500}
            height={500}
            className="rounded-l-xl object-contain"
          />
        </div>
      </div>
    </main>
  )
}
