import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { TinderProvider } from '../context/TinderContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://aem2cpwbi6pd.usemoralis.com:2053/server'
      appId='qrVjJzqGWqTW2n8czxrfs2t1s2PQM9OYVhvgjjGU'
    >
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  )
}

export default MyApp
