import { Router } from "express";
import Author from "../../models/author.js";

const router = Router();

router.post("/writer", async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).send("Author added");
  } catch (error) {
    res.status(400).send({ message: "Error creating author", error });
  }
});

router.get("/writer", async (req, res) => {
  try {
    const author = await Author.find();
    res.status(200).send("Author added");
  } catch (error) {
    res.status(500).send({ message: "Error fetching author", error });
  }
});
router.put("/writer/:id", async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!author) return res.status(404).send({ message: "Author not found" });
    res.status(200).send(author);
  } catch (error) {
    res.send("Error: " + error);
  }
});
router.delete("/writer/:id", async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    res.send(" Author deleted successfully");
    if (!author) res.send("Author not found");
  } catch (error) {
    res.send("Error deleting author" + error);
  }
});
export default router;
