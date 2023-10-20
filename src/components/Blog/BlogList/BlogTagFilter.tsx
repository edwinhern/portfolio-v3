import { Badge } from '@/components/ui/badge';

interface BlogTagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

export const BlogTagFilter: React.FC<BlogTagFilterProps> = ({
  tags,
  selectedTags,
  onTagToggle,
}) => {
  return (
    <div className='flex animate-slideFromLeftAndFade flex-wrap gap-2'>
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag);
        return (
          <Badge
            key={tag}
            variant={isSelected ? 'secondary' : 'default'}
            onClick={() => onTagToggle(tag)}
          >
            {tag}
          </Badge>
        );
      })}
    </div>
  );
};
