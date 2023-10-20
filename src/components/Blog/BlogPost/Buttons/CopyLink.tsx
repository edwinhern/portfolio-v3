import { CheckIcon, CopyIcon } from 'lucide-react';
import { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '../../../ui/button';
import { useIsMounted } from '@/hooks/useIsMounted';

type CopyLinkProps = { link: string };
export const CopyLink: React.FC<CopyLinkProps> = ({ link }) => {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);
  const mounted = useIsMounted();

  const onCopy = () => {
    navigator.clipboard.writeText(link);
    setHasCheckIcon(true);

    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
    mounted && (
      <>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant='outline' size={'icon'} onClick={onCopy}>
                {hasCheckIcon ? (
                  <CheckIcon className='h-4 w-4' />
                ) : (
                  <CopyIcon className='h-4 w-4' />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent className='z-[2000] p-2 transition'>
              Copy link
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </>
    )
  );
};
