import React, { useState } from "react";
import Button from "@/components/Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "@/public/logo.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  //useState for menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="shadow-md bg-transparent">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="p-0" href="/">
                <span className="sr-only">Home</span>
                <Image src={logo} alt="LSU logo" className="w-12 h-12" />
              </Link>{" "}
            </div>

            {/* Theme changer button */}
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Button />
              </div>
            </div>

            {/* Mobile Menu expansion Button */}
            <div className="md:hidden">
              <button
                className="mobile-menu-button transform hover:scale-105 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <Bars3Icon className="h-7 w-7" />
                ) : (
                  <XMarkIcon className="h-7 w-7" />
                )}
              </button>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <div className="md:block">
                <ul className="hidden md:flex md:items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="relative group text-gray-500 transition hover:text-yellow-500 dark:text-white dark:hover:text-yellow-300"
                      href="/about"
                    >
                      <span> About</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-yellow-500/75 dark:text-white dark:hover:text-yellow-300 group relative"
                      href="/meet"
                    >
                      <span>Meet the Team</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full" />
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-yellow-500/75 dark:text-white dark:hover:text-yellow-300 group relative"
                      href="/Join"
                    >
                      <span>Join Us</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full" />
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-yellow-500/75 dark:text-white dark:hover:text-yellow-300 group relative"
                      href="/blog"
                    >
                      <span> Our Blogs</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full" />
                    </Link>
                  </li>
                </ul>

                {/* Mobile Menu items */}
                <ul
                  className={`${
                    isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                  } absolute top-full text-left left-0 right-0 md:hidden transition-all duration-300 transform origin-top ease-in-out bg-white bg-opacity-90`}
                >
                  <li className="border-y-2 pl-10 py-2">
                    <Link href="/">Mentors</Link>
                  </li>
                  <li className="border-b-2 pl-10 py-2">
                    <Link href="/">Event</Link>
                  </li>
                  <li className="border-b-2 pl-10 py-2">
                    <Link href="/">Sponsers</Link>
                  </li>
                  <li className="border-b-2 pl-10 py-2">
                    <Link href="/team">Team</Link>
                  </li>
                  <li className="border-b-2 pl-10 py-2">
                    <Link href="/Contributors">Contributors</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
