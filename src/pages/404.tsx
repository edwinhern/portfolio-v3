import defaultSEOConfig from '@/utils/next-seo-config';
import { NextSeo } from 'next-seo';

export default function Custom404() {
  return (
    <>
      <NextSeo
        {...defaultSEOConfig}
        title='Edwin H - 404 Error'
        openGraph={{
          ...defaultSEOConfig.openGraph,
          title: 'Edwin H - 404 Error',
        }}
      />
      <div className='flex h-screen items-center justify-center'>
        <h1>404 - Page Not Found 🤖</h1>
      </div>
    </>
  );
}
