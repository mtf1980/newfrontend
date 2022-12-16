import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          rel='icon'
          type='image/ico'
          href='/images/iconified/favicon.ico'
        />
        <link rel='shortcut icon' type='image/ico' href='/images/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/images/iconified/apple-touch-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/images/iconified/apple-touch-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/images/iconified/apple-touch-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/images/iconified/apple-touch-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/images/iconified/apple-touch-icon-120x120.png'
        />

        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/images/iconified/apple-touch-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/images/iconified/apple-touch-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/images/iconified/apple-touch-icon-180x180.png'
        />

        <title>
          {pageProps.pageTitle
            ? `${pageProps.pageTitle}`
            : `Data Care Solutions`}
        </title>
      </Head>
      {/* <Page pathname={router.asPath} pageProps={pageProps}> */}
      <Component {...pageProps} />
      {/* </Page> */}
    </>
  );
}

export default MyApp;
