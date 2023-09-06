import mongoose from "mongoose";

const gallerySchema = mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  dataType: {
    type: String,
    required: true
  },
  data: String,
});

const GallerySchema = mongoose.model("Gallery Schema", gallerySchema);

export default GallerySchema;
