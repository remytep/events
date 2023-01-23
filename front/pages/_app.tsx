import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { NextUIProvider } from '@nextui-org/react';

import Layout from "../components/Layout/Layout";
import AuthProvider, { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
export default function App({ Component, pageProps }: AppProps) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (!user && !loading && pageProps.user) {
    router.push("/login");
  }
  if (user && !loading && pageProps.guest) {
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Eventify</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <NextUIProvider>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </NextUIProvider>
    </>
  );
}
