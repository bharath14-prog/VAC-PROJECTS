import mongoose from "mongoose";
const Publisherschema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  country:{
    type:String,
    required:true,
  },
  established:{
    type:Number,
    required:false
  }
})
const Customer = mongoose.model("customers",Publisherschema);
export default Customer