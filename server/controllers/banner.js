import mongoose from "mongoose";
import BannerSchema from "../models/bannerSchema.js";

export const getBanner = async (req, res) => {
  try {
    const banners = await BannerSchema.find();

    res.status(200).json(banners);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const addBanner = async (req, res) => {
  const { link, offer, image } = req.body;

  const newBanner = new BannerSchema({
    link,
    offer,
    image
  });
  try {
    await newBanner.save();

    res.status(201).json(newBanner);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteBanner = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);

    await BannerSchema.findByIdAndRemove(id);

    res.status(200).json("Banner Deleted Succesfully");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
