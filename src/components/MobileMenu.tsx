
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import React from 'react';
import Brand from './Brand';
import Donate from './Donate';
import { Dialog, DialogPanel } from '@headlessui/react';

interface NavigationItem {
    name: string;
    href: string;
  }
  

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Initiatives', href: '/initiatives' },
    { name: 'About', href: '/about' },
    { name: 'News', href: '/news' },
  ];


const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean; setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => (
    <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
      <div className="fixed inset-0 z-50" />
      <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Brand />
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-sky-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6 text-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-sky-400 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6 text-center">
              <Donate colorStyleStandard={false} />
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );

export default MobileMenu