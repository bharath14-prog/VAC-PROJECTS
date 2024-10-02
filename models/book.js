import mongoose from "mongoose";


const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, 
  },
  ISBN: {
    type: String,
    required: true, 
  },
  price: {
    type: Number, 
  },
  author: {
    type: String, 
  },
  publisher: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);
export default Book;

