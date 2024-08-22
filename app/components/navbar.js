"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import SearchModal from "./searchModal";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const pathname = usePathname();

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const linkClassName = (path) =>
    `text-black hover:bg-amber-200 hover:text-black rounded-md px-3 py-2 ${
      pathname === path ? "bg-amber-500" : ""
    }`;

  return (
    <nav className="sticky top-0 shadow-md bg-white z-50">
      <div className="mx-auto flex items-center justify-between">
        <div className="absolute top-[-30px] md:top-[-30px] left-60">
          <img src="/images/pizza-header.png" className="w-60 h-90" />
        </div>
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <img src="/images/pizza-logo.png" className="h-50 w-20 pt-45" />
          </div>
        </Link>

        <div className="md:flex items-center justify-center space-x-8">
          <div className="absolute sticky right-20 flex items-center lg:hidden md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              id="mobile-dropdown-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <ul className="hidden md:flex gap-[3vw] text-bold">
            <li>
              <Link href="/" className={linkClassName("/")}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="/products" className={linkClassName("/users")}>
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link href="/pages" className={linkClassName("/pages")}>
                PAGES
              </Link>
            </li>
            <li>
              <Link href="/blog" className={linkClassName("/blog")}>
                BLOG
              </Link>
            </li>
            <li>
              <Link href="/contact" className={linkClassName("/contact")}>
                CONTACT
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <FaSearch
              onClick={openModal}
              className="text-blue-500 cursor-pointer"
              size={20}
            />
            <Link href="/products/cart/">
              <FaShoppingCart
                className="text-blue-500 cursor-pointer"
                size={28}
              />
            </Link>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 w-full bg-white shadow-md"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium"
              onClick={handleMobileLinkClick}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block rounded-md px-3 py-2 text-base font-medium"
              onClick={handleMobileLinkClick}
            >
              Products
            </Link>
            <Link
              href="/pages"
              className="block rounded-md px-3 py-2 text-base font-medium"
              onClick={handleMobileLinkClick}
            >
              Pages
            </Link>
            <Link
              href="/blog"
              className="block rounded-md px-3 py-2 text-base font-medium"
              onClick={handleMobileLinkClick}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium"
              onClick={handleMobileLinkClick}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
      {isModalOpen && <SearchModal onClose={closeModal} />}
    </nav>
  );
};

export default Navbar;
