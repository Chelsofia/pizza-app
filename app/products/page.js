import React from "react";
import ProductCard from "../components/ProductCard";

const PizzaCard = () => {
  return (
    <main className="w-full max-w-screen-xl mx-auto p-4">
      <div className="flex flex-col md:flex-row mt-10">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <button className="cursor-pointer bg-[#FBB200] px-5 py-3 text-lg md:text-xl rounded-full flex font-medium text-white tracking-wider align-middle justify-center">
            Filter
          </button>
        </div>
        <br />
        <div className="flex justify-between gap-[10vw] w-full md:w-1/2">
          <p className="font-bold px-8 w-[100%]">Showing all 9 results</p>
          <select
            placeholder="Default Sorting"
            className="border-2 rounded-lg px-4 py-2 text-lg cursor-pointer"
            id="sort"
          >
            <option>Default Sorting</option>
            <option id="list">A - Z</option>
          </select>
        </div>
      </div>
      <br />
      <div className="w-full">
        <button className="cursor-pointer bg-teal-700 px-5 py-3 text-lg md:text-xl rounded-full flex font-medium text-white tracking-wider align-middle justify-center">
          Add New Pizza
        </button>
      </div>
      <br />
      <ProductCard />
      <br />
    </main>
  );
};

export default PizzaCard;
