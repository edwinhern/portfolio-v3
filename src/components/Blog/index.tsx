import { Article } from '@/types/api/medium-articles';
import { BlogLayout } from '../Layout/BlogLayout';
import styles from './Blog.module.css';

interface BlogContentProps {
  article: Article;
}

export const BlogContent = ({ article }: BlogContentProps) => {
  const { title, description } = article;

  return (
    <>
      <BlogLayout metadata={article}>
        <div className={styles.blogContent}>
          <h1>{title}</h1>
          <div
            className='space-y-4'
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </BlogLayout>
    </>
  );
};
