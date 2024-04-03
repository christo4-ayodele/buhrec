import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavItems from './NavItems';
import MobileNav from './MobileNav';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <header className="w-full border-b bg-white ">
      <div className="wrapper flex items-center justify-between">
        <Link href={'/'} className="w-36">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={128}
            height={56}
          />
        </Link>
        <nav className="md:flex-between hidden w-full max-w-xs text-gray-400">
          <NavItems />
        </nav>

        <div className="flex w-32 justify-end gap-3">
          <MobileNav />
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
