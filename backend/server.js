import express from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/products.js";

const app = express();
const port = process.env.PORT || 5000; //added fallback port

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((p) => p._id === id);
  //   const product = products.map((p) => p._id === id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
