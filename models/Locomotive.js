import mongoose from "mongoose";

const locomotiveSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});
export default mongoose.models.locomotive ||
  mongoose.model("locomotive", locomotiveSchema);
