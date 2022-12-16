import { Html, Head, Main, NextScript } from 'next/document';

export default function Document({ pageProps }) {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM'
          crossorigin='anonymous'
          defer
        />
      </body>
    </Html>
  );
}
