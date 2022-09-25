import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const trainSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  locomotiveId: {
    type: ObjectId,
  },
  coaches: {
    type: [Object],
  },
});
export default mongoose.models.train || mongoose.model("train", trainSchema);
