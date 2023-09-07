import express from "express";
import { addBanner, deleteBanner, getBanner } from "../controllers/banner.js";

const router = express.Router();

router.get("/getBanner", getBanner);
router.post("/addBanner", addBanner);
router.delete("/deleteBanner/:id", deleteBanner);

export default router;
