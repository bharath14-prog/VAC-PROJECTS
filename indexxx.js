import { Router } from "express";
import Customer from "../../models/author.js";
const router = Router()
router.put("/pub/:id",async(req,res)=>{
  try{
    const pub1 = await Customer.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true,
    });
    if(!pub1) return res.status(404).send({
      message:"publisher not found...."
    });
    res.status(200).send(pub1);
    res.send()
  }
  catch(error){
    res.status(400).send({
      message:"error updating publisher...",error
    })
  }
})
router.delete("/pub/:id",async(req,res)=>{
  try{
    const pub1 = await Customer.findByIdAndDelete(req.params.id);
    if(!pub1) return res.status(404).send({
      message:"publisher not found...."
    });
    res.status(200).send(pub1);
    res.send()
  }
  catch(error){
    res.status(400).send({
      message:"error updating publisher...",error
    })
  }
})