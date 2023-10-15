import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

export const GridLayout = () => {
  return (
    <>
      <div className='space-y-4'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <Card>
            <Image
              src='https://source.unsplash.com/random/300x200?tech'
              alt='Random tech image from Unsplash'
              className='h-48 w-full rounded-t-lg object-cover'
              width={100}
              height={100}
            />
            <CardHeader className='p-4'>
              <CardTitle className='text-sm font-medium'>
                Modern Technology
              </CardTitle>
            </CardHeader>
            <CardContent className='p-4'>
              <div className='text-sm text-muted-foreground'>
                The future is now, with cutting-edge tech at your fingertips.
              </div>
            </CardContent>
          </Card>

          <Card>
            <Image
              src='https://source.unsplash.com/random/300x200?nature'
              alt='Random nature image from Unsplash'
              className='h-48 w-full rounded-t-lg object-cover'
              width={100}
              height={100}
            />
            <CardHeader className='p-4'>
              <CardTitle className='text-sm font-medium'>
                Tranquil Nature
              </CardTitle>
            </CardHeader>
            <CardContent className='p-4'>
              <div className='text-sm text-muted-foreground'>
                Escape the hustle and bustle with the serenity of nature.
              </div>
            </CardContent>
          </Card>

          <Card>
            <Image
              src='https://source.unsplash.com/random/300x200?architecture'
              alt='Random architecture image from Unsplash'
              className='h-48 w-full rounded-t-lg object-cover'
              width={100}
              height={100}
            />
            <CardHeader className='p-4'>
              <CardTitle className='text-sm font-medium'>
                Minimalist Designs
              </CardTitle>
            </CardHeader>
            <CardContent className='p-4'>
              <div className='text-sm text-muted-foreground'>
                Experience the elegance of simplicity in modern design.
              </div>
            </CardContent>
          </Card>

          <Card>
            <Image
              src='https://source.unsplash.com/random/300x200?lifestyle'
              alt='Random lifestyle image from Unsplash'
              className='h-48 w-full rounded-t-lg object-cover'
              width={100}
              height={100}
            />
            <CardHeader className='p-4'>
              <CardTitle className='text-sm font-medium'>
                Urban Lifestyle
              </CardTitle>
            </CardHeader>
            <CardContent className='p-4'>
              <div className='text-sm text-muted-foreground'>
                Immerse yourself in the rhythms of city life.
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7'>
          <Card className='col-span-full p-4 md:col-span-4'>
            <CardHeader>
              <CardTitle className='text-lg font-bold'>Overview</CardTitle>
            </CardHeader>
            <CardContent className='mt-2'>
              <div className='text-sm text-muted-foreground'>
                An in-depth look at global trends shaping our world.
              </div>
            </CardContent>
          </Card>
          <Card className='col-span-full p-4 md:col-span-3'>
            <CardHeader>
              <CardTitle className='text-lg font-bold'>Recent Sales</CardTitle>
              <CardDescription className='mt-2 text-sm'>
                You made 265 sales this month.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7'>
          <Card className='col-span-full p-4 md:col-span-2'>
            <CardHeader>
              <CardTitle className='text-lg font-bold'>Music Vibes</CardTitle>
            </CardHeader>
            <CardContent className='mt-2'>
              <div className='text-sm text-muted-foreground'>
                Groove to the beats that move your soul.
              </div>
            </CardContent>
          </Card>

          <Card className='col-span-full p-4 md:col-span-5'>
            <Image
              src='https://source.unsplash.com/random/500x300?landscape'
              alt='Random landscape image from Unsplash'
              className='h-64 w-full rounded-t-lg object-cover'
              width={100}
              height={100}
            />
            <CardHeader className='p-4'>
              <CardTitle className='text-lg font-bold'>
                Breathtaking Views
              </CardTitle>
            </CardHeader>
            <CardContent className='p-4'>
              <div className='text-sm text-muted-foreground'>
                Experience the majesty of nature&apos;s vast expanse.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
