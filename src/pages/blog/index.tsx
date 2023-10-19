import { NextSeo } from 'next-seo';
import defaultSEOConfig from '@/utils/next-seo-config';
import { Article, MediumProps } from '@/types/api/medium-articles';
import { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { titleToSlug } from '@/utils/blog';

const CardBlogPost = ({ post, index }: { post: Article; index: number }) => {
  const delay = 80 * index;
  const postSlug = titleToSlug(post.title);
  return (
    <li key={post.title} className='mb-6'>
      <Link href={`/blog/${postSlug}`}>
        <div
          className='flex animate-slideFromLeftAndFade transition hover:opacity-70'
          style={{
            animationDelay: `${delay}ms`,
          }}
        >
          <div className='flex-1 pr-4'>
            <span className='paragraph'>{post.title}</span>
          </div>
          <time className='text-sm text-neutral-500 dark:text-neutral-300'>
            {new Date(post.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
            })}
          </time>
        </div>
      </Link>
    </li>
  );
};

interface HomeProps extends MediumProps {}

export default function Blog({ articles }: HomeProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const allBlogTags = articles.reduce((acc, post) => {
    return [...acc, ...post.categories];
  }, [] as string[]);

  const uniqueBlogTags = Array.from(new Set(allBlogTags));

  const filteredPosts = articles.filter((post) => {
    if (selectedTags.length === 0) {
      return true;
    }
    return post.categories.some((tag) => selectedTags.includes(tag));
  });

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
      <section>
        <div className='flex animate-slideFromLeftAndFade flex-wrap gap-2'>
          {uniqueBlogTags.map((tag) => {
            return (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? 'secondary' : 'default'}
                onClick={() => {
                  if (selectedTags.includes(tag)) {
                    setSelectedTags(selectedTags.filter((t) => t !== tag));
                  } else {
                    setSelectedTags([...selectedTags, tag]);
                  }
                }}
              >
                {tag}
              </Badge>
            );
          })}
        </div>
        <ul className='mt-10'>
          {filteredPosts.map((post, index) => {
            return <CardBlogPost key={post.title} post={post} index={index} />;
          })}
        </ul>
      </section>
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
