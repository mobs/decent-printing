import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";

import productRoute from "./routes/product.js";
import userRoute from "./routes/user.js";
import galleryRoute from './routes/gallery.js'
// import cartRoute from "./routes/cart.js";

config({ path: "./config/config.env" });
const app = express();

// export const instance = new Razorpay({
//   key_id: process.env.RAZORPAY_API_KEY,
//   key_secret: process.env.RAZORPAY_API_SECRET,
// });

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/product", productRoute);
app.use("/user", userRoute);
app.use('/gallery', galleryRoute);
// // app.use("/banner", bannerRoute);
// // app.use("/payment", paymentRoute);
// app.use("/cart", cartRoute);

const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`App running on port: ${PORT}`));
  })
  .catch((err) => console.log(err.message));
