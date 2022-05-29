import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastProvider } from "react-toast-notifications";
import capitalize from "../src/lib/capitalize";
import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  let pageTitle: any = router.asPath.split("/");
  pageTitle = capitalize(pageTitle[pageTitle.length - 1]);
  pageTitle = capitalize(pageTitle);
  return (
    <ToastProvider>
      <Head>
        <title>{pageTitle !== "" ? pageTitle : "Home"} - JS Template</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default MyApp;
