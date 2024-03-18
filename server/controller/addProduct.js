// Backend: addProduct.js
import multer from 'multer';
import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import pool from '../db/dbConnect.js';

dotenv.config();

const upload = multer({ dest: 'uploads/' });

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});

async function AddProduct(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const dataUrl = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;

        // Upload the data URL to Cloudinary
        const cloudinaryResponse = await cloudinary.uploader.upload(dataUrl, {
            folder: 'MinitGo'
        });

        const imageUrl = cloudinaryResponse.secure_url;

        // Assuming you have a description field in your FormData
        const { description } = req.body;
        
        // Insert data into the database
        await pool.query('INSERT INTO AddProduct (image, description) VALUES (?, ?)', [imageUrl, description]);

        res.status(200).json({ message: 'Product added successfully' });
    } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default AddProduct;
