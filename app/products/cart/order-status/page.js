// pages/order-details.js
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const OrderDetails = () => {
  const router = useRouter();
  const { name, phone, address } = router.query;
  const [status, setStatus] = useState("preparing");

  useEffect(() => {
    const statusTimer = setInterval(() => {
      if (status === "preparing") {
        setStatus("on the way");
      } else if (status === "on the way") {
        setStatus("delivered");
        clearInterval(statusTimer);
      }
    }, 5000); // Change status every 5 seconds for demo purposes

    return () => clearInterval(statusTimer);
  }, [status]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Order Details</h2>
      <div className="mb-4">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
      </div>
      <div className="mb-4">
        <p>
          <strong>Status:</strong> {status}
        </p>
      </div>
    </div>
  );
};

export default OrderDetails;
