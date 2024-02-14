'use client';

import { headerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import React from 'react';

const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className="md:flex-between items-start flex flex-col w-full gap-5 md:flex-row">
      {headerLinks.map((link, index) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={index}
            className={` ${
              isActive && 'text-primary-500'
            } p-medium-16 whitespace-nowrap hover:text-primary2-500`}
          >
            {'routes' in link ? (
              <DropdownMenu>
                <DropdownMenuTrigger>{link.label}</DropdownMenuTrigger>
                <DropdownMenuContent className="">
                  <DropdownMenuLabel>SignUp/In as</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {link.routes.map((subLink, subIndex) => {
                    return (
                      <div key={subIndex}>
                        <Link href={subLink.route}>
                          <DropdownMenuItem className="hover:text-primary2-500">
                            {subLink.label}
                          </DropdownMenuItem>
                        </Link>
                      </div>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href={link.route}>{link.label}</Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
