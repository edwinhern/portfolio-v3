import { MaxWidthWrapper } from '@/components/common/InterfaceElements/MaxWidthWrapper';
import { AlignJustify } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className='sticky inset-x-0 top-0 z-30 h-16 w-full rounded border-b backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <span className='font-semibold'>Edwin H</span>
          </div>

          <div className='flex items-center space-x-4'>
            <AlignJustify />
          </div>
        </div>
      </MaxWidthWrapper>

      {/* SidePanel Usage */}
    </nav>
  );
};
