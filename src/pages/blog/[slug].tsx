import { NextSeo } from 'next-seo';

import { Article, MediumProps } from '@/types/api/medium-articles';
import { BlogContent } from '@/components/Blog/BlogPost/BlogContent';
import defaultSEOConfig from '@/utils/next-seo-config';
import { findArticleBySlug } from '@/utils/blog';
import Custom404 from '../404';

interface HomeProps extends MediumProps {}

export default function Blog({ article }: HomeProps) {
  if (!article) {
    console.error('No metadata found for this post');
    return <Custom404 />;
  }

  return (
    <>
      <NextSeo
        {...defaultSEOConfig}
        title='Edwin H - Blog Page'
        openGraph={{
          ...defaultSEOConfig.openGraph,
          title: 'Edwin H - Blog Page',
        }}
      />
      <BlogContent article={article} />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

  try {
    const response = await fetch(`${baseUrl}/api/medium-articles`);

    if (!response.ok) {
      throw new Error('Failed to fetch Medium posts from API');
    }

    const articles: Article[] = await response.json();
    const article = findArticleBySlug(context.params.slug, articles);

    return { props: { article } };
  } catch (error) {
    console.error((error as Error).message);
    return { props: { article: null } };
  }
}
