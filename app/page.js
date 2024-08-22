import OrderButton from "./components/orderbutton";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="">
      <section className="flex flex-col md:flex-row md:h-screen mx-auto p-6 relative">
        <div className="flex md:flex-col md:w-1/2 justify-center text-center md:text-left p-4">
          <div className="w-full md:w-[90%]">
            <h1 className="text-4xl font-bold">
              Handmade, With an Extra Pinch of{" "}
              <span className="text-red-500">Love</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry.
            </p>
            <div className="mt-10 justify-center">
              <OrderButton />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 justify-center text-center m-auto ">
          <img src="./images/raisins-pizza.png" className="w-80 h-70" />
          <img
            src="./images/half_yellow.png"
            className="hidden lg:block h-85 w-70 absolute top-0 right-0 z-[-10]"
          />
          <img
            src="./images/pizza-onion.png"
            className="lg:block absolute bottom-150 left-50 z-[-10] "
          />
          <img
            src="./images/pizzaa.png"
            className="absolute bottom-90 right-80 z-[-10] w-60 h-60"
          />
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row md:h-screen mx-auto p-4 gap-4">
        <div className="md:w-1/3 justify-center text-center m-auto">
          <img src="./images/pieces.png" className="w-60" />
        </div>
        <div className="flex md:flex-col md:w-2/3 justify-center text-center md:text-left relative p-4">
          <div className="w-full md:w-[50%]">
            <h2 className="text-2xl font-bold mb-6">
              Daily Fresh and always tasty
            </h2>
            <p className=" md:text-2xl text-[#555555] mb-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have
            </p>
            <div className="hidden md:block absolute bottom-25 left-[65%]">
              <img src="./images/garlic.png" className="w-20 h-20" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="our strength"
        className="text-red-500 bg-[#FFFAED] mx-auto py-20 px-4 relative"
      >
        <p className="text 2xl md:text-3xl tracking-wider font-semibold text-[#e20202] mb-10">
          Our Strength
        </p>

        <h1 className="text-4xl md:text-3xl tracking-wider font-semibold text-black leading-[1.7] mb-3">
          Why we are the best?
        </h1>
        <img
          src="./images/pizza-cut.png"
          className="absolute top-[20%] md:top-[15%] right-0 w-30 h-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-1">
            <img src="./images/all-kinds-of-foods.png" />
            <h1 className="text-xl font-bold text-black mt-5">
              All Kinds of Food
            </h1>
            <p className="text-lg text-[#555555] mt-4 tracking-wider">
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry.
            </p>
          </div>
          <div className="col-span-1">
            <img src="./images/fresh-foods.png" />
            <h1 className="text-xl font-bold text-black mt-5">
              All Kinds of Food
            </h1>
            <p className="text-lg text-[#555555] mt-4 tracking-wider">
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry.
            </p>
          </div>
          <div className="col-span-1">
            <img src="./images/best-taste.png" />
            <h1 className="text-xl font-bold text-black mt-5">
              All Kinds of Food
            </h1>
            <p className="text-lg text-[#555555] mt-4 tracking-wider">
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry.
            </p>
          </div>
          <div className="col-span-1">
            <img src="./images/on-time-delivery.png" />
            <h1 className="text-xl font-bold text-black mt-5">
              All Kinds of Food
            </h1>
            <p className="text-lg text-[#555555] mt-4 tracking-wider">
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry.
            </p>
          </div>
        </div>
      </section>
      <br></br>
      <section>
        <ProductCard />
      </section>
      <br></br>
      <img src="./images/leaf.png" className="absolute left-0 w-12 h-12" />
      <section className="mx-auto py-20 px-relative">
        <p className="text-2xl md:text-3xl font-semibold mb-3 mt-2 tracking-wider">
          Customer Feedback
        </p>
        <h1 className="text-black md:text-5xl font-bold mb-6 pb-16">
          Client Testimonials
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-1 border-2 rounded-xl mx-auto flex-col text-center items-center p-12">
            <img src="./images/man_1.jpg" className="mx-auto rounded-full" />
            <h1>Takar Bowa</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry.
            </p>
          </div>
          <div className="col-span-1 border-2 rounded-xl mx-auto flex-col text-center items-center p-12">
            <img src="./images/man_2.jpg" className="mx-auto rounded-full" />
            <h1>Takar Bowa</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry.
            </p>
          </div>
          <div className="col-span-1 border-2 rounded-xl mx-auto flex-col text-center items-center p-12">
            <img src="./images/man_3.jpg" className="mx-auto rounded-full" />
            <h1>Takar Bowa</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry.
            </p>
          </div>
          <div className="col-span-1 border-2 rounded-xl mx-auto flex-col text-center items-center p-12">
            <img src="./images/man_4.jpg" className="mx-auto rounded-full" />
            <h1>Takar Bowa</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
