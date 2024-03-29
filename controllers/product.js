const Product = require("../models/product");

const getProducts = async (req, res) => {
  const products = await Product.find({ deleted: false }).sort({ _id: -1 });

  res.status(200).json({ ok: true, products, count: products.length });
};

const createProduct = (req, res) => {
  if (!req.body.name) {
    res.status(400).json({
      ok: false,
      message: "el campo nombre del producto es obligatorio",
    });
    return;
  }
  const newProduct = new Product(req.body);

  newProduct
    .save()
    .then((product) => {
      res.status(201).json({ ok: true, product });
    })
    .catch((err) => console.log(err));
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  await Product.findByIdAndUpdate(id, {
    deleted: true,
  });
  res.status(200).json({ ok: true });
};

module.exports = {
  getProducts,
  createProduct,
  deleteProduct,
};
