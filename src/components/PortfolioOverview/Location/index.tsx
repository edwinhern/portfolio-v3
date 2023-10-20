import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export const LocationSection = () => {
  return (
    <Card className='col-span-full md:col-span-2'>
      <div className='p-4'>
        <Image
          draggable={false}
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
  );
};
