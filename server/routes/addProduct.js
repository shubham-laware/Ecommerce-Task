import express from 'express';
import multer from 'multer'; // Import multer here
import AddProduct from '../controller/addProduct.js';

const router = express.Router();
const upload = multer(); // Define upload here

router.post('/new', upload.single('image'), AddProduct);

export default router;
