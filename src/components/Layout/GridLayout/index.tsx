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
        {/* About Me and show a picture of the companies, and where I worked */}
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <Card>
            <Image
              src='https://source.unsplash.com/random/1080x920?tesla'
              alt='Companies I worked at'
              className='h-48 w-full rounded-t-lg object-cover'
              width={300}
              height={200}
            />
            <CardHeader className='p-4'>
              <CardTitle className='text-sm font-medium'>About Me</CardTitle>
            </CardHeader>
            <CardContent className='p-4'>
              <div className='text-sm text-muted-foreground'>
                Places that I worked with in my career.
              </div>
            </CardContent>
          </Card>

          <Card>
            <Image
              src='https://source.unsplash.com/random/1080x920?nature'
              alt='Random nature image from Unsplash'
              className='h-48 w-full rounded-t-lg object-cover'
              width={300}
              height={200}
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
              src='https://source.unsplash.com/random/1080x920?architecture'
              alt='Random architecture image from Unsplash'
              className='h-48 w-full rounded-t-lg object-cover'
              width={300}
              height={200}
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
              src='https://source.unsplash.com/random/1080x920?lifestyle'
              alt='Random lifestyle image from Unsplash'
              className='h-48 w-full rounded-t-lg object-cover'
              width={300}
              height={200}
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
        {/* Showcase my blog with a picture and a title, subtitle, and link */}
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-7'>
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

        {/* Contact and Location such as where I'm looking for jobs such as Remote and Dallas/Plano TX jobs */}
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
              src='https://source.unsplash.com/random/1080x920?landscape'
              alt='Random landscape image from Unsplash'
              className='h-36 w-full rounded-t-lg object-cover'
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

export const Grid2 = () => {
  return (
    <>
      <div className='grid h-screen auto-rows-[192px] grid-cols-3 gap-4'>
        <div
          className='col-span-3 row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 bg-cover bg-center p-4 dark:bg-neutral-900'
          style={{ backgroundImage: 'url(path_to_image_for_Edwin_H)' }}
        >
          Edwin H
        </div>
        {[...Array(6)].map((_, i) => {
          const images = [
            'url(path_to_image_for_Music_Vibes)',
            'url(https://source.unsplash.com/random/1080x920?lifestyle)',
            // Add more image URLs here
          ];
          return (
            <div
              key={i}
              className={`row-span-1 rounded-xl border-b border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${
                i === 2 || i === 5 ? 'col-span-2' : ''
              } bg-cover bg-center`}
              style={{ backgroundImage: images[i] || 'none' }}
            >
              {i === 0 ? 'Music Vibes' : ''}
            </div>
          );
        })}
      </div>
    </>
  );
};
