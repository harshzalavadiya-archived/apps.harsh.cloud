import '../styles/globals.css'

import Nav from '../components/nav'

import type { AppProps } from 'next/app'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <div className="mx-auto flex max-w-3xl items-center justify-between p-4">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
