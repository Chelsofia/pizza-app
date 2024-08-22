import { useState } from "react";

const SignUpModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = () => {
    // Handle the sign-up logic here
    console.log("Signed up with:", { email, name });
    onClose(); // Close the modal after signing up
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">
          Sign Up for Exclusive Offers!
        </h2>
        <p className="mb-4 text-gray-600">
          Receive exclusive offers and coupon codes for our delicious pizzas.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            handleSignUp();
          }}
        >
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
