import mongoose from "mongoose";

const CoachSchema = new mongoose.Schema({
  coachSerialNumber: {
    type: String,
  },
  category: {
    type: String,
  },
  seats: {
    type: [Object],
  },
});
export default mongoose.models.Coach || mongoose.model("Coach", CoachSchema);
