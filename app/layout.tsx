import './globals.css'
import { Inter } from 'next/font/google'
import HeaderMenu from './HeaderMenu'
import Script from 'next/script'

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
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-PL039FBCJB" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-PL039FBCJB');
        `}
      </Script>

      <body className={inter.className}>
        <HeaderMenu></HeaderMenu>
        <div className='pt-12 md:pt-20'>
          {children}
        </div>
      </body>
    </html>
  )
}
