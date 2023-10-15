import { MaxWidthWrapper } from '@/components/common/InterfaceElements/MaxWidthWrapper';
import { Navbar } from '@/components/Navigation/Navbar';
import { ChildProp } from '@/types/common';
import styles from './Layout.module.css';

export const AppLayout: React.FC<ChildProp> = ({ children }) => {
  return (
    <>
      <MaxWidthWrapper
        className={`${styles.appLayoutContainer} flex min-h-screen flex-col space-y-4 py-2.5 antialiased`}
      >
        <Navbar />
        {children}
      </MaxWidthWrapper>
    </>
  );
};
