import express from "express";
import {
  getProducts,
  addProduct,
  getProductsByCategory,
  deleteProduct,
  outOfStock
} from "../controllers/product.js";

const router = express.Router();

router.get("/getProducts", getProducts);
router.post("/addProduct", addProduct);

router.get("/productsByCategory", getProductsByCategory);
router.delete("/deleteProduct/:id", deleteProduct);
router.patch("/outOfStock/:id", outOfStock);

export default router;
