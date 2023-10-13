import { Menu, ArrowRight, X } from 'lucide-react';
import { useToggle } from '@/utils';
import Link from 'next/link';

const MobileNav = () => {
  const { checked: isOpen, handleChange: toggleOpen } = useToggle();

  return (
    <div className='relative z-20'>
      {!isOpen ? (
        <Menu onClick={toggleOpen} className='h-6 w-6' />
      ) : (
        <X onClick={toggleOpen} className=' h-6 w-6' />
      )}

      {isOpen && (
        <div className='fixed inset-0 z-10 bg-background p-8'>
          <ul className='space-y-4'>
            <li>
              <Link
                className='flex items-center hover:underline'
                onClick={toggleOpen}
                href='/'
              >
                Get started
                <ArrowRight className='ml-2' />
              </Link>
            </li>
            <li>
              <Link className='hover:underline' onClick={toggleOpen} href='/'>
                Sign in
              </Link>
            </li>
            <li>
              <Link className='hover:underline' onClick={toggleOpen} href='/'>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
