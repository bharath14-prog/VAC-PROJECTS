import mongoose from "mongoose";
const Authorschema = new mongoose.Schema({
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
const Customer = mongoose.model("Author",Authorschema);
export default Customer