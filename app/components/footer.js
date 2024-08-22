"use client";

import React, { useState } from "react";
import SignUpModal from "../signUpModal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-[#FFFAED] h-80 w-auto">
      <section className="grid grid-cols-1 text-[#888888] cursor-pointer md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h1 className="text-black mt-4 font-bold">INFORMATION</h1>
          <ul className="space-y-8">
            {" "}
            {/* Added spacing between items */}
            <li>Home</li>
            <li>Blog</li>
            <li>About us</li>
            <li>Menu</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <h1 className="text-black mt-4 font-bold">TOP ITEMS</h1>
          <ul className="space-y-8">
            {" "}
            {/* Added spacing between items */}
            <li className="">Pepperoni</li>
            <li>Swiss Mushroom</li>
            <li>Barbeque Chicken</li>
            <li>Vegetarian</li>
            <li>Ham & Cheese</li>
          </ul>
        </div>
        <div>
          <h1 className="text-black mt-4 font-bold">OTHERS</h1>
          <ul className="space-y-8">
            {" "}
            {/* Added spacing between items */}
            <li>Checkout</li>
            <li>Cart</li>
            <li>Product</li>
            <li>Locations</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-black mt-4 font-bold">SOCIAL MEDIA</h1>
          <div className="mt-10 flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/facebook.png" alt="Facebook" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/pinterest.png" alt="Pinterest" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/twitter1.png" alt="Twitter" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/instagram.png" alt="Instagram" />
            </a>
          </div>
          <p className="my-8 text-lg md:text-xl">
            Sign up and get exclusive offers and coupon codes
          </p>
          <button
            onClick={openModal}
            className="cursor-pointer bg-[#FBB200] px-5 py-3 text-lg md:text-xl rounded-full flex font-medium text-white tracking-wider align-middle justify-center"
          >
            Sign Up
          </button>
        </div>
      </section>
      {isModalOpen && <SignUpModal onClose={closeModal} />}
    </div>
  );
}
