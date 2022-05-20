import React from 'react';
import "../styles/globals.css";
import { AppProps } from "next/app";

import Layout from '../components/Layout';

function NGOWebApp({ Component, pageProps }: AppProps) {
  return <Layout><Component {...pageProps} /></Layout>;
}

export default NGOWebApp;
