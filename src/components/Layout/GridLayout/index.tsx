import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const GridLayout = () => {
  const responsive = {
    mobile: {
      breakpoint: { max: 1000, min: 0 },
      items: 1,
    },
  };

  const cardContent = [
    {
      src: 'https://source.unsplash.com/random/1080x920?tesla',
      alt: 'Companies I worked at',
      title: 'About Me',
      description: 'Places that I worked with in my career.',
    },
    {
      src: 'https://source.unsplash.com/random/1080x920?nature',
      alt: 'Random nature image from Unsplash',
      title: 'Tranquil Nature',
      description: 'Escape the hustle and bustle with the serenity of nature.',
    },
    {
      src: 'https://source.unsplash.com/random/1080x920?architecture',
      alt: 'Random architecture image from Unsplash',
      title: 'Minimalist Designs',
      description: 'Experience the elegance of simplicity in modern design.',
    },
    {
      src: 'https://source.unsplash.com/random/1080x920?lifestyle',
      alt: 'Random lifestyle image from Unsplash',
      title: 'Urban Lifestyle',
      description: 'Immerse yourself in the rhythms of city life.',
    },
  ];

  return (
    <>
      <div className='p- md:hidden'>
        <div className='lg:hidden'>
          <Carousel infinite={true} responsive={responsive}>
            {cardContent.map((card, idx) => (
              <Card key={idx}>
                <Image
                  src={card.src}
                  alt={card.alt}
                  className='h-48 w-full rounded-t-lg object-cover object-center'
                  width={300}
                  height={200}
                />
                <CardHeader className='p-4'>
                  <CardTitle className='text-sm font-medium'>
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className='p-4'>
                  <div className='text-sm text-muted-foreground'>
                    {card.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        </div>
      </div>

      <div className='space-y-4'>
        {/* About Me and show a picture of the companies, and where I worked */}
        <div className='hidden grid-cols-1 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4'>
          <Card>
            <Image
              src='https://source.unsplash.com/random/1080x920?tesla'
              alt='Companies I worked at'
              className='h-48 w-full rounded-t-lg object-cover object-center'
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
              className='h-48 w-full rounded-t-lg object-cover object-center'
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
              className='h-48 w-full rounded-t-lg object-cover object-center'
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
              className='h-48 w-full rounded-t-lg object-cover object-center'
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
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-7'>
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
        <div className='grid grid-cols-1 gap-4 md:grid-cols-7'>
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
              src='https://source.unsplash.com/random/1080x920?nature'
              alt='Random landscape image from Unsplash'
              className='h-36 w-full rounded-t-lg object-cover '
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
