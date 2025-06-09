import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Liv - Wandmalerei & Kunstwerke</title>
        <meta name="description" content="Individuelle Wandmalerei für private Haushalte und Geschäfte. Professionelle Kunstwerke von Liv - Ihre Wände werden zum Kunstwerk." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Liv - Wandmalerei & Kunstwerke" />
        <meta property="og:description" content="Individuelle Wandmalerei für private Haushalte und Geschäfte" />
        <meta property="og:type" content="website" />
        {/* Google Fonts für schöne Typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}