import './globals.css'
import { Inter } from 'next/font/google'
import HeaderMenu from './HeaderMenu'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Peter Malina - Personal Blog',
  description: 'Personal blog of Peter Malina',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark:bg-slate-800 bg-white">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-PL039FBCJB" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-PL039FBCJB');
        `}
      </Script>
      <Script
        src="https://js.sentry-cdn.com/f294ed98cde58bd52937aeb7b7a21c08.min.js"
        crossOrigin="anonymous"
      />
      
      <body className={inter.className}>
        <HeaderMenu></HeaderMenu>
        <div className='pt-12 md:pt-20 dark:text-white text-gray-600'>
          {children}
        </div>
      </body>
    </html>
  )
}
