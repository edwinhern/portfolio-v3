import type { AppProps } from 'next/app';
import { Providers } from '@/providers';

import '@/styles/globals.css';
import '@/styles/fonts.css';
import 'react-multi-carousel/lib/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
