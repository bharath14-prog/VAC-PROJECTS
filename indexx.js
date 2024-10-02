import { Router } from "express";
import Publisher from "../../models/publish.js"
router.put("/view/:id", async (req, res) => {
  try {
    const publisher = await Publisher.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!publisher)
      return res.status(404).send({ message: "Publisher not found" });
    res.status(200).send(publisher);
  } catch (error) {
    res.send("Error: " + error);
  }
});
router.delete("/view/:id", async (req, res) => {
  try {
    const publisher = await Publisher.findByIdAndDelete(req.params.id);
    res.send(" Publisher deleted successfully");
    if (!publisher) res.send("Publisher not found");
  } catch (error) {
    res.send("Error deleting publisher" + error);
  }
});
export default router;