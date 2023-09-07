import mongoose from "mongoose";

const bannerSchema = mongoose.Schema({
  image: {
    type: String,
  },
  offer: {
    type: String,
  },
  link: {
    type: String,
    required: true
  }
});

const BannerSchema = mongoose.model("Banner Schema", bannerSchema);

export default BannerSchema;
