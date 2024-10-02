import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import crudrouter from "./router/crudroutes/index.js"
const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use("/crud",crudrouter);
const PORT = process.env.PORT;
app.get("/",(req,res)=>{
  const name = req.body.name;
  res.send("hello my name is "+name);
});
mongoose.connect("mongodb+srv://mongodb:vac@cluster0.oalxy.mongodb.net/vac_1")
.then(()=>{
  console.log("mongodb connected...");
});
app.listen(PORT,()=>{
  console.log("server started at "+PORT);
  console.log(process.env.name);
})