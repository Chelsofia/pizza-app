"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const BlogPage = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPizzas = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://pizza-ordering-anno.onrender.com/api/products"
        );
        setPizzas(response.data);
      } catch (error) {
        console.error("Error fetching pizza data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  const slicedPizzas = pizzas.slice(1, 7);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Our Pizza Selection</h1>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {slicedPizzas.map((pizza) => (
            <div key={pizza._id} className="border p-4 rounded-lg shadow-md">
              {pizza.img && (
                <Image
                  src={pizza.img} // Use the correct image path
                  alt={pizza.title}
                  width={500}
                  height={ 300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{pizza.title}</h2>
              <p className="text-gray-600 mb-4">{pizza.desc}</p>
              <p className="text-gray-900 font-bold">
                Price: ${pizza.prices[0]}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
