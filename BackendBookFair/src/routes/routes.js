import express from "express";
import { bookDataSave, getBookData, home } from "../controllers/Controllers.js";
const router = express.Router();

router.post("/upload", bookDataSave)
router.get("/getdata", getBookData)
router.get("/", home)



export default router
