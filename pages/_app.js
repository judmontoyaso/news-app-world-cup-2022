import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Script from "next/script";
import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
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
      <ThemeProvider attribute="class" enableSystem={false}>
        <Navigation></Navigation>
        <Component {...pageProps} />
      </ThemeProvider>{" "}
    </>
  );
}

export default MyApp;
