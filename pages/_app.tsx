import React from 'react';
import type { AppProps } from 'next/app';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { UserProvider, useFetchUser } from '@/utils/authContext';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = React.useRef(new QueryClient());

  const { user } = useFetchUser();

  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <UserProvider value={{ user }}>
          <Navbar />
          <Component {...pageProps} />
        </UserProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
