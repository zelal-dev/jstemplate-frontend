import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ToastProvider } from 'react-toast-notifications'
import capitalize from '../src/lib/capitalize'
import '../styles/globals.css'

function MyApp ( { Component, pageProps }: AppProps ) {
  const router = useRouter()
  let pageTitle: any = router.asPath.split( '/' )
  pageTitle = capitalize( pageTitle[pageTitle.length - 1] )
  // remove all - from the page title
  pageTitle = pageTitle.replace( /-/g, ' ' )
  pageTitle = capitalize( pageTitle )
  return (
    <ToastProvider>
      <Head>
        <title>{pageTitle} - JS Template</title>
      </Head>

      <Component {...pageProps} />
    </ToastProvider>
  )
}

export default MyApp
