import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./utils/db.js";
import {router} from "./routes/userRoute.js";
import { propertyRouter } from "./routes/propertyRouter.js";

dotenv.config();

const app = express();

//express-json
app.use(express.json({limit:"100mb"}));

//urlencoded
app.use(express.urlencoded({limit:"100mb", extended:true}));

//cookie-parser
app.use(cookieParser());

const PORT = process.env.PORT;

//one test route
app.get("/", (req,res) => {
    res.send("HomelyHub server is running");
})

app.use("/api/v1/rent/user", router);
app.use("/api/v1/rent/listing", propertyRouter);

connectDB();

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})
