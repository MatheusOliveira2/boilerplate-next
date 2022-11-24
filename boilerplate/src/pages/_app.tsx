import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boiler Plate</title>
        <meta
          name="description"
          content="A simple project to work with NextJS"
        />
      </Head>
      <GlobalStyles></GlobalStyles>
      <Component {...pageProps} />
    </>
  );
}
