import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { blogData } from '@/data';

export const BlogSection = () => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-7'>
      {blogData.map((blog) => (
        <Card
          key={blog.title}
          className={`col-span-full ${
            blog.title === 'Contact Me' ? 'md:col-span-4' : 'md:col-span-3'
          }`}
        >
          <CardHeader>
            <CardTitle className='text-lg font-bold'>{blog.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-sm text-muted-foreground'>{blog.content}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
