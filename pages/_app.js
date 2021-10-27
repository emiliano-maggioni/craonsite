import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../components/google-analytics/gtag'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return <Component {...pageProps} />
}