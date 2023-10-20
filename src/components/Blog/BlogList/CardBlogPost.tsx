import { Article } from '@/types/api/medium-articles';
import { titleToSlug } from '@/utils/blog';
import Link from 'next/link';

export const CardBlogPost = ({
  post,
  index,
}: {
  post: Article;
  index: number;
}) => {
  const delay = 80 * index;
  const postSlug = titleToSlug(post.title);
  return (
    <li key={post.title} className='mb-6'>
      <Link href={`/blog/${postSlug}`}>
        <div
          className='flex items-center justify-between transition hover:opacity-70'
          style={{ animationDelay: `${delay}ms` }}
        >
          <div className='flex-1 truncate pr-4'>
            <span className='block truncate text-lg font-medium'>
              {post.title}
            </span>
          </div>
          <time className='ml-4 text-sm text-neutral-500 dark:text-neutral-300'>
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
