import Carousel from 'react-multi-carousel';
import { aboutMeData, blogData, responsive } from '@/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { MediumProps } from '@/types/api/medium-articles';

interface PortfolioOverviewProps extends MediumProps {}

export const PortfolioOverview = ({ articles }: PortfolioOverviewProps) => {
  console.log(articles);
  return (
    <>
      <div className='space-y-4'>
        <div className='md:hidden'>
          <Carousel ssr responsive={responsive}>
            {aboutMeData.map((card, idx) => (
              <Card key={idx}>
                <Image
                  src={card.src}
                  alt={card.alt}
                  className='h-48 w-full rounded-t-lg object-cover object-center'
                  width={420}
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
        {/* About Me and show a picture of the companies, and where I worked */}
        <div className='hidden grid-cols-1 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4'>
          {aboutMeData.map((item, index) => (
            <Card key={index}>
              <Image
                src={item.src}
                alt={item.alt}
                className='h-48 w-full rounded-t-lg object-cover object-center'
                width={420}
                height={200}
              />
              <CardHeader className='px-4'>
                <CardTitle className='text-sm font-medium'>
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className='px-4'>
                <div className='text-xs text-muted-foreground md:text-sm'>
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
              className={`col-span-full px-4 ${
                index === 0 ? 'md:col-span-4' : 'md:col-span-3'
              }`}
            >
              <CardHeader>
                <CardTitle className='text-lg font-bold'>
                  {blog.title}
                </CardTitle>
                {blog.description && (
                  <CardDescription className='mt-2 text-sm'>
                    {blog.description}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className='mt-2'>
                <div className='text-sm text-muted-foreground'>
                  {blog.content}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact and Location such as where I'm looking for jobs such as Remote and Dallas/Plano TX jobs */}
        <div className='grid grid-cols-1 gap-4 md:grid-cols-7'>
          <Card className='col-span-full p-4 md:col-span-2'>
            <Image
              src='/city/austin.png'
              alt='Random landscape image from Unsplash'
              className='h-64 w-full justify-center rounded-lg object-cover object-center md:h-40 lg:h-48'
              width={420}
              height={200}
            />
            <CardHeader>
              <CardTitle className='text-lg font-bold'>
                Location: Austin TX 🤠
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className='col-span-full space-x-4 p-4 md:col-span-5 md:flex'>
            <div className='w-full flex-col justify-center md:flex md:h-full'>
              <Image
                src='/projects/wildfire-tracker.png'
                alt='Random landscape image from Unsplash'
                className='h-48 w-full rounded-lg object-cover object-center md:h-56 lg:h-64'
                width={420}
                height={200}
              />
            </div>
            <div className='flex w-1/2 flex-col items-start'>
              <CardHeader className='p-4'>
                <CardTitle className='text-lg font-bold'>
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
