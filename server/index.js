import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import multer  from 'multer';
import {getReviews} from './controller/reviews.js';
import { postReviews } from './controller/reviews.js';
import orderStatus from './routes/orderStatus.js'
import trackOrder from './routes/trackOrder.js'
import addProduct from './routes/addProduct.js'


const app=express();
app.use(cors());
app.use(bodyParser.json())
app.use(express.json())


app.use('/status',orderStatus)
app.use('/track-order',trackOrder)
app.use('/add-product',addProduct)

app.get('/reviews',async(req,res)=>{
    const reviews=await getReviews();
    res.send(reviews)
    console.log(reviews)
})

app.post('/reviews',async(req,res)=>{
    // console.log(req.body)
    const {name,review}=req.body;
    console.log(req.body)
   const postedReview= await postReviews(name,review);

   res.status(200).send(postedReview);

})




app.listen(8000,()=>{

    console.log("SERVER STARTED")
})

