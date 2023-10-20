import { TwitterLogoIcon } from '@radix-ui/react-icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '../../../ui/button';

export const TwitterLink = ({ title, baseUrl, slug }: any) => {
  return (
    <>
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant='ghost'
                size={'icon'}
                className='inline-flex cursor-pointer p-2 transition'
                onClick={() => {
                  window.open(
                    `https://twitter.com/intent/tweet?text=${title}&url=${baseUrl}/blog/${slug}`,
                    '_blank',
                  );
                }}
              >
                <TwitterLogoIcon className='h-4 w-4 text-black dark:text-white' />
              </Button>
            </TooltipTrigger>
            <TooltipContent className='z-[2000]'>
              Share on Twitter
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
};
