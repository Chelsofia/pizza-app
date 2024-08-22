import AddToCartBtn from "../../../components/AddToCart";

async function collectPizza(pizza_id) {
  const res = await fetch(
    `https://pizza-ordering-anno.onrender.com/api/products/${pizza_id}`
  );
  return res.json();
}

export default async function Details({ params }) {
  const pizza = await collectPizza(params.id);

  if (!pizza) {
    return (
      <main>
        <div className="text-center p-10">
          <p>Pizza not found</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="flex flex-col md:flex-row md:h-auto mx-auto p-4 gap-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={pizza?.img}
            alt={pizza?.title}
            className="object-cover w-full h-auto max-w-md rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col p-4">
          <h1 className="text-3xl md:text-4xl text-[#111111] font-bold tracking-wider mb-5">
            {pizza?.title}
          </h1>

          <h1 className="text-xl text-[#DC3545] font-bold tracking-wide mb-5">
            ${pizza.prices[0]}
            <span className="text-[#999999] ml-5">8 Reviews</span>
          </h1>

          <p className="text-md md:text-lg tracking-wider text-[#555555] mb-5">
            {pizza?.desc}
          </p>

          <h1 className="text-lg md:text-xl text-[#111111] font-bold tracking-wider mb-5">
            Choose Pizza Size
          </h1>

          <div className="mb-6 flex gap-4 items-center">
            <div className="relative cursor-pointer h-12 w-10 md:w-12">
              <img
                src="/images/pizza-icon.png"
                className="h-full w-full"
                alt="Small Pizza"
              />
              <div className="absolute bg-[#e6230d] text-white text-xs top-[-10px] right-[-30%] rounded-full p-1">
                Small
              </div>
            </div>

            <div className="relative cursor-pointer h-16 w-14 md:w-16">
              <img
                src="/images/pizza-icon.png"
                className="h-full w-full"
                alt="Medium Pizza"
              />
              <div className="absolute bg-[#e6230d] text-white text-xs top-[-10px] right-[-30%] rounded-full p-1">
                Medium
              </div>
            </div>

            <div className="relative cursor-pointer h-20 w-20 md:w-24">
              <img
                src="/images/pizza-icon.png"
                className="h-full w-full"
                alt="Large Pizza"
              />
              <div className="absolute bg-[#e6230d] text-white text-xs top-[-10px] right-[-20%] rounded-full p-1">
                Large
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <p className="text-sm md:text-md">Choose additional ingredients</p>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-sm md:text-md">Sauce</span>
            </label>
          </div>

          <input
            type="number"
            className="w-full md:w-1/3 h-10 border-2 rounded-md py-2 px-3 mb-4 outline-none"
            placeholder="Quantity"
          />

          <AddToCartBtn pizza={pizza} />
        </div>
      </div>
    </main>
  );
}
