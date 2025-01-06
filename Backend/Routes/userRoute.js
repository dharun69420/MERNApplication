import express from "express";
import { fetch } from "../controller/usercontroller.js";
const router = express.Router();

router.get("/fetch", fetch);
export default router;
