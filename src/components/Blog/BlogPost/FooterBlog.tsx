import Image from 'next/image';

export const FooterBlog = () => {
  return (
    <div className='not-prose'>
      <div className='relative rounded-xl bg-neutral-100 dark:bg-neutral-900'>
        <div className='flex h-full flex-col items-center p-4 text-center sm:flex-col md:p-12'>
          <Image
            src='/me.png'
            width={400}
            height={400}
            alt='me'
            className='mb-4 mr-0 h-16 w-16 rounded-full sm:mr-6'
          />
          <div className='flex flex-col items-start text-sm'>
            <p className='mb-2'>
              I&apos;m Julien, a senior front-end developer. I&apos;m passionate
              about crafting digital projects. Let&apos;s connect on Twitter{' '}
              <a href='https://twitter.com/ibelick' className='font-semibold'>
                @ibelick
              </a>
            </p>
            <p className='mb-6'>
              You can also join my newsletter! I will send you a mail sometime
              (not too often) with my latest articles and projects.
            </p>
            <div className='mx-auto flex w-full items-center justify-center md:w-[80%]'>
              {/* <NewsletterForm /> */}
              <h2>Where newsletter form goes</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-12'>
        <div className='mx-auto max-w-md'></div>
      </div>
    </div>
  );
};
