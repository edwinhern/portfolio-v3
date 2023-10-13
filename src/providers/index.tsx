import { AppLayout } from '@/components/Layout';
import { ChildProp } from '@/types/common';

export const Providers: React.FC<ChildProp> = ({ children }) => {
  return (
    <>
      <AppLayout>{children}</AppLayout>
    </>
  );
};
