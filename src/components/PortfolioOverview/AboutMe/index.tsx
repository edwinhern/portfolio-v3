import { CarouselComponent, CustomCard } from '@/components/common/Carousel';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { aboutMeData } from '@/data';
import { ChildProp } from '@/types/common';

import Image from 'next/image';

const DialogWrapper: React.FC<ChildProp> = ({ children }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const AboutMeSection = () => {
  return (
    <div className='hidden grid-cols-1 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4'>
      {aboutMeData.map((item) => (
        <DialogWrapper>
          <Card key={item.title}>
            <Image
              draggable={false}
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
        </DialogWrapper>
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
