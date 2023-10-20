import { BlogContent } from '@/components/Blog/BlogPost/BlogContent';
import { Article } from '@/types/api/medium-articles';

interface BlogPostProps {
  article: Article;
}

export const BlogPost: React.FC<BlogPostProps> = ({ article }) => {
  return <BlogContent article={article} />;
};
