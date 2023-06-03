import Nav from '@/components/Nav/Nav'
import './globals.css'
import { Inter } from 'next/font/google'
import { Subnav } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className='font-sf bg-black'>
        
        <Nav/>
        <Subnav/>

        {children}
        
        
        </body>
    </html>
  )
}
