import { CarouselComponent, CustomCard } from '@/components/common/Carousel';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { aboutMeData } from '@/data';
import Image from 'next/image';

export const AboutMeSection = () => {
  return (
    <div className='hidden grid-cols-1 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4'>
      {aboutMeData.map((item) => (
        <Card key={item.title}>
          <Image
            src={item.src}
            alt={item.alt}
            className='h-48 w-full rounded-t-lg object-cover'
            width={420}
            height={200}
          />
          <CardHeader className='px-4'>
            <CardTitle className='text-sm font-medium'>{item.title}</CardTitle>
          </CardHeader>
          <CardContent className='px-4'>
            <div className='text-sm text-muted-foreground'>
              {item.description}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export const MobileAboutMeSection = () => {
  return (
    <CarouselComponent>
      {aboutMeData.map((card) => (
        <CustomCard
          key={card.title}
          src={card.src}
          alt={card.alt}
          title={card.title}
          description={card.description}
        />
      ))}
    </CarouselComponent>
  );
};
