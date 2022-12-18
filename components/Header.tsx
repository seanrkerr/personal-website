import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { NotEmpty } from "../common/NotEmpty";

const navigation = [
  { name: "Portfolio", href: "/portfolio", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Contact", href: "/contact", current: false },
  { name: "Blog", href: "/blog", current: false },
];

type HeaderProps = {
  name: string;
};

//const router = useRouter();

// TODO curry this function
// const renderNavigation = () => {
//   {
//     navigation.map((item) => (
//       <a
//         key={item.name}
//         href={item.href}
//         className={
//           router.pathname == item.href
//             ? "px-3 py-2 rounded-md text-sm font-medium mt-6 bg-gray-900 text-white"
//             : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mt-6"
//         }
//         aria-current={item.current ? "page" : undefined}
//       >
//         {item.name}
//       </a>
//     ));
//   }
// };

const Header: React.FC<HeaderProps> = function ({ name }) {
  const router = useRouter();
  return (
    <Disclosure as="nav" className="bg-gray-800 px-6">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex space-x-4">
                  <Link href="/">
                    <Image
                      className="mt-2"
                      src="/logo.ed3bbad2.png"
                      alt="Logo"
                      width={132}
                      height={76}
                    />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={
                          router.pathname == item.href
                            ? "px-3 py-2 rounded-md text-sm font-medium mt-6 bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mt-6"
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={
                    router.pathname == item.href
                      ? "block px-3 py-2 rounded-md text-sm font-medium mt-6 bg-gray-900 text-white"
                      : "block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mt-6"
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
