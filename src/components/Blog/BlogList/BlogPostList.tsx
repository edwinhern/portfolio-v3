import { CardBlogPost } from '@/components/Blog/BlogList/CardBlogPost';
import { Article } from '@/types/api/medium-articles';

interface BlogPostsListProps {
  posts: Article[];
}

export const BlogPostsList: React.FC<BlogPostsListProps> = ({ posts }) => {
  return (
    <ul className='mt-10'>
      {posts.map((post, index) => (
        <CardBlogPost key={post.title} post={post} index={index} />
      ))}
    </ul>
  );
};
