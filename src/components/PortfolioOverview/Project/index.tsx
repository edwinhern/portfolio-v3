import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export const ProjectsSection = () => {
  return (
    <Card className='col-span-full flex space-x-4 p-4 md:col-span-5'>
      <div className='md:flex md:h-full md:w-full md:flex-col md:justify-center'>
        <Image
          src='/projects/wildfire-tracker.png'
          alt='Random landscape image from Unsplash'
          className='h-48 w-full rounded-lg object-cover md:h-56 lg:h-64'
          width={420}
          height={200}
        />
      </div>
      <div className='mt-1 md:flex md:w-1/2 md:flex-col'>
        <CardHeader className='p-4'>
          <CardTitle className='text-lg font-bold'>Recent Projects</CardTitle>
        </CardHeader>
        <CardContent className='p-4'>
          <div className='text-sm text-muted-foreground'>
            Experience the majesty of nature&apos;s vast expanse.
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
