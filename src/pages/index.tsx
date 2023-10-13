import { buttonVariants } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex min-h-screen max-w-7xl flex-col items-center justify-center'>
      <h2 className='mb-8 text-4xl font-bold'>Welcome to My Portfolio</h2>
      <ul className='flex space-x-8 text-xl'>
        <Link
          className={buttonVariants({
            size: 'lg',
          })}
          href='/contact'
        >
          Contact <ArrowRight className='ml-2 h-5 w-5' />
        </Link>
      </ul>
      <div className='w-full max-w-2xl rounded-md p-8 shadow-md'>
        <h3 className='mb-4 text-2xl font-semibold'>About Me</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
    </div>
  );
}
