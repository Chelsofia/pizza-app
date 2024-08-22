"use client";

import React, { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const SearchModal = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return; // Avoid empty search queries

    setLoading(true);
    try {
      // Fetch the full list of products from the API
      const response = await axios.get(
        `https://pizza-ordering-anno.onrender.com/api/products`
      );
      const products = response.data;

      // Perform client-side filtering based strictly on item title
      const filteredResults = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );

      setResults(filteredResults);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle link click and close the modal
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Search Products</h2>
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border px-4 py-2 rounded-l-md focus:outline-none w-full"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
          >
            <FaSearch size={20} />
          </button>
        </div>
        {loading && <p className="text-gray-500">Loading...</p>}
        <div className="mt-4 max-h-[70vh] overflow-y-auto">
          {results.length > 0 ? (
            <ul className="list-disc pl-5">
              {results.map((item) => (
                <li key={item._id} className="py-2 flex items-start gap-4">
                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                  )}
                  <div>
                    <h2 className="text-lg font-semibold">
                      <Link
                        href={`/products/product/${item._id}`}
                        onClick={handleLinkClick} // Close the modal when link is clicked
                      >
                        {item.title}
                      </Link>
                    </h2>
                    <p>{item.desc}</p>
                    <p className="text-gray-500">${item.prices[0]}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            !loading && <p>No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
