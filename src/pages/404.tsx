import { Button } from '@/components/ui/button';
import defaultSEOConfig from '@/utils/next-seo-config';
import { MoveLeft } from 'lucide-react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Custom404() {
  const router = useRouter();

  const [isBlogPath, setIsBlogPath] = useState(false);

  useEffect(() => {
    setIsBlogPath(router.asPath.includes('/blog'));
  }, [router.asPath]);

  const backURL = isBlogPath ? '/blog' : '/';

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
      <div className='flex h-screen flex-col items-center justify-center gap-4'>
        <h1>404 - Page Not Found 🤖</h1>
        <Link href={backURL}>
          <Button>
            <MoveLeft size={18} className='mr-2' />
            {isBlogPath ? 'Back to Blog' : 'Back to Home'}
          </Button>
        </Link>
      </div>
    </>
  );
}
