import mongoose from "mongoose";

const coachSchema = new mongoose.Schema({
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
export default mongoose.models.coach || mongoose.model("coach", coachSchema);
