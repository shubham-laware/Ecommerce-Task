import { Router } from "express";
import TrackOrder from "../controller/trackOrder.js";

const router=Router();

router.get('/track',TrackOrder);

export default router