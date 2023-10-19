import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  Link,
} from '@radix-ui/react-navigation-menu';
import { AlignJustify } from 'lucide-react';
import { menuData } from '@/data';
import { cn } from '@/utils';

export function Menu() {
  const { header, items } = menuData;
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='flex items-center'>
            <AlignJustify size={18} />
          </NavigationMenuTrigger>
          <NavigationMenuContent className='absolute right-0 top-full overflow-hidden overflow-y-auto rounded-md bg-background text-foreground shadow-lg'>
            <ul className='grid w-72 gap-3 p-6 sm:w-96 lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <NavigationMenuLink asChild className='hidden sm:flex'>
                  <Link
                    className='flex h-full w-full select-none flex-col justify-end rounded-md  bg-primary bg-gradient-to-b from-muted/10 to-muted p-6 no-underline outline-none focus:shadow-md'
                    href='/'
                  >
                    <div className='mb-2 mt-4 text-lg font-medium'>
                      {header.title}
                    </div>
                    <p className='text-sm leading-tight text-muted-foreground'>
                      {header.description}
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {items.map((item) => (
                <ListItem key={item.href} href={item.href} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
