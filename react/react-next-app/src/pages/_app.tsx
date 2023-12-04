import Header from '@/components/Header'
import '@/styles/globals.css'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="h-screen bg-rose-950 bg-gradient-to-b from-rose-950 to-black flex-wrap">
        <Component {...pageProps} />
      </div>
    </>
  )
}
