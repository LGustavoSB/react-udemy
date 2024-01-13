import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/ui/header/page'
import Footer from '@/components/ui/footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jojos',
  description: 'Empresa de jogos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
