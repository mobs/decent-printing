import mongoose from "mongoose";
import GallerySchema from "../models/gallerySchema.js";

export const getData = async (req, res) => {
  try {
    const data = await GallerySchema.find(); // since finding post in DB takes time

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addData = async (req, res) => {
  const { category, dataType, data } = req.body;


  const newData = new GallerySchema({
    category, dataType, data
  });
  try {
    await newData.save();

    res.status(201).json(newData);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getDataByDataType = async (req, res) => {
  try {
    const { dataType } = req.query;

    const categoryProduct = await GallerySchema.find({ dataType });

    res.status(201).json(categoryProduct);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getDataByCategory = async (req, res) => {
  try {
    const { category } = req.query;

    const categoryProduct = await GallerySchema.find({ category });

    res.status(201).json(categoryProduct);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const deleteData = async ( req, res ) => {
  try{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No data with that id');
    await GallerySchema.findByIdAndRemove(id);

    res.json({ message: 'Data Deleted succesfully!!! '});

  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}