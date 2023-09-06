import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: String,
  inStock: {
    type: Boolean,
    required: true,
    default: true
  },
  offer: {
    type: String,
  }
});

const ProductSchema = mongoose.model("Product Schema", productSchema);

export default ProductSchema;
