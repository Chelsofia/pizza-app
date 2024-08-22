"use client";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import { useContext } from "react";
import { cartContext } from "../../cartContext";

export default function AddToCartBtn({ pizza }) {
  const { data, setData } = useContext(cartContext);

  const handleClick = () => {
    setData((prev) => [...prev, pizza]);
    toast.success("Added to cart!");
    console.log({ pizza, data });
  };

  return (
    <button
      className="cursor-pointer bg-[#FBB200] px-8 py-3 text-lg md:text-xl rounded-full flex font-medium text-white tracking-wider gap-4"
      onClick={handleClick}
    >
      <FaShoppingCart />
      ADD TO CART
    </button>
  );
}
