import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/router';
import { blogData } from '@/data';

export const BlogSection = () => {
  const { contact, blogs } = blogData;
  const router = useRouter();

  const handleBlogClick = () => {
    router.push('/blog');
  };
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-7'>
      <Card className='col-span-full md:col-span-4'>
        <CardHeader>
          <CardTitle className='text-lg font-bold'>{contact.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-sm text-muted-foreground'>{contact.content}</div>
        </CardContent>
      </Card>

      <Card
        className='col-span-full md:col-span-3'
        onClick={handleBlogClick}
        role='button'
      >
        <CardHeader>
          <CardTitle className='text-lg font-bold'>{blogs.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-sm text-muted-foreground'>{blogs.content}</div>
        </CardContent>
      </Card>
    </div>
  );
};
