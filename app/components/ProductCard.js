
import OrderButton from "./orderbutton";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

// Fetch pizza data from the API
async function getPizza() {
  const res = await fetch(
    "https://pizza-ordering-anno.onrender.com/api/products"
  );

  // Check for errors and parse the JSON data
  if (!res.ok) {
    throw new Error("Failed to fetch pizza data");
  }

  return res.json();
}

// Main component to render the pizza list
export default async function PizzaList() {
  try {
    const pizzas = await getPizza();

    // Slice the array to get items from index 1 to 4 (second to fifth item)
    const slicedPizzas = pizzas.slice(1, 7);

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {slicedPizzas.map((pizza) => (
          <Link href={"/products/product/" + pizza._id} key={pizza._id}>
            <div className="col-span-1 border-2 rounded-2xl w-full p-8">
              <img
                src={pizza.img}
                alt={pizza.title}
                className="w-full h-auto"
              />

              <h1 className="text-xl font-semibold">{pizza.title}</h1>
              <h2 className="text-lg font-bold">${pizza.prices[0]}</h2>

              <div className="my-3 flex text-[#FBB200]">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              <OrderButton />
            </div>
          </Link>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching pizzas:", error);
    return <div>Error loading pizzas.</div>;
  }
}
