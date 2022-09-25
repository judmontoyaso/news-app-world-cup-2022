import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Script
          id="Adsense-id"
          data-ad-client="ca-pub-4689214255850199"
          async="true"
          strategy="beforeInteractive"
          onError={(e) => {
            console.error("Script failed to load", e);
          }}
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
      </Head>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>{" "}
    </>
  );
}

export default MyApp;
