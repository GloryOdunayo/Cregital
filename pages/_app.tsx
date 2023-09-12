import Layout from '../components/Layout';
import Cursor from '../components/cursorConfig/Cursor';
import MouseContextProvider from '../context/MouseContext';
// import '../styles/globals.scss'
import "../sass/app.scss";
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MouseContextProvider>
      <Layout>
        <Cursor />
        <Component {...pageProps} />
      </Layout>
    </MouseContextProvider>
  )

}

export default MyApp
