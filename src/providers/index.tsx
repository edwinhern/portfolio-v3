import { Analytics } from '@vercel/analytics/react';
import { AppLayout } from '@/components/Layout';
import { ChildProp } from '@/types/common';
import { ThemeProvider } from '@/providers/ThemeProvider';

export const Providers: React.FC<ChildProp> = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <AppLayout>
          {children}
          <Analytics />
        </AppLayout>
      </ThemeProvider>
    </>
  );
};
