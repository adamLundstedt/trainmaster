import mongoose from "mongoose";

const TrainSchema = new mongoose.Schema({
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
export default mongoose.models.Train || mongoose.model("Train", TrainSchema);
