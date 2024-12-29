//import type { Metadata } from 'next'
//import { Geist, Geist_Mono } from "next/font/google";
//import './globals.css'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main> {children}</main>
}
