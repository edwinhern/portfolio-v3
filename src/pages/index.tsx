import { NextSeo } from 'next-seo';
import { PortfolioOverview } from '@/components/PortfolioOverview';
import defaultSEOConfig from '@/utils/next-seo-config';

export default function Home() {
  return (
    <>
      <NextSeo
        {...defaultSEOConfig}
        title='Edwin H - Home'
        openGraph={{
          ...defaultSEOConfig.openGraph,
          title: 'Edwin H - Home Page',
        }}
      />
      <PortfolioOverview />
    </>
  );
}
