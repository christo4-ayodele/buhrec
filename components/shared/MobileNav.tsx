import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import NavItems from './NavItems';

const MobileNav = () => {
  return (
    <nav className="md:hidden ">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/assets/Icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className=" bg-white">
          <SheetTitle>
            {' '}
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={128}
              height={56}
            />
            <Separator className="border border-gray-300" />
          </SheetTitle>
          <SheetDescription className="pt-2">
            <NavItems />
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
