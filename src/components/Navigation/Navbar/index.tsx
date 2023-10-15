import Link from 'next/link';
import ThemeToggleButton from '@/components/common/ThemeToggleButton';
import { MaxWidthWrapper } from '@/components/common/InterfaceElements/MaxWidthWrapper';
import React from 'react';
import { Menu } from '../NavigationMenu';

export const Navbar = () => {
  return (
    <nav className='sticky inset-x-0 top-0 z-30 h-14 w-full border-b backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between'>
          <Link className='text-lg font-semibold hover:underline' href='/'>
            Edwin H
          </Link>

          <div className='flex items-center  space-x-4'>
            <ThemeToggleButton />
            <Menu />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
