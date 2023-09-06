import mongoose from "mongoose";
import ProductSchema from "../models/productSchema.js";

export const getProducts = async (req, res) => {
  try {
    const products = await ProductSchema.find(); // since finding post in DB takes time

    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addProduct = async (req, res) => {
  const { title, price, brand, category, image, rating, weight, detail } =
    req.body;

  const newProduct = new ProductSchema({
    title,
    price,
    brand,
    category,
    image,
    rating,
    weight,
    detail,
  });
  try {
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.query;

    const categoryProduct = await ProductSchema.find({ category });

    res.status(201).json(categoryProduct);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteProduct = async ( req, res ) => {
  try{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No product with that id');
    await ProductSchema.findByIdAndRemove(id);

    res.json({ message: 'Product Deleted succesfully!!! '});

  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const outOfStock = async ( req,res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No product with that id');

  await ProductSchema.findByIdAndUpdate(id, {$set: {'inStock': false}}, {new: true})
  const products = await ProductSchema.find();
  res.json(products);
}


// export const getParticularProduct = async (req, res) => {
//   try {
//     const { id: _id } = req.params;
//     const prod = await ProductSchema.findById(id);
//     res.status(201).json(prod);
//   } catch {}
// };

// export const getCategory = async (req, res) => {
//   try {
//     const products = await ProductSchema.find();
//     const categories = products.map(({ category }) => {
//       return category;
//     });
//     let cat = [];
//     for (const ele of categories) {
//       if (!cat.includes(ele)) {
//         cat.push(ele);
//       }
//     }
//     res.status(201).json(cat);
//   } catch {
//     res.status(404);
//   }
// };
