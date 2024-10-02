import mongoose from "mongoose";
const Authorschema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  bio:{
    type:String,
    required:false,
  },
  nationality:{
    type:String,
    required:false,
  }

})
const Customer = mongoose.model("Author",Authorschema);
export default Customer