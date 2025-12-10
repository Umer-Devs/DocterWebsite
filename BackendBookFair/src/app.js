import express from "express";
import dotev from "dotenv";

import cors from "cors";
import router from "./routes/routes.js";
import { connectDB } from "./database/db.js";

dotev.config({
    path:'./.env'
})
const app =express()

app.use(cors());
app.use(express.json());

app.use("/",router)

const port =process.env.PORT || 4000
connectDB()

 app.listen(port,()=>console.log(`Server running on port ${port}`))
