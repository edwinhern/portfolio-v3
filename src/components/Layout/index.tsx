import { MaxWidthWrapper } from '@/components/common/InterfaceElements/MaxWidthWrapper';
import { Navbar } from '@/components/Navigation/Navbar';
import { ChildProp } from '@/types/common';

export const AppLayout: React.FC<ChildProp> = ({ children }) => {
  return (
    <>
      <MaxWidthWrapper className='flex min-h-screen flex-col space-y-4 py-2.5 font-gotham antialiased'>
        <Navbar />
        {children}
      </MaxWidthWrapper>
    </>
  );
};
