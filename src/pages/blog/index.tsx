import { NextSeo } from 'next-seo';
import defaultSEOConfig from '@/utils/next-seo-config';
import { Article } from '@/types/api/medium-articles';
import Custom404 from '@/pages/404';
import { BlogList } from '@/components/Blog/BlogList';

interface HomeProps {
  articles: Article[];
}

export default function Blog({ articles }: HomeProps) {
  if (!articles || articles.length === 0) {
    console.error('No articles found.');
    return <Custom404 />;
  }

  return (
    <>
      <NextSeo
        {...defaultSEOConfig}
        title='Edwin H - Home'
        openGraph={{
          ...defaultSEOConfig.openGraph,
          title: 'Edwin H - Blog Page',
        }}
      />
      <BlogList articles={articles} />
    </>
  );
}

export async function getServerSideProps() {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

  try {
    const response = await fetch(`${baseUrl}/api/medium-articles`);

    if (!response.ok) {
      throw new Error('Failed to fetch Medium posts from API');
    }

    const articles: Article[] = await response.json();

    return { props: { articles } };
  } catch (error) {
    console.error((error as Error).message);
    return { props: { articles: null } };
  }
}
