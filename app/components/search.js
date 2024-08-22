"use client";

import React, { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa"; // Import the search icon

export default function SearchComponent() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return; // Avoid empty search queries

    setLoading(true);
    try {
      const response = await axios.get(
        `https://pizza-ordering-anno.onrender.com/api/products?search=${query}`
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border px-4 py-2 rounded-l-md focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="absolute right-0 top-0 bottom-0 flex items-center px-4 py-2 rounded-r-md bg-blue-500 text-white hover:bg-blue-600"
      >
        <FaSearch size={20} />
      </button>
      {loading && <p className="absolute top-full mt-2">Loading...</p>}
      <div className="absolute top-full mt-8 w-full">
        {results.length > 0 ? (
          <ul className="list-disc pl-5">
            {results.map((item) => (
              <li key={item.id} className="py-2">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>{item.description}</p>
                <p className="text-gray-500">${item.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>No results found</p>
        )}
      </div>
    </div>
  );
}
