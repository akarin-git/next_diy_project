import '../styles/globals.scss'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
   return pageProps.layout ? (
   // レイアウトあり
  <Layout>
  <Component {...pageProps} /> 
  </Layout>
  ) : (
    // レイアウトなし
  <Component {...pageProps} />
  )
}

export default MyApp
