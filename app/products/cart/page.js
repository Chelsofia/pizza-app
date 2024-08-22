"use client";

import { useContext } from "react";
import { cartContext } from "../../../cartContext";
import { useState } from "react";
import Modal from "../cart/cartModal";

export default function Details() {
  const { data: cartData, setData } = useContext(cartContext);

  const handleDelete = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };

  // Compute totals
  const subtotal = (cartData || []).reduce(
    (total, item) => total + item.prices[0],
    0
  );
  const discount = 0; 
  const total = subtotal - discount;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="flex flex-col md:flex-row items-start mx-auto p-4 my-10 gap-4">
      {/* Cart Items Section */}
      <div className="md:w-2/3 w-full mb-4 md:mb-0">
        <div className="overflow-x-auto px-2">
          {cartData && cartData.length > 0 ? (
            cartData.map((data, index) => (
              <div key={data.id || index} className="mb-6">
                <table className="w-full table-auto border-collapse border-gray-300">
                  <thead>
                    <tr className="hidden md:table-row">
                      <th className="border-b text-left p-2 sm:p-3">Product</th>
                      <th className="border-b text-left p-2 sm:p-3">Name</th>
                      <th className="border-b text-left p-2 sm:p-3">Extras</th>
                      <th className="border-b text-left p-2 sm:p-3">Price</th>
                      <th className="border-b text-left p-2 sm:p-3">
                        Quantity
                      </th>
                      <th className="border-b text-left p-2 sm:p-3">Total</th>
                      <th className="border-b text-left p-2 sm:p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-row">
                      <td className="border-b p-2 sm:p-3">
                        <img
                          src={data.img}
                          alt="Product Image"
                          className="w-16 h-16 md:w-20 md:h-20 object-cover"
                        />
                      </td>
                      <td className="border-b p-2 sm:p-3">{data.title}</td>
                      <td className="border-b p-2 sm:p-3">
                        {data.extras ? data.extras.join(", ") : "None"}
                      </td>
                      <td className="border-b p-2 sm:p-3">${data.prices[0]}</td>
                      <td className="border-b p-2 sm:p-3">1</td>{" "}
                      {/* Example static quantity */}
                      <td className="border-b p-2 sm:p-3">
                        ${data.prices[0]}
                      </td>{" "}
                      {/* Example static total */}
                      <td className="border-b p-2 sm:p-3">
                        <button
                          onClick={() => handleDelete(index)}
                          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No items in cart</p>
          )}
        </div>
      </div>

      {/* Cart Total Section */}
      <div className="md:w-1/3 w-full bg-[#333333] text-white px-4 py-6 md:px-6 md:py-8">
        <h1 className="text-xl font-bold tracking-wider mb-4">CART TOTAL</h1>
        <p className="font-bold">
          Subtotal:{" "}
          <span className="font-medium ml-2">${subtotal.toFixed(2)}</span>
        </p>
        <p className="font-bold">
          Discount:{" "}
          <span className="font-medium ml-2">${discount.toFixed(2)}</span>
        </p>
        <p className="font-bold">
          Total: <span className="font-medium ml-2">${total.toFixed(2)}</span>
        </p>
        <div className="flex justify-center mt-4">
          <button
            onClick={openModal}
            className="cursor-pointer bg-[#FBB200] w-full py-2 text-lg rounded-full font-semibold text-white tracking-wider"
          >
            cash on delivery
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <button className="cursor-pointer bg-[#FBB200] w-full py-2 text-lg rounded-full font-semibold text-white tracking-wider">
            Paypal
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
