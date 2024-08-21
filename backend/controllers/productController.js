import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//@desc  fetch all products
//@route  GET /api/products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

//@desc  fetch product by ID
//@route GET /api/products/:id
const getProductById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  //   const product = products.find((p) => p._id === id);

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { getProducts, getProductById };
