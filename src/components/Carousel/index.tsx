import { FC } from 'react';
import { ChildProp } from '@/types/common';
import Carousel from 'react-multi-carousel';
import { responsive } from '@/data';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import Image from 'next/image';

export const CarouselComponent: FC<ChildProp> = ({ children }) => {
  return (
    <div className='md:hidden'>
      <Carousel ssr responsive={responsive}>
        {children}
      </Carousel>
    </div>
  );
};

interface CustomCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const CustomCard: FC<CustomCardProps> = ({
  src,
  alt,
  title,
  description,
}) => (
  <Card>
    <Image
      src={src}
      alt={alt}
      className='h-48 w-full rounded-t-lg object-cover'
      width={420}
      height={200}
    />
    <CardHeader className='px-4'>
      <CardTitle className='text-sm font-medium'>{title}</CardTitle>
    </CardHeader>
    <CardContent className='px-4'>
      <div className='text-sm text-muted-foreground'>{description}</div>
    </CardContent>
  </Card>
);
