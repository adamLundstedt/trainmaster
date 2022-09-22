import mongoose from "mongoose";

const trainSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  locomotiveId: {
    type: ObjetId,
  },
  coaches: {
    type: [Object],
  },
});
export default mongoose.models.train || mongoose.model("train", trainSchema);
