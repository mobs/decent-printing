import express from "express";
import { getData, addData, getDataByCategory, getDataByDataType, deleteData } from "../controllers/gallery.js";

const router = express.Router();

router.get('/getData', getData);
router.get('/dataByDataType', getDataByDataType);
router.post('/addData', addData);
router.get('/dataByCategory', getDataByCategory);
router.delete('/deleteData/:id',deleteData);

export default router;
