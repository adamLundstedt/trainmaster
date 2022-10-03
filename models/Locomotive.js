import mongoose from "mongoose";

const LocomotiveSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});
export default mongoose.models.Locomotive ||
  mongoose.model("Locomotive", LocomotiveSchema);
