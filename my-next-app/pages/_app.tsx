// pages/_app.tsx
import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app'; // Import AppProps type from Next.js
import store from '../store'; // Assuming you have your Redux store configured

function MyApp({ Component, pageProps }: AppProps) { // Define types for Component and pageProps
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
