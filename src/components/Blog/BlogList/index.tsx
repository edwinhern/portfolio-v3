import { BlogTagFilter } from '@/components/Blog/BlogList/BlogTagFilter';
import { BlogPostsList } from '@/components/Blog/BlogList/BlogPostList';
import { Article } from '@/types/api/medium-articles';
import { useState } from 'react';

interface BlogListProps {
  articles: Article[];
}

export const BlogList: React.FC<BlogListProps> = ({ articles }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const uniqueBlogTags = Array.from(
    new Set(articles.flatMap((post) => post.categories)),
  );

  const isPostVisible = (post: Article) =>
    selectedTags.length === 0 ||
    post.categories.some((tag) => selectedTags.includes(tag));

  const handleTagToggle = (tag: string) => {
    setSelectedTags((currentTags) => {
      if (currentTags.includes(tag)) {
        return currentTags.filter((t) => t !== tag);
      } else {
        return [...currentTags, tag];
      }
    });
  };

  return (
    <>
      <BlogTagFilter
        tags={uniqueBlogTags}
        selectedTags={selectedTags}
        onTagToggle={handleTagToggle}
      />
      <BlogPostsList posts={articles.filter(isPostVisible)} />
    </>
  );
};
