"use client";

import Image from "next/image";
import logo from "../../public/logo-removebg-preview.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Popover } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.user);
  const router = useRouter();

  const AuthButtons = () => (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
      <a href="/" className="text-sm font-semibold leading-6">
        Log out <span aria-hidden="true">&rarr;</span>
      </a>
      <button
        type="button"
        onClick={() => router.push("/event")}
        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:shadow focus:shadow-[#c722c7] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Explore Events
      </button>
    </div>
  );

  const GuestButtons = () => (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
      <a href="/auth" className="text-sm font-semibold leading-6">
        Log in <span aria-hidden="true">&rarr;</span>
      </a>
      <button
        type="button"
        onClick={() => router.push("/auth")}
        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:shadow focus:shadow-[#c722c7] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Get Started
      </button>
    </div>
  );

  return (
    <header className=" dark:bg-gray-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">My Events</span>
            <Image className="h-16 mb-0 mr-3 w-28" src={logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link className="text-sm font-semibold leading-6" href="/">
            Home
          </Link>
          <Link className="text-sm font-semibold leading-6" href="/about">
            About
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isAuthenticated ? <AuthButtons /> : <GuestButtons />}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">My Events</span>
              <Image className="h-16 mb-0 mr-3 w-28" src={logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-[#272e3d]">
              <Link
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-[#545863]"
                href="/"
              >
                Home
              </Link>
              <Link
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-[#545863]"
                href="/about"
              >
                About
              </Link>
            </div>
            <div className="py-6">
              {isAuthenticated ? (
                <div className="flex flex-1 space-x-4 items-center">
                  <a href="/" className="text-sm font-semibold leading-6">
                    Log out <span aria-hidden="true">&rarr;</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => router.push("/event")}
                    className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:shadow focus:shadow-[#c722c7] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Explore Events
                  </button>
                </div>
              ) : (
                <div className="flex flex-1 space-x-4 items-center">
                  <a href="/auth" className="text-sm font-semibold leading-6">
                    Log in <span aria-hidden="true">&rarr;</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => router.push("/auth")}
                    className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:shadow focus:shadow-[#c722c7] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Get Started
                  </button>
                </div>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default NavBar;
