import React, { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Address:", address);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <h1 className="text-lg font-semibold mb-4 text-center">
          You will pay $12 on delivery
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name Surname
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <textarea
              id="address"
              rows="3"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#FBB200] text-white px-4 py-2 rounded-md shadow-sm hover:bg-amber-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150"
            >
              Order
            </button>
          </div>
        </form>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
