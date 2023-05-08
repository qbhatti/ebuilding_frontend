import React from 'react';
import type { AppProps } from 'next/app';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = React.useRef(new QueryClient());
  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Navbar />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
