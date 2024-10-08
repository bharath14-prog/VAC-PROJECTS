import { Router } from "express";
import Customer from "../../models/book.js";
const router = Router()
router.post("/post",async(req,res)=>{
  try{
    const customer = Customer(req.body)
    await customer.save()
    res.send("book created succeessfully....");
  }
  catch(error){
    res.send(error);
  }
});
router.get("/get",async(req,res)=>{
  try{
    const customers = await Customer.find();
    res.send(customers);
  }
  catch(error){
    res.send(error);
  }
});
export default router;