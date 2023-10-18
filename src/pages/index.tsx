import { NextSeo } from 'next-seo';
import { PortfolioOverview } from '@/components/pages';
import defaultSEOConfig from '@/utils/next-seo-config';
import { Article, MediumProps } from '@/types/api/medium-articles';

interface HomeProps extends MediumProps {}

export default function Home({ articles }: HomeProps) {
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
      <PortfolioOverview articles={articles} />
    </>
  );
}

// export async function getServerSideProps() {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/medium-articles`,
//     );
//     if (!response.ok) {
//       throw new Error('Failed to fetch Medium posts from API');
//     }

//     const articles: Article[] = await response.json();

//     return {
//       props: { articles },
//     };
//   } catch (error) {
//     console.error((error as Error).message);

//     return {
//       props: { articles: [] },
//     };
//   }
// }
