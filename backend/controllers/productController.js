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

//@desc  create a product
//@route  POST /api/products
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample brand",
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

//@desc  update a product
//@route  PUT /api/products/:id
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updateProduct = await product.save();
    res.json(updateProduct);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

//@desc  delete a product
//@route  DELETE /api/products/:id
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.deleteOne({
      _id: product._id,
    });
    res.status(200).json({ message: "Product deleted" });
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
