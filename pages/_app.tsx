import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastProvider } from "react-toast-notifications";
import capitalize from "../src/lib/capitalize";
import { useRouter } from "next/router";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { SEO } from "../seo/seo.config";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  let pageTitle: any = router.asPath.split("/");
  pageTitle = capitalize(pageTitle[pageTitle.length - 1]);
  // remove all - from the page title
  pageTitle = pageTitle.replace(/-/g, " ");
  pageTitle = capitalize(pageTitle);
  return (
    <ToastProvider>
      <Head>
        <title>{pageTitle} - JS Template</title>
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default MyApp;
