import { MaxWidthWrapper } from '@/components/common/MaxWidthWrapper';
import { Navbar } from '@/components/common/Navigation/Navbar';
import { ChildProp } from '@/types/common';

export const AppLayout: React.FC<ChildProp> = ({ children }) => {
  return (
    <>
      <MaxWidthWrapper className='space-y-4 py-2.5 antialiased'>
        <Navbar />
        {children}
      </MaxWidthWrapper>
    </>
  );
};
