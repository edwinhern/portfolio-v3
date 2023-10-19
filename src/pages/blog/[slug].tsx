import { NextSeo } from 'next-seo';
import { BlogContent } from '@/components/Blog';
import defaultSEOConfig from '@/utils/next-seo-config';
import { Article, MediumProps } from '@/types/api/medium-articles';
import { useRouter } from 'next/router';
import { findArticleBySlug } from '@/utils/blog';
import Custom404 from '../404';

interface HomeProps extends MediumProps {}

export default function Blog({ articles }: HomeProps) {
  const router = useRouter();
  const { slug } = router.query;
  const article = findArticleBySlug(slug as string, articles) as Article;

  if (!article) {
    console.error('No metadata found for this post');
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
      <BlogContent article={article} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/medium-articles`,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch Medium posts from API');
    }

    const articles: Article[] = await response.json();

    return {
      props: { articles },
    };
  } catch (error) {
    console.error((error as Error).message);

    return {
      props: { articles: [] },
    };
  }
}
