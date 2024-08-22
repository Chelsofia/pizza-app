"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image"; // Assuming you're using next/image for optimization

export default function AdminPage() {
  const [pizzas, setPizzas] = useState([]);
  const [newPizza, setNewPizza] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const [editingPizza, setEditingPizza] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await axios.get("/api/pizzas");
        setPizzas(response.data);
      } catch (error) {
        console.error("Error fetching pizzas", error);
      }
    };
    fetchPizzas();
  }, []);

  const handleAddPizza = async () => {
    if (
      !newPizza.name ||
      !newPizza.description ||
      !newPizza.price ||
      !newPizza.image
    ) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await axios.post("/api/pizzas", newPizza);
      setPizzas([...pizzas, response.data]);
      setNewPizza({ name: "", description: "", price: "", image: "" });
    } catch (error) {
      console.error("Error adding pizza", error);
    }
  };

  const handleDeletePizza = async (id) => {
    try {
      await axios.delete(`/api/pizzas/${id}`);
      setPizzas(pizzas.filter((pizza) => pizza.id !== id));
    } catch (error) {
      console.error("Error deleting pizza", error);
    }
  };

  const handleEditPizza = async () => {
    if (
      !editingPizza.name ||
      !editingPizza.description ||
      !editingPizza.price ||
      !editingPizza.image
    ) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      await axios.put(`/api/pizzas/${editingPizza.id}`, editingPizza);
      setPizzas(
        pizzas.map((pizza) =>
          pizza.id === editingPizza.id ? editingPizza : pizza
        )
      );
      setEditingPizza(null);
    } catch (error) {
      console.error("Error editing pizza", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Page</h1>

      {/* Add New Pizza */}
      <h2 className="text-xl font-semibold mb-2">Add New Pizza</h2>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Name"
          value={newPizza.name}
          onChange={(e) => setNewPizza({ ...newPizza, name: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={newPizza.description}
          onChange={(e) =>
            setNewPizza({ ...newPizza, description: e.target.value })
          }
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={newPizza.price}
          onChange={(e) => setNewPizza({ ...newPizza, price: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newPizza.image}
          onChange={(e) => setNewPizza({ ...newPizza, image: e.target.value })}
          className="border p-2 rounded"
        />
        <button
          onClick={handleAddPizza}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Pizza
        </button>
      </div>

      {/* Pizza List in Table Format */}
      <h2 className="text-xl font-semibold mb-2">Pizza List</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Image</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Price</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pizzas.map((pizza) => (
            <tr key={pizza.id} className="text-center">
              <td className="px-4 py-2 border">
                <Image
                  src={pizza.image}
                  alt={pizza.name}
                  width={50}
                  height={50}
                />
              </td>
              <td className="px-4 py-2 border">{pizza.name}</td>
              <td className="px-4 py-2 border">{pizza.description}</td>
              <td className="px-4 py-2 border">${pizza.price}</td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => setEditingPizza(pizza)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeletePizza(pizza.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Pizza */}
      {editingPizza && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Edit Pizza</h2>
          <div className="grid grid-cols-4 gap-4">
            <input
              type="text"
              value={editingPizza.name}
              onChange={(e) =>
                setEditingPizza({ ...editingPizza, name: e.target.value })
              }
              className="border p-2 rounded"
            />
            <input
              type="text"
              value={editingPizza.description}
              onChange={(e) =>
                setEditingPizza({
                  ...editingPizza,
                  description: e.target.value,
                })
              }
              className="border p-2 rounded"
            />
            <input
              type="number"
              value={editingPizza.price}
              onChange={(e) =>
                setEditingPizza({ ...editingPizza, price: e.target.value })
              }
              className="border p-2 rounded"
            />
            <input
              type="text"
              value={editingPizza.image}
              onChange={(e) =>
                setEditingPizza({ ...editingPizza, image: e.target.value })
              }
              className="border p-2 rounded"
            />
            <button
              onClick={handleEditPizza}
              className="bg-green-500 text-white p-2 rounded"
            >
              Save Changes
            </button>
            <button
              onClick={() => setEditingPizza(null)}
              className="bg-gray-500 text-white p-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
