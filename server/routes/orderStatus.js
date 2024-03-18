import { Router } from "express";
import UpdateOrderStatus from "../controller/updateOrderStatus.js";


const router=Router();


router.route('/order-status').post(UpdateOrderStatus)

export default router;