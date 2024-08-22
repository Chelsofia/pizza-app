// pages/api/pizzas.js

import { v4 as uuidv4 } from "uuid";

let pizzas = []; // In-memory store, replace with database in production

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      res.status(200).json(pizzas);
      break;
    case "POST":
      const newPizza = { ...req.body, id: uuidv4() };
      pizzas.push(newPizza);
      res.status(201).json(newPizza);
      break;
    case "PUT":
      const { id } = req.query;
      const updatedPizza = req.body;
      pizzas = pizzas.map((pizza) => (pizza.id === id ? updatedPizza : pizza));
      res.status(200).json(updatedPizza);
      break;
    case "DELETE":
      const deleteId = req.query.id;
      pizzas = pizzas.filter((pizza) => pizza.id !== deleteId);
      res.status(204).end();
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
