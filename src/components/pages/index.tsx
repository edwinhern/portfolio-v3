import { aboutMeData, blogData } from '@/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { MediumProps } from '@/types/api/medium-articles';
import { CarouselComponent, CustomCard } from '../Carousel';

interface PortfolioOverviewProps extends MediumProps {}

export const PortfolioOverview = ({ articles }: PortfolioOverviewProps) => {
  console.log(articles);
  return (
    <>
      <div className='space-y-4'>
        <CarouselComponent>
          {aboutMeData.map((card, idx) => (
            <CustomCard
              key={idx}
              src={card.src}
              alt={card.alt}
              title={card.title}
              description={card.description}
            />
          ))}
        </CarouselComponent>
        {/* About Me and show a picture of the companies, and where I worked */}
        <div className='hidden grid-cols-1 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4'>
          {aboutMeData.map((item, index) => (
            <Card key={index}>
              <Image
                src={item.src}
                alt={item.alt}
                className='h-48 w-full rounded-t-lg object-cover'
                width={420}
                height={200}
              />
              <CardHeader className='px-4'>
                <CardTitle className='text-sm font-medium'>
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className='px-4'>
                <div className='text-sm text-muted-foreground'>
                  {item.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Showcase my blog with a picture and a title, subtitle, and link */}
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-7'>
          {blogData.map((blog, index) => (
            <Card
              key={index}
              className={`col-span-full ${
                index === 0 ? 'md:col-span-4' : 'md:col-span-3'
              }`}
            >
              <CardHeader className='px-4'>
                <CardTitle className='text-lg font-bold'>
                  {blog.title}
                </CardTitle>
              </CardHeader>
              <CardContent className='px-4'>
                <div className='text-sm text-muted-foreground'>
                  {blog.content}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact and Location such as where I'm looking for jobs such as Remote and Dallas/Plano TX jobs */}
        <div className='grid grid-cols-1 gap-4 md:grid-cols-7'>
          <Card className='col-span-full md:col-span-2'>
            <div className='p-4'>
              <Image
                src='/city/austin-sketch.png'
                alt='Austin Texas - yeehaw!'
                className='h-40 w-full justify-center rounded-t-lg object-cover md:rounded-lg lg:h-48'
                width={420}
                height={200}
              />
            </div>
            <CardHeader className='-mb-2 px-4'>
              <CardTitle className='text-lg font-bold'>Location</CardTitle>
            </CardHeader>
            <CardContent className='-mb-2 px-4'>
              <div className='text-sm text-muted-foreground'>Austin TX 🤠</div>
            </CardContent>
          </Card>

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
                <CardTitle className='text-sm font-bold md:text-lg'>
                  Recent Projects
                </CardTitle>
              </CardHeader>
              <CardContent className='p-4'>
                <div className='text-sm text-muted-foreground'>
                  Experience the majesty of nature&apos;s vast expanse.
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};
